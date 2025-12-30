/* === Data (embedded to avoid file:// fetch issues) === */
const QUESTIONS = {
  "meta": {
    "title": "אני והסיפור שלנו",
    "version": "0.1",
    "board": { "rows": 7, "cols": 6, "points": [1,2,3,4,5,6,7] },
    "categoriesOrder": ["history", "places", "figures", "values", "symbols", "songs"]
  },
  "categories": {
    "history": {
      "label": "היסטוריה",
      "questions": [
        { "id": "history-10", "points": 10, "type": "mcq", "question": "באיזו שנה הוקמה מדינת ישראל?", "options": ["1947", "1948", "1956", "1967"], "answer": "1948", "hint": "" },
        { "id": "history-20", "points": 20, "type": "tf", "question": "הכרזת העצמאות התקיימה בתל אביב.", "options": ["נכון", "לא נכון"], "answer": "נכון", "hint": "" },
        { "id": "history-30", "points": 30, "type": "short", "question": "איך נקראה העלייה הגדולה של יהודי תימן בשנים 1949–1950?", "options": [], "answer": "מבצע מרבד הקסמים", "hint": "" },
        { "id": "history-40", "points": 40, "type": "short", "question": "איזה אירוע התרחש בי\"ד באייר תש\"ח (1948) והוביל להכרזת המדינה?", "options": [], "answer": "סיום המנדט הבריטי (וקבלת החלטת החלוקה/הצורך בהכרזה)", "hint": "" },
        { "id": "history-50", "points": 50, "type": "mcq", "question": "איזו מלחמה נקראת גם \"מלחמת הקוממיות\"?", "options": ["מלחמת ששת הימים", "מלחמת העצמאות", "מלחמת יום הכיפורים", "מלחמת לבנון הראשונה"], "answer": "מלחמת העצמאות", "hint": "" },
        { "id": "history-60", "points": 60, "type": "short", "question": "מהו שם מסמך היסוד שמגדיר את הקמת המדינה וזכויות האזרחים?", "options": [], "answer": "מגילת העצמאות", "hint": "" },
        { "id": "history-70", "points": 70, "type": "short", "question": "איך נקראה תוכנית החלוקה של האו\"ם שהתקבלה בשנת 1947?", "options": [], "answer": "החלטה 181", "hint": "" }
      ]
    },
    "places": {
      "label": "מקומות",
      "questions": [
        { "id": "places-10", "points": 10, "type": "mcq", "question": "מהי בירת ישראל?", "options": ["תל אביב", "חיפה", "ירושלים", "באר שבע"], "answer": "ירושלים", "hint": "" },
        { "id": "places-20", "points": 20, "type": "short", "question": "באיזה עיר נמצא הכותל המערבי?", "options": [], "answer": "ירושלים", "hint": "" },
        { "id": "places-30", "points": 30, "type": "mcq", "question": "איזה ים נמצא בדרום ישראל?", "options": ["ים המלח", "ים סוף", "הים התיכון", "ים כנרת"], "answer": "ים סוף", "hint": "" },
        { "id": "places-40", "points": 40, "type": "short", "question": "איך נקרא המדבר הגדול בדרום הארץ?", "options": [], "answer": "מדבר הנגב", "hint": "" },
        { "id": "places-50", "points": 50, "type": "short", "question": "איזה מקום בישראל נחשב לנקודה הנמוכה בעולם?", "options": [], "answer": "ים המלח", "hint": "" },
        { "id": "places-60", "points": 60, "type": "short", "question": "מהו ההר הגבוה בישראל?", "options": [], "answer": "הר חרמון", "hint": "" },
        { "id": "places-70", "points": 70, "type": "short", "question": "איזה אתר ארכיאולוגי מפורסם נמצא במדבר יהודה ונחשב למצודה?", "options": [], "answer": "מצדה", "hint": "" }
      ]
    },
    "figures": {
      "label": "דמויות",
      "questions": [
        { "id": "figures-10", "points": 10, "type": "mcq", "question": "מי היה ראש הממשלה הראשון של ישראל?", "options": ["יצחק רבין", "דוד בן גוריון", "מנחם בגין", "משה שרת"], "answer": "דוד בן גוריון", "hint": "" },
        { "id": "figures-20", "points": 20, "type": "mcq", "question": "מי היה הנשיא הראשון של מדינת ישראל?", "options": ["חיים ויצמן", "זלמן שזר", "יצחק בן צבי", "אפרים קציר"], "answer": "חיים ויצמן", "hint": "" },
        { "id": "figures-30", "points": 30, "type": "short", "question": "מי כתבה את השיר \"ירושלים של זהב\"?", "options": [], "answer": "נעמי שמר", "hint": "" },
        { "id": "figures-40", "points": 40, "type": "short", "question": "מי היה מפקד האצ\"ל, ולימים ראש ממשלה?", "options": [], "answer": "מנחם בגין", "hint": "" },
        { "id": "figures-50", "points": 50, "type": "short", "question": "איזו דמות ישראלית ידועה בתור \"הנשר הגדול\" (ברמב\"ם/הלכה)?", "options": [], "answer": "הרמב\"ם", "hint": "" },
        { "id": "figures-60", "points": 60, "type": "short", "question": "מי היה הרמטכ\"ל במלחמת ששת הימים?", "options": [], "answer": "יצחק רבין", "hint": "" },
        { "id": "figures-70", "points": 70, "type": "short", "question": "מי קיבל פרס נובל לשלום מישראל יחד עם רבין ב־1994?", "options": [], "answer": "שמעון פרס (וגם יאסר ערפאת)", "hint": "" }
      ]
    },
    "values": {
      "label": "ערכים",
      "questions": [
        { "id": "values-10", "points": 10, "type": "tf", "question": "ערבות הדדית היא ערך מרכזי בחברה הישראלית.", "options": ["נכון", "לא נכון"], "answer": "נכון", "hint": "" },
        { "id": "values-20", "points": 20, "type": "short", "question": "מהו ערך שמדגיש התנדבות ועזרה לאחר?", "options": [], "answer": "חסד / נתינה / התנדבות", "hint": "" },
        { "id": "values-30", "points": 30, "type": "short", "question": "איזה ערך מתאר התמודדות ולא לוותר למרות קושי?", "options": [], "answer": "נחישות / התמדה", "hint": "" },
        { "id": "values-40", "points": 40, "type": "short", "question": "איזה ערך קשור לשמירה על חוק וכללים?", "options": [], "answer": "אחריות / משמעת / שלטון החוק", "hint": "" },
        { "id": "values-50", "points": 50, "type": "short", "question": "מהו ערך שקשור להכרה בשונות וקבלת האחר?", "options": [], "answer": "סובלנות", "hint": "" },
        { "id": "values-60", "points": 60, "type": "short", "question": "מהו ערך שמדגיש שוויון הזדמנויות לכל?", "options": [], "answer": "שוויון", "hint": "" },
        { "id": "values-70", "points": 70, "type": "short", "question": "איזה ערך קשור לזיכרון ושימור סיפורי העבר?", "options": [], "answer": "זיכרון / מורשת", "hint": "" }
      ]
    },
    "symbols": {
      "label": "סמלים",
      "questions": [
        { "id": "symbols-10", "points": 10, "type": "mcq", "question": "מהו צבע מרכזי בדגל ישראל?", "options": ["אדום", "כחול", "ירוק", "שחור"], "answer": "כחול", "hint": "" },
        { "id": "symbols-20", "points": 20, "type": "short", "question": "מה מופיע במרכז דגל ישראל?", "options": [], "answer": "מגן דוד", "hint": "" },
        { "id": "symbols-30", "points": 30, "type": "short", "question": "מהו ההמנון הלאומי של ישראל?", "options": [], "answer": "התקווה", "hint": "" },
        { "id": "symbols-40", "points": 40, "type": "short", "question": "מהו סמל המדינה הרשמי (מלבד הדגל)?", "options": [], "answer": "מנורה ושני ענפי זית", "hint": "" },
        { "id": "symbols-50", "points": 50, "type": "short", "question": "איזה חיה נחשבת לסמל ירושלים?", "options": [], "answer": "אריה", "hint": "" },
        { "id": "symbols-60", "points": 60, "type": "short", "question": "איזה פרח מזוהה עם ישראל כפרח הלאומי?", "options": [], "answer": "כלנית (נפוץ כתשובה)", "hint": "" },
        { "id": "symbols-70", "points": 70, "type": "short", "question": "מה מסמל ענף הזית בסמל המדינה?", "options": [], "answer": "שלום", "hint": "" }
      ]
    },
    "songs": {
      "label": "הישגים",
      "questions": [
        { "id": "songs-10", "points": 10, "type": "short", "question": "השלימו: \"עוד לא אבדה ____\".", "options": [], "answer": "תקוותנו", "hint": "" },
        { "id": "songs-20", "points": 20, "type": "short", "question": "איזה שיר ילדים מוכר מתחיל ב: \"השמש זורחת...\"?", "options": [], "answer": "תשובות שונות אפשריות (למנחה)", "hint": "" },
        { "id": "songs-30", "points": 30, "type": "short", "question": "מי שר את \"אין לי ארץ אחרת\" (בביצוע המוכר)?", "options": [], "answer": "גלי עטרי (מוכר)", "hint": "" },
        { "id": "songs-40", "points": 40, "type": "short", "question": "איזה שיר מזוהה עם יום העצמאות ומתחיל ב: \"הבאנו שלום עליכם\"?", "options": [], "answer": "הבאנו שלום עליכם", "hint": "" },
        { "id": "songs-50", "points": 50, "type": "short", "question": "השלימו: \"אני נושא עמי ____\".", "options": [], "answer": "תפילה", "hint": "" },
        { "id": "songs-60", "points": 60, "type": "short", "question": "איזה שיר מוכר קשור לירושלים ונכתב ע\"י נעמי שמר?", "options": [], "answer": "ירושלים של זהב", "hint": "" },
        { "id": "songs-70", "points": 70, "type": "short", "question": "מה השיר שמתחיל ב: \"עוד יבוא שלום עלינו\"?", "options": [], "answer": "עוד יבוא שלום עלינו", "hint": "" }
      ]
    }
  }
};

/* === State === */
const DEFAULT_STATE = {
  phase: "start",            // "start" | "board" | "duel"
  teamCount: 2,
  teams: [],                 // [{name, score}]
  currentTeamIndex: 0,
  used: {},                  // { [questionId]: true }
  duel: null                 // { questionId, teamIndexes:[...], active:true }
};

let state = loadState() || structuredClone(DEFAULT_STATE);

/* === Helpers === */
function $(id) { return document.getElementById(id); }
function saveState() { localStorage.setItem("amIsraelGameState", JSON.stringify(state)); }
function loadState() {
  try { return JSON.parse(localStorage.getItem("amIsraelGameState")); }
  catch { return null; }
}
function resetState() {
  localStorage.removeItem("amIsraelGameState");
  state = structuredClone(DEFAULT_STATE);
}

/* === Screens === */
function showScreen(name) {
  const screens = ["screenStart", "screenBoard", "screenDuel"];
  screens.forEach(s => { const el = $(s); if (el) el.classList.add("hidden"); });
  const target = $(`screen${capitalize(name)}`);
  if (target) target.classList.remove("hidden");
  state.phase = name;
  saveState();
}
function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

/* === UI Builders === */
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
  saveState();
}

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
  const points = QUESTIONS.meta.board.points;

  // Header row: category labels
  order.forEach(catKey => {
    const cell = document.createElement("div");
    cell.className = "board-cell board-header";
    cell.textContent = QUESTIONS.categories[catKey].label;
    board.appendChild(cell);
  });

  // Rows: points
  for (let r = 0; r < points.length; r++) {
    const p = points[r];
    order.forEach(catKey => {
      const q = QUESTIONS.categories[catKey].questions.find(x => x.points === p);
      const btn = document.createElement("button");
      btn.className = "board-cell board-btn";
      btn.textContent = String(p);
      btn.dataset.qid = q?.id || "";
      btn.disabled = !q || !!state.used[q.id];
      if (btn.disabled) btn.classList.add("used");

      btn.addEventListener("click", () => {
        if (!q) return;
        openQuestionModal(catKey, q.id);
      });

      board.appendChild(btn);
    });
  }
}

/* === Modal Logic === */
let activeQuestionId = null;
let activeCategoryKey = null;
let timerInterval = null;
let timerRemaining = 0;

function openQuestionModal(categoryKey, questionId) {
  activeCategoryKey = categoryKey;
  activeQuestionId = questionId;

  const q = findQuestionById(questionId);
  if (!q) return;

  // Fill modal
  setText("modalCategory", QUESTIONS.categories[categoryKey].label);
  setText("modalMeta", `${q.points} נקודות`);

  setText("modalQuestion", q.question);

  // Options
  const optWrap = $("modalOptions");
  if (optWrap) {
    optWrap.innerHTML = "";
    if (Array.isArray(q.options) && q.options.length) {
      q.options.forEach((opt) => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.type = "button";
        b.textContent = opt;
        b.addEventListener("click", () => {
          // Visual selection only (teacher decides correctness)
          optWrap.querySelectorAll(".option-btn").forEach(x => x.classList.remove("selected"));
          b.classList.add("selected");
        });
        optWrap.appendChild(b);
      });
    }
  }

  // Hide answer until requested
  setText("modalAnswer", "");
  $("btnShowAnswer")?.classList.remove("hidden");

  // Team award buttons
  renderTeamAwardButtons(q.points);

  // Show overlay
  $("modalOverlay")?.classList.remove("hidden");

  stopTimer();
  updateTimerUI(0, 0);
}

function closeQuestionModal() {
  $("modalOverlay")?.classList.add("hidden");
  stopTimer();
  activeQuestionId = null;
  activeCategoryKey = null;
}

function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function findQuestionById(qid) {
  for (const catKey of Object.keys(QUESTIONS.categories)) {
    const q = QUESTIONS.categories[catKey].questions.find(x => x.id === qid);
    if (q) return q;
  }
  return null;
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
      markUsed(activeQuestionId);
      closeQuestionModal();
      advanceTurn();
    };
  }
}

function awardPoints(teamIndex, points) {
  if (teamIndex == null) return;
  state.teams[teamIndex].score += points;

  markUsed(activeQuestionId);
  saveState();

  closeQuestionModal();

  // Next turn by default
  advanceTurn();
  rerenderBoardUI();
}

function markUsed(qid) {
  if (!qid) return;
  state.used[qid] = true;
  saveState();
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

/* === Timer / Help === */
function startTimer(seconds) {
  stopTimer();
  timerRemaining = seconds;
  updateTimerUI(timerRemaining, seconds);

  timerInterval = setInterval(() => {
    timerRemaining -= 1;
    if (timerRemaining <= 0) {
      stopTimer();
      updateTimerUI(0, seconds);
      return;
    }
    updateTimerUI(timerRemaining, seconds);
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
    return;
  }

  bar.classList.remove("hidden");
  const pct = Math.max(0, Math.min(1, remaining / total));
  fill.style.width = `${pct * 100}%`;
  text.textContent = `${remaining}s`;
}

/* === Duel (basic placeholder flow) === */
function startDuel(questionId, teamIndexes) {
  state.duel = { questionId, teamIndexes, active: true };
  saveState();

  // Render duel UI
  const intro = $("duelIntro");
  if (intro) {
    const names = teamIndexes.map(i => state.teams[i]?.name).filter(Boolean).join(" מול ");
    intro.textContent = `דו-קרב: ${names}`;
  }

  $("duelQuestionArea")?.classList.add("hidden");
  showScreen("duel");
}

function renderDuelQuestion() {
  const duel = state.duel;
  if (!duel) return;
  const q = findQuestionById(duel.questionId);
  if (!q) return;

  $("duelQuestionArea")?.classList.remove("hidden");
  setText("duelQuestionText", q.question);
}

function duelAward(winnerTeamIndex) {
  const duel = state.duel;
  if (!duel) return;
  const q = findQuestionById(duel.questionId);
  if (!q) return;

  state.teams[winnerTeamIndex].score += q.points;
  markUsed(q.id);
  state.duel.active = false;
  saveState();

  showScreen("board");
  rerenderBoardUI();
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
      showScreen("board");
      applyStateToUI();
    });
  }
}

function wireModalButtons() {
  $("btnCloseModal")?.addEventListener("click", closeQuestionModal);

  $("btnHelpTeacher")?.addEventListener("click", () => {
    // Teacher help is "no timer", just a flag for UI if you want later
    startTimer(0);
    alert("עזרת מורה הופעלה (המנחה מחליט איך לעזור).");
  });

  $("btnHelpGoogle")?.addEventListener("click", () => {
    // 20 seconds timer for 'Google in 20s'
    startTimer(20);
  });

  $("btnShowAnswer")?.addEventListener("click", () => {
    const q = findQuestionById(activeQuestionId);
    if (!q) return;
    setText("modalAnswer", `תשובה: ${q.answer}`);
  });

  // Close overlay on background click
  $("modalOverlay")?.addEventListener("click", (e) => {
    if (e.target && e.target.id === "modalOverlay") closeQuestionModal();
  });
}

function wireDuelButtons() {
  $("btnDuelShowQuestion")?.addEventListener("click", renderDuelQuestion);
  $("btnDuelBack")?.addEventListener("click", () => {
    showScreen("board");
    applyStateToUI();
  });

  // Optional winner buttons if exist
  for (let i = 0; i < 6; i++) {
    const b = $(`btnDuelWinnerTeam${i}`);
    if (!b) continue;
    b.addEventListener("click", () => duelAward(i));
  }
}

function applyStateToUI() {
  // Decide screen
  if (!state.teams || !state.teams.length) {
    showScreen("start");
    buildTeamsForm(Number($("teamCount")?.value || 2));
    return;
  }

  if (state.phase === "duel") showScreen("duel");
  else showScreen("board");

  // Render
  renderScoreBar();
  renderTurnLabel();
  buildBoard();

  // In duel screen, render intro names
  if (state.phase === "duel" && state.duel) {
    const intro = $("duelIntro");
    if (intro) {
      const names = state.duel.teamIndexes.map(i => state.teams[i]?.name).filter(Boolean).join(" מול ");
      intro.textContent = `דו-קרב: ${names}`;
    }
  }
}

function boot() {
  wireTopButtons();
  wireStartScreen();
  wireModalButtons();
  wireDuelButtons();

  // Start screen form
  buildTeamsForm(Number($("teamCount")?.value || 2));

  // Apply persisted state
  const loaded = loadState();
  if (loaded) state = loaded;

  applyStateToUI();
}

// Ensure DOM is ready
document.addEventListener("DOMContentLoaded", boot);



