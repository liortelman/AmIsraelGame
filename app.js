/* Auto-generated app.js - local-file friendly (no fetch) */
const QUESTIONS = {
  "meta": {
    "title": "אני והסיפור שלנו",
    "version": "1.0",
    "board": { "rows": 7, "cols": 6 },
    "categoriesOrder": ["history", "places", "figures", "values", "symbols", "achievements"]
  },
  "categories": {
    "history": {
      "label": "היסטוריה",
      "questions": [
        { "id": "history-1", "points": 10, "type": "for_everyone", "question": /"למי נאמר: /"לך לך מארצך, ממולדתך ומבית אביך אל הארץ אשר אראך"?", "options": ["אברהם", "יצחק", "יעקב", "משה"], "answer": "אברהם", "hint": "" },
        { "id": "history-2", "points": 15, "type": "personal", "question": "איזה חג חוגגים כזכרון ליציאת מצרים? ואיזה מצווה בחג היא זכרון לתקופה?.", "options": [], "answer": "חג הפסח", "hint": "" },
        { "id": "history-3", "points": 20, "type": "duel", "question": "כל קבוצה אומרת בתורה אחד מעשרת הדיברות. 5 שניות בלי תשובה- ניצחון לקבוצה השניה.", "options": [], "answer": "", "hint": "" },
        { "id": "history-4", "points": 5, "type": "regular", "question": "", "options": [""], "answer": "", "hint": "" },
        { "id": "history-5", "points": 15, "type": "personal", "question": "מי בנה את בית המקדש הראשון?", "options": [], "answer": "", "hint": "" },
        { "id": "history-6", "points": 5, "type": "regular", "question": "בין אילו שנים הייתנ מלחמת העולם השניה? לרשום על הדף ולהראות.", "options": [], "answer": "", "hint": "" },
        { "id": "history-7", "points": 5, "type": "regular", "question": "כמה אנשים חתומים על מגילת העצמאות?.", "options": [], "answer": "", "hint": "" }
      ]
    },

    "places": { "label": "מקומות", "questions": [] },
    "figures": { "label": "דמויות", "questions": [] },
    "values": { "label": "ערכים", "questions": [] },
    "symbols": { "label": "סמלים", "questions": [] },
    "achievements": { "label": "הישגים", "questions": [] }
  }
};

/* === State === */
const DEFAULT_STATE = {
  phase: "start",
  teamCount: 2,
  teams: [],
  currentTeamIndex: 0,
  used: {},
  duel: null
};

let state = loadState() || clone(DEFAULT_STATE);

/* === Utils === */
function $(id) { return document.getElementById(id); }
function clone(obj) {
  if (typeof structuredClone === "function") return structuredClone(obj);
  return JSON.parse(JSON.stringify(obj));
}
function saveState() { localStorage.setItem("amIsraelGameState", JSON.stringify(state)); }
function loadState() {
  try { return JSON.parse(localStorage.getItem("amIsraelGameState")); }
  catch { return null; }
}
function resetState() {
  localStorage.removeItem("amIsraelGameState");
  state = clone(DEFAULT_STATE);
}
function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}
function showOnlyScreen(screenId) {
  ["screenStart", "screenBoard", "screenDuel"].forEach(id => {
    const el = $(id);
    if (el) el.classList.add("hidden");
  });
  const target = $(screenId);
  if (target) target.classList.remove("hidden");
}

/* === Game rules helpers === */
function rowsCount() {
  return QUESTIONS?.meta?.board?.rows
    || Math.max(...Object.values(QUESTIONS.categories).map(c => c.questions.length));
}
function getQuestionBy(catKey, index0) {
  const cat = QUESTIONS.categories[catKey];
  if (!cat) return null;
  return cat.questions[index0] || null;
}
function getQuestionPoints(q) {
  return Number(q?.points || 0);
}

/* === Start screen === */
function buildTeamsForm(teamCount) {
  const wrap = $("teamsForm");
  if (!wrap) return;
  wrap.innerHTML = "";
  for (let i = 0; i < teamCount; i++) {
    const row = document.createElement("div");
    row.className = "team-row";
    row.innerHTML = `
      <label class="team-label">קבוצה ${i + 1}</label>
      <input class="team-input" id="teamName${i}" type="text" placeholder="שם קבוצה ${i + 1}" />
    `;
    wrap.appendChild(row);
  }
}

function initTeamsFromForm() {
  const teamCount = Number($("teamCount")?.value || 2);
  state.teamCount = teamCount;
  state.teams = [];
  for (let i = 0; i < teamCount; i++) {
    const name = ($(`teamName${i}`)?.value || `קבוצה ${i + 1}`).trim() || `קבוצה ${i + 1}`;
    state.teams.push({ name, score: 0 });
  }
  state.currentTeamIndex = 0;
  state.used = {};
  state.duel = null;
  state.phase = "board";
  saveState();
}

/* === Board UI === */
function renderScoreBar() {
  const bar = $("scoreBar");
  if (!bar) return;
  bar.innerHTML = "";
  state.teams.forEach((t, i) => {
    const pill = document.createElement("div");
    pill.className = "score-pill" + (i === state.currentTeamIndex ? " active" : "");
    pill.textContent = `${t.name}: ${t.score}`;
    bar.appendChild(pill);
  });
}

function renderTurnLabel() {
  const el = $("turnLabel");
  if (!el) return;
  const t = state.teams[state.currentTeamIndex];
  el.textContent = t ? `תור: ${t.name}` : "";
}

function buildBoard() {
  const board = $("board");
  if (!board) return;

  board.innerHTML = "";

  const order = QUESTIONS.meta.categoriesOrder;
  const rCount = rowsCount();

  // Header row
  order.forEach(catKey => {
    const cell = document.createElement("div");
    cell.className = "board-cell board-header";
    cell.textContent = QUESTIONS.categories[catKey]?.label || catKey;
    board.appendChild(cell);
  });

  // Rows: question numbers (1..rCount)
  for (let r = 0; r < rCount; r++) {
    const displayNumber = r + 1;
    order.forEach(catKey => {
      const q = getQuestionBy(catKey, r);
      const btn = document.createElement("button");
      btn.className = "board-cell board-btn";
      btn.type = "button";
      btn.textContent = String(displayNumber);
      btn.dataset.cat = catKey;
      btn.dataset.qindex = String(r);
      btn.dataset.qid = q?.id || "";

      const isUsed = q?.id ? !!state.used[q.id] : true;
      btn.disabled = !q || isUsed;
      if (btn.disabled) btn.classList.add("used");

      btn.addEventListener("click", () => {
        if (!q) return;
        openQuestionModal(catKey, r);
      });

      board.appendChild(btn);
    });
  }
}

function advanceTurn() {
  if (!state.teams.length) return;
  state.currentTeamIndex = (state.currentTeamIndex + 1) % state.teams.length;
  saveState();
  renderScoreBar();
  renderTurnLabel();
}

function rerenderBoardUI() {
  renderScoreBar();
  renderTurnLabel();
  buildBoard();
}

/* === Modal logic === */
let activeCatKey = null;
let activeQIndex = null;
let timerInterval = null;
let timerRemaining = 0;

function openQuestionModal(catKey, qIndex) {
  activeCatKey = catKey;
  activeQIndex = qIndex;

  const q = getQuestionBy(catKey, qIndex);
  if (!q) return;

  const points = getQuestionPoints(q);
  const displayNumber = qIndex + 1;

  setText("modalCategory", QUESTIONS.categories[catKey]?.label || catKey);
  setText("modalMeta", `שאלה ${displayNumber} • ${points} נקודות`);
  setText("modalQuestion", q.question || "");

  const optWrap = $("modalOptions");
  if (optWrap) {
    optWrap.innerHTML = "";
    if (Array.isArray(q.options) && q.options.length) {
      q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.type = "button";
        b.textContent = opt;
        b.addEventListener("click", () => {
          optWrap.querySelectorAll(".option-btn").forEach(x => x.classList.remove("selected"));
          b.classList.add("selected");
        });
        optWrap.appendChild(b);
      });
    }
  }

  setText("modalAnswer", "");
  $("btnShowAnswer")?.classList.remove("hidden");

  renderTeamAwardButtons(points);

  stopTimer();
  updateTimerUI(0, 0);

  $("modalOverlay")?.classList.remove("hidden");
}

function closeQuestionModal() {
  $("modalOverlay")?.classList.add("hidden");
  stopTimer();
  activeCatKey = null;
  activeQIndex = null;
}

function markUsed(catKey, qIndex) {
  const q = getQuestionBy(catKey, qIndex);
  if (!q?.id) return;
  state.used[q.id] = true;
  saveState();
}

function renderTeamAwardButtons(points) {
  const wrap = $("teamButtons");
  if (!wrap) return;
  wrap.innerHTML = "";

  state.teams.forEach((t, idx) => {
    const b = document.createElement("button");
    b.className = "team-award-btn";
    b.type = "button";
    b.textContent = `לתת נקודות ל־${t.name}`;
    b.addEventListener("click", () => awardPoints(idx, points));
    wrap.appendChild(b);
  });

  const none = $("btnNoPoints");
  if (none) {
    none.onclick = () => {
      markUsed(activeCatKey, activeQIndex);
      closeQuestionModal();
      advanceTurn();
      rerenderBoardUI();
    };
  }
}

function awardPoints(teamIndex, points) {
  if (teamIndex == null) return;
  const pts = Number(points || 0);

  if (state.teams[teamIndex]) {
    state.teams[teamIndex].score += pts;
  }

  markUsed(activeCatKey, activeQIndex);
  saveState();

  closeQuestionModal();
  advanceTurn();
  rerenderBoardUI();
}

/* === Timer / Helps === */
function startTimer(seconds) {
  stopTimer();
  const total = Number(seconds || 0);
  if (total <= 0) {
    updateTimerUI(0, 0);
    return;
  }

  timerRemaining = total;
  updateTimerUI(timerRemaining, total);

  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    if (timerRemaining <= 0) {
      stopTimer();
      updateTimerUI(0, total);
      return;
    }
    updateTimerUI(timerRemaining, total);
  }, 1000);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function updateTimerUI(remaining, total) {
  const bar = $("timerBar");
  const fill = $("timerFill");
  const text = $("timerText");
  if (!bar || !fill || !text) return;

  if (!total || total <= 0) {
    bar.classList.add("hidden");
    fill.style.width = "0%";
    text.textContent = "";
    return;
  }

  bar.classList.remove("hidden");
  const pct = Math.max(0, Math.min(1, remaining / total));
  fill.style.width = `${pct * 100}%`;
  text.textContent = `${remaining}s`;
}

/* === Wiring === */
function wireTopButtons() {
  const resetBtn = $("btnReset");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetState();
      applyStateToUI();
    });
  }

  const resumeBtn = $("btnResume");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      const loaded = loadState();
      if (!loaded) return;
      state = loaded;
      applyStateToUI();
    });
  }
}

function wireStartScreen() {
  const teamCountSel = $("teamCount");
  if (teamCountSel) {
    teamCountSel.addEventListener("change", () => buildTeamsForm(Number(teamCountSel.value)));
  }

  const startBtn = $("btnStart");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      initTeamsFromForm();
      applyStateToUI();
    });
  }
}

function wireModalButtons() {
  $("btnCloseModal")?.addEventListener("click", closeQuestionModal);

  $("btnHelpTeacher")?.addEventListener("click", () => {
    startTimer(0);
    alert("עזרת מורה הופעלה (המנחה מחליט איך לעזור).");
  });

  $("btnHelpGoogle")?.addEventListener("click", () => {
    startTimer(20);
  });

  $("btnShowAnswer")?.addEventListener("click", () => {
    const q = getQuestionBy(activeCatKey, activeQIndex);
    if (!q) return;
    setText("modalAnswer", `תשובה: ${q.answer ?? ""}`);
  });

  $("modalOverlay")?.addEventListener("click", (e) => {
    if (e.target && e.target.id === "modalOverlay") closeQuestionModal();
  });
}

function applyStateToUI() {
  if (!state.teams || !state.teams.length) {
    state.phase = "start";
    saveState();
    showOnlyScreen("screenStart");
    buildTeamsForm(Number($("teamCount")?.value || 2));
    return;
  }

  showOnlyScreen("screenBoard");
  renderScoreBar();
  renderTurnLabel();
  buildBoard();
}

function boot() {
  wireTopButtons();
  wireStartScreen();
  wireModalButtons();

  buildTeamsForm(Number($("teamCount")?.value || 2));

  const loaded = loadState();
  if (loaded) state = loaded;

  applyStateToUI();
}

document.addEventListener("DOMContentLoaded", boot);


