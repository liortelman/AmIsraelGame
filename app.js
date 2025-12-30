/* eslint-disable no-alert */

/* 
  English-only comments per user's preference.
*/

const STORAGE_KEY = "amIsraelGameState_v1";

const SCREENS = {
  start: "screenStart",
  board: "screenBoard",
  duel: "screenDuel",
};

let state = null;
let dataModel = null;

let activeQuestion = null;
let timerInterval = null;
let timerEndMs = null;

document.addEventListener("DOMContentLoaded", async () => {
  wireUI();
  buildTeamsForm();

  await loadQuestionsData();
  showScreen(SCREENS.start);

  const saved = loadState();
  document.getElementById("btnResume").disabled = !saved;
});

function wireUI() {
  document.getElementById("teamCount").addEventListener("change", buildTeamsForm);

  document.getElementById("btnStart").addEventListener("click", () => {
    startNewGameFromForm();
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("לאפס את המשחק?")) {
      clearState();
      location.reload();
    }
  });

  document.getElementById("btnResume").addEventListener("click", () => {
    const saved = loadState();
    if (!saved) {
      alert("אין משחק שמור.");
      return;
    }
    state = saved;
    showScreen(SCREENS.board);
    renderBoard();
    renderHeader();
  });

  // Modal handlers
  document.getElementById("btnCloseModal").addEventListener("click", closeModal);
  document.getElementById("btnNoPoints").addEventListener("click", () => finalizeQuestion(null));

  document.getElementById("btnShowAnswer").addEventListener("click", () => {
    const el = document.getElementById("modalAnswer");
    el.classList.remove("hidden");
  });

  document.getElementById("btnHelpTeacher").addEventListener("click", () => {
    alert("גלגל הצלה: שאל את המורה ✅");
  });

  document.getElementById("btnHelpGoogle").addEventListener("click", () => {
    startTimerSeconds(20, "20 שניות לגוגל");
    // Note: We do not force opening Google because internet may not exist.
  });

  // Duel handlers
  document.getElementById("btnDuelBack").addEventListener("click", () => {
    activeQuestion = null;
    showScreen(SCREENS.board);
    renderBoard();
    renderHeader();
  });

  document.getElementById("btnDuelShowQuestion").addEventListener("click", () => {
    document.getElementById("duelQuestionArea").classList.remove("hidden");
    document.getElementById("duelQuestionText").textContent = activeQuestion?.text || "";
  });

  document.getElementById("btnDuelWinnerTeam0").addEventListener("click", () => duelWinner(0));
  document.getElementById("btnDuelWinnerTeam1").addEventListener("click", () => duelWinner(1));
  document.getElementById("btnDuelWinnerTeam2").addEventListener("click", () => duelWinner(2));
}

function showScreen(screenId) {
  Object.values(SCREENS).forEach((id) => {
    document.getElementById(id).classList.add("hidden");
  });
  document.getElementById(screenId).classList.remove("hidden");
}

function buildTeamsForm() {
  const count = Number(document.getElementById("teamCount").value);
  const wrap = document.getElementById("teamsForm");
  wrap.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const row = document.createElement("div");
    row.className = "teamRow";

    const label = document.createElement("div");
    label.className = "label";
    label.textContent = `קבוצה ${i + 1}`;

    const input = document.createElement("input");
    input.className = "input";
    input.type = "text";
    input.placeholder = `שם קבוצה ${i + 1}`;
    input.id = `teamName${i}`;
    input.value = i === 0 ? "קבוצה א׳" : (i === 1 ? "קבוצה ב׳" : "קבוצה ג׳");

    row.appendChild(label);
    row.appendChild(input);
    wrap.appendChild(row);
  }
}

async function loadQuestionsData() {
  // Note: Using fetch for local JSON usually works when opened from file:// in many browsers,
  // but some environments block it. If that happens, we can inline the JSON in app.js.
  try {
    const res = await fetch("data/questions.json");
    if (!res.ok) throw new Error("Failed to load questions.json");
    dataModel = await res.json();
  } catch (e) {
    alert(
      "לא הצלחתי לטעון data/questions.json.\n" +
      "אם פתחת מ-file:// ודפדפן חסם את זה, תגידי לי ואני אתן לך גרסה ללא fetch."
    );
    throw e;
  }
}

function startNewGameFromForm() {
  const count = Number(document.getElementById("teamCount").value);

  const teams = [];
  for (let i = 0; i < count; i++) {
    const name = document.getElementById(`teamName${i}`).value.trim() || `קבוצה ${i + 1}`;
    teams.push({ name, score: 0 });
  }

  state = {
    teams,
    currentTeam: 0,
    questionsUsed: {}, // map questionId -> true
  };

  saveState();
  showScreen(SCREENS.board);
  renderBoard();
  renderHeader();
}

function renderHeader() {
  const turn = state.teams[state.currentTeam]?.name || "";
  document.getElementById("turnLabel").textContent = `התור של: ${turn}`;

  const bar = document.getElementById("scoreBar");
  bar.innerHTML = "";
  state.teams.forEach((t) => {
    const pill = document.createElement("div");
    pill.className = "scorePill";
    pill.textContent = `${t.name}: ${t.score}`;
    bar.appendChild(pill);
  });
}

function renderBoard() {
  const board = document.getElementById("board");
  board.innerHTML = "";

  // Header row: empty + 1..7
  board.appendChild(makeCell("", true));
  for (let i = 1; i <= 7; i++) {
    board.appendChild(makeCell(String(i), false));
  }

  const categories = dataModel.categories;
  for (const cat of categories) {
    board.appendChild(makeCategoryCell(cat.title));

    for (let idx = 1; idx <= 7; idx++) {
      const q = findQuestion(cat.id, idx);

      const cell = document.createElement("div");
      cell.className = "cell";

      const btn = document.createElement("button");
      btn.className = "qBtn";
      btn.type = "button";
      btn.textContent = String(idx);

      const used = q ? Boolean(state.questionsUsed[q.id]) : true;
      if (used) {
        btn.classList.add("used");
        btn.disabled = true;
      } else {
        btn.addEventListener("click", () => onSelectQuestion(q));
      }

      // If no question exists in JSON for this cell, disable it.
      if (!q) {
        btn.classList.add("used");
        btn.disabled = true;
      }

      cell.appendChild(btn);
      board.appendChild(cell);
    }
  }
}

function makeCell(text, isBlank) {
  const div = document.createElement("div");
  div.className = "cell";
  div.textContent = text;
  if (isBlank) div.style.background = "transparent";
  return div;
}

function makeCategoryCell(title) {
  const div = document.createElement("div");
  div.className = "cell catCell";
  div.textContent = title;
  return div;
}

function findQuestion(categoryId, index) {
  return dataModel.questions.find((q) => q.category === categoryId && q.index === index) || null;
}

function onSelectQuestion(q) {
  activeQuestion = q;

  if (q.type === "duel") {
    openDuelScreen(q);
    return;
  }

  openModal(q);
}

function openModal(q) {
  stopTimer();

  document.getElementById("modalCategory").textContent = categoryTitle(q.category);
  document.getElementById("modalMeta").textContent = `סוג: ${typeLabel(q.type)} | ניקוד: ${q.points}`;
  document.getElementById("modalQuestion").textContent = q.text;

  // Options (for trivia mode)
  const optWrap = document.getElementById("modalOptions");
  optWrap.innerHTML = "";
  if (Array.isArray(q.options) && q.options.length > 0) {
    optWrap.classList.remove("hidden");
    q.options.forEach((opt) => {
      const b = document.createElement("button");
      b.className = "optionBtn";
      b.type = "button";
      b.textContent = opt;
      // In MVP, we do not auto-check correctness; instructor decides.
      b.addEventListener("click", () => {
        alert(`נבחר: ${opt}\nהמדריך/ה מסמן/ת נכון או לא נכון.`);
      });
      optWrap.appendChild(b);
    });
  } else {
    optWrap.classList.add("hidden");
  }

  const ansEl = document.getElementById("modalAnswer");
  ansEl.textContent = q.answer ? `תשובה: ${q.answer}` : "אין תשובה מוגדרת (המדריך/ה מחליט/ה).";
  ansEl.classList.add("hidden");

  // Team buttons
  const teamBtns = document.getElementById("teamButtons");
  teamBtns.innerHTML = "";
  state.teams.forEach((t, i) => {
    const b = document.createElement("button");
    b.className = "btn btn-success";
    b.type = "button";
    b.textContent = t.name;
    b.addEventListener("click", () => finalizeQuestion(i));
    teamBtns.appendChild(b);
  });

  document.getElementById("modalOverlay").classList.remove("hidden");
}

function closeModal() {
  stopTimer();
  document.getElementById("modalOverlay").classList.add("hidden");
  activeQuestion = null;
}

function finalizeQuestion(winnerTeamIndexOrNull) {
  if (!activeQuestion) return;

  // Mark used
  state.questionsUsed[activeQuestion.id] = true;

  // Award points if requested
  if (winnerTeamIndexOrNull !== null && winnerTeamIndexOrNull !== undefined) {
    state.teams[winnerTeamIndexOrNull].score += Number(activeQuestion.points || 0);
  }

  // Move turn to next team (simple round-robin)
  state.currentTeam = (state.currentTeam + 1) % state.teams.length;

  saveState();
  closeModal();
  renderBoard();
  renderHeader();
}

function openDuelScreen(q) {
  stopTimer();
  showScreen(SCREENS.duel);

  document.getElementById("duelIntro").textContent =
    `שאלה דו־קרב (${q.points} נק׳). לחצו "הצג שאלה" כשכולם מוכנים.`;

  document.getElementById("duelQuestionArea").classList.add("hidden");
  document.getElementById("duelQuestionText").textContent = "";

  // Configure winner buttons
  document.getElementById("btnDuelWinnerTeam0").textContent = state.teams[0].name;
  document.getElementById("btnDuelWinnerTeam1").textContent = state.teams[1].name;

  const btn2 = document.getElementById("btnDuelWinnerTeam2");
  if (state.teams.length === 3) {
    btn2.classList.remove("hidden");
    btn2.textContent = state.teams[2].name;
  } else {
    btn2.classList.add("hidden");
  }
}

function duelWinner(teamIndex) {
  if (!activeQuestion) return;

  // Mark used + award points
  state.questionsUsed[activeQuestion.id] = true;
  state.teams[teamIndex].score += Number(activeQuestion.points || 0);

  // For duel, we still advance turn
  state.currentTeam = (state.currentTeam + 1) % state.teams.length;

  saveState();

  activeQuestion = null;
  showScreen(SCREENS.board);
  renderBoard();
  renderHeader();
}

function categoryTitle(categoryId) {
  return dataModel.categories.find((c) => c.id === categoryId)?.title || categoryId;
}

function typeLabel(type) {
  switch (type) {
    case "regular": return "שאלה רגילה";
    case "all": return "שאלה לכולם";
    case "personal": return "שאלה אישית";
    case "duel": return "דו־קרב";
    default: return type;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
}

function startTimerSeconds(seconds, label) {
  stopTimer();

  const bar = document.getElementById("timerBar");
  const fill = document.getElementById("timerFill");
  const text = document.getElementById("timerText");

  bar.classList.remove("hidden");
  fill.style.width = "0%";

  const totalMs = seconds * 1000;
  const startMs = Date.now();
  timerEndMs = startMs + totalMs;

  const tick = () => {
    const now = Date.now();
    const remaining = Math.max(0, timerEndMs - now);
    const done = 1 - remaining / totalMs;

    fill.style.width = `${Math.round(done * 100)}%`;
    text.textContent = `${label} • נשארו ${Math.ceil(remaining / 1000)} שנ׳`;

    if (remaining <= 0) {
      stopTimer();
      alert("הזמן נגמר!");
    }
  };

  tick();
  timerInterval = setInterval(tick, 100);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerEndMs = null;

  document.getElementById("timerBar").classList.add("hidden");
  document.getElementById("timerFill").style.width = "0%";
}