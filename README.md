# 🇮🇱 AmIsraelGame — Trivia Board

A local-file friendly (no server) trivia board game in Hebrew (RTL), with:
- Start screen (teams setup)
- Board screen (categories × questions)
- Question modal (options + lifelines + scoring)
- Duel flow (2-step duel screen)
- LocalStorage save/resume

---

## ✅ Tasks Checklist

### 🎯 Game Flow & UX
- [ ] Add **End Game screen** with **ranking** (1st/2nd/3rd), final scores, and “Play Again”
- [ ] Add a **top-bar button: “End Game”** (confirmation popup)
- [ ] Add **Undo / Back** option:
  - [ ] Undo last scoring action (points + used question)
  - [ ] Undo duel winner selection
  - [ ] Undo “No points” action (restore question)
- [ ] Add a **confirmation dialog** before burning a question (optional toggle)
- [ ] Add keyboard shortcuts:
  - [ ] `Esc` closes modal / exits duel question view
  - [ ] `U` undo last action
  - [ ] `E` end game

---

### 🎨 Design / Styling
- [ ] Redesign **Start screen** (more welcoming, spacing, typography, maybe illustration)
- [ ] Redesign **Question modal** (layout, typography, RTL polishing, better option buttons)
- [ ] Redesign **Board** (cells, hover, disabled style, spacing)
- [ ] Add subtle animations (modal open, button hover, scoring feedback)
- [ ] Improve responsive layout (mobile + small screens)

---

### 🏷️ Tags / Visual Indicators
- [ ] Add small **icons/badges** on board cells:
  - [ ] Duel tag
  - [ ] “For everyone” tag
  - [ ] “Personal” tag
  - [ ] “Regular” tag
- [ ] Add legend / tooltip explaining badges
- [ ] Visually distinguish duel questions on the board (color/border)

---

### 🧠 Gameplay Rules / Mechanics
- [ ] Add **lifeline rules configuration**:
  - [ ] Enable/disable lifelines for duel
  - [ ] Per-question override (already supports hint/autoScore)
- [ ] Add option: **fixed turn order** vs **manual next team**
- [ ] Add “skip turn” button (admin use)

---

### 💾 Data & Content Tools
- [ ] Validate questions at startup (console warnings):
  - [ ] Missing question text
  - [ ] Missing/duplicate IDs
  - [ ] Options without answer / answer not in options
- [ ] Add “Question Editor” helper page (optional future):
  - [ ] Add/edit questions in UI
  - [ ] Export JSON

---

### 🔧 Code Quality / Structure
- [ ] Split `app.js` into modules/files (optional):
  - [ ] state.js, ui-board.js, ui-modal.js, duel.js, utils.js
- [ ] Add basic comments/docstrings for key functions
- [ ] Add consistent naming convention (camelCase)
- [ ] Add a lightweight event log system (for Undo)

---

### 🧪 Testing / Reliability
- [ ] Add “Reset State” confirmation
- [ ] Add tests (optional): state reducer / question validation
- [ ] Ensure **Resume** restores the correct screen (board/duel)

---

## ⭐ Suggested Next Steps (Recommended Order)
1. **End Game screen + End Game button** (wrap the game cleanly)
2. **Undo system** (prevents frustration)
3. **Board badges** (duel/personal/everyone) + legend
4. **Design pass** (start screen + modal + board)
5. Validation + polish

---

## 📁 Project Structure
- `index.html` — UI screens + modal
- `styles.css` — styling (RTL)
- `app.js` — game logic + state + UI
- `README.md` — this file

---

## 🚀 Run Locally
Just open `index.html` in Chrome / Edge.

> Tip: Works best on desktop. LocalStorage is used for saving progress.

---

## 📝 Notes
- Questions are stored in `app.js` inside `QUESTIONS`.
- State is stored in LocalStorage key: `amIsraelGameState`.
