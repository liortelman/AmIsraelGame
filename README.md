# 🇮🇱 AmIsraelGame — Trivia Board

A local-file friendly (no server) trivia board game in Hebrew (RTL), with:
- Start screen (teams setup)
- Board screen (categories × questions)
- Question modal (options + lifelines + scoring)
- Duel flow (2-step duel screen)
- LocalStorage save/resume

---

## ✅ Tasks Checklist

### ✅ Done (Already Implemented)
- [x] Per-question scoring (each question has its own `points`)
- [x] Board shows **question number** (not points)
- [x] Trivia options UI appears when `options[]` exists
- [x] **Auto-score trivia**: selecting the correct option awards points automatically
- [x] Wrong trivia answer burns the question + advances turn (no points)
- [x] Manual scoring buttons for non-trivia questions
- [x] Save/Resume via LocalStorage
- [x] Reset game button
- [x] Duel screen exists (intro → show question → choose winner)

---

### 🎯 Game Flow & UX
- [ ] Add **End Game screen** with **ranking** (1st/2nd/3rd), final scores, and “Play Again”
- [ ] Add a top-bar button: **“End Game”** (with confirmation)
- [ ] Add **Undo / Back** option (admin safety):
  - [ ] Undo last scoring action (points + restore used question)
  - [ ] Undo duel winner selection
  - [ ] Undo “No points” (restore question)
- [ ] Add **confirmation** before burning a question (optional toggle)
- [ ] Add keyboard shortcuts:
  - [ ] `Esc` closes modal / exits duel question view
  - [ ] `U` undo last action
  - [ ] `E` end game

---

### 🎨 Design / Styling
- [ ] Redesign **Start screen** (more welcoming + matching Canva style)
- [ ] Redesign **Question modal** (layout, typography, spacing, RTL polish)
- [ ] Redesign **Board** (cells, hover, used-state styling, spacing)
- [ ] Add subtle animations (modal open, button hover, scoring feedback)
- [ ] Improve responsive layout (mobile + small screens)
- [ ] Add “Full Screen” suggestion or button (presentation mode)

---

### 🏷️ Tags / Visual Indicators
- [ ] Add small **icons/badges** on board cells:
  - [ ] Duel tag
  - [ ] “For everyone” tag
  - [ ] “Personal” tag
  - [ ] “Regular” tag
- [ ] Add legend / tooltip explaining badges
- [ ] Visually distinguish duel questions on the board (color/border)
- [ ] In question view: show a clear badge (e.g., “דו־קרב”, “לכולם”, “אישי”)

---

### 🧠 Gameplay Rules / Mechanics
- [ ] Duel: add optional “Ready?” screen (countdown / teacher click) **before revealing question**
- [ ] Duel: optionally disable lifelines automatically (and hide buttons)
- [ ] Add option: **fixed turn order** vs **manual next team**
- [ ] Add “Skip turn” button (admin use)
- [ ] Add per-question timer settings (optional): `timerSeconds`

---

### 💾 Data & Content Tools
- [ ] Validate questions at startup (console warnings):
  - [ ] Missing question text
  - [ ] Missing/duplicate IDs
  - [ ] Options without answer / answer not in options
- [ ] Support image questions cleanly:
  - [ ] Add fields like `imageSrc` / `imageAlt`
  - [ ] Show image inside modal when provided
- [ ] Add a helper “Question Editor” page (future):
  - [ ] Add/edit questions in UI
  - [ ] Export JSON

---

### 🔧 Code Quality / Structure
- [ ] Split `app.js` into modules/files (optional):
  - [ ] state.js, ui-board.js, ui-modal.js, duel.js, utils.js
- [ ] Add consistent naming conventions + comments for key functions
- [ ] Add an **event log** system (enables Undo reliably)

---

### 🧪 Testing / Reliability
- [ ] Add “Reset State” confirmation
- [ ] Ensure **Resume** restores correct screen (board/duel/modal if needed)
- [ ] Prevent double-award (extra protection for fast clicking)
- [ ] Add basic “admin mode” safety (optional password-less)

---

## ✨ Ideas / Nice-to-have (Fun + Presentation)
- [ ] Sound effects:
  - [ ] Correct answer “ding”
  - [ ] Wrong answer “buzz”
  - [ ] Duel “start” sound
- [ ] Confetti animation on correct trivia / end game winner
- [ ] Background music toggle (quiet, optional)
- [ ] “Presentation Mode”:
  - [ ] Larger fonts
  - [ ] Hide admin buttons unless hovered
- [ ] “Scoreboard overlay” (always visible, nicer UI)
- [ ] Random “bonus question” (teacher-triggered)
- [ ] Team avatars / colors (simple colored dots)
- [ ] Export final results to CSV / screenshot button

---

## ⭐ Suggested Next Steps (Recommended Order)
1. **End Game screen + End Game button**
2. **Undo system** (prevents frustration)
3. **Badges** on board + in question view
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
