/* Auto-generated app.js - local-file friendly (no fetch) */

/* === Optional toggle === */
const CONFIRM_BURN_QUESTION = false; // if true -> confirm before burning a question (no points / duel back after reveal / wrong auto)
/* === Intro screen config === */

/* === Questions (rules: only 10 and Duel 20) === */
const QUESTIONS = {
  "meta": {
    "title": "אני והסיפור שלנו",
    "version": "2.0",
    "board": { "rows": 7, "cols": 6 },
    "categoriesOrder": ["history", "places", "figures", "values", "symbols", "achievements"]
  },
  "categories": {
    "history": {
      "label": "היסטוריה",
      "questions": [
        { "id": "history-1", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "למי נאמר: \"לך לך מארצך, ממולדתך ומבית אביך אל הארץ אשר אראך\"?",
          "options": ["אברהם אבינו", "יצחק אבינו", "יהושוע בן נון", "יצחק רבין"],
          "boardLabel": "אברהם אבינו",
          "answer": "אברהם אבינו", "hint": "" },

        { "id": "history-2", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "איזה חג חוגגים כזכרון ליציאת מצרים? ואיזו מצווה בחג היא זכרון לתקופה?",
          "options": ["שבועות וספירת העומר", "כריסמס ועץ אשוח", "פסח ואכילת מצה", "שבת וקידוש"],
          "boardLabel": "פסח ומצה",
          "answer": "פסח ואכילת מצה", "hint": "" },

        // ✅ על זמן + ניקוד ידני (מקסימום 20 נק׳ לכל קבוצה = 10 לחיצות של 2)
        { "id": "history-3", "points": 20, "type": "duel",
          "timerSeconds": 60,
          "manualScoring": true, "manualMaxAwards": 10, "manualPerAward": 2,
          "image": "design/dibrot.jpg",
          "question": "לכל קבוצה יש דקה לכתוב כמה שיותר מעשרת הדיברות, על כל אחד נכון תקבלו 2 נק'",
          "boardLabel": "עשרת הדיברות",
          "options": [], "answer": "", "hint": "אין גלגל הצלה" },

        // ✅ מפה פיזית: ניקוד ידני (מקסימום 20 נק׳ לכל קבוצה = 10 לחיצות של 2)
        { "id": "history-4", "points": 20, "type": "duel",
          "timerSeconds": 60,
          "manualScoring": true, "manualMaxAwards": 10, "manualPerAward": 2,
          "image": "design/mapa.jpg",
          "question": "לכל קבוצה מפה, עליכם לסדר כמה שיותר מקומות נכונים על המפה תוך דקה",
          "options": [],
          "answer": "ירושלים, צפת, שדה בוקר, טכניון, זכרון יעקב, אילת, המושבה כנרת, קבר הרמב\"ם, קבר רחל, מטולה",
          "boardLabel": "ארץ ישראל",
          "hint": "אין גלגל הצלה" },

        { "id": "history-5", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/hamikdash.jpg",
          "question": "מי בנה את בית המקדש הראשון?",
          "options": ["שמעון פרס", "דוד המלך", "שלמה המלך", "רחבעם"],
          "boardLabel": "שלמה המלך",
          "answer": "שלמה המלך", "hint": "" },

        { "id": "history-6", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "בין אילו שנים הייתה מלחמת העולם השניה?",
          "options": ["1939–1945", "1956–1958", "1947–1949", "1994–1998"],
          "boardLabel": "1939–1945",
          "answer": "1939–1945", "hint": "" },

        { "id": "history-7", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/atzmaut.jpg",
          "question": "כמה אנשים חתומים על מגילת העצמאות?",
          "options": ["1", "84", "37", "120"],
          "boardLabel": "37",
          "answer": "37", "hint": "" }
      ]
    },

    "places": {
      "label": "מקומות",
      "questions": [
        { "id": "places-1", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "הר הבית — ע\"פ המסורת היהודית, מה מיוחד במקום הזה?",
          "options": ["עליו נבנה בית המקדש הראשון והשני", "שם נקרע ים סוף", "שם ניתנה התורה", "שם נבנתה חומת העיר הראשונה בימי יהושע"],
          "boardLabel": "בית המקדש",
          "answer": "עליו נבנה בית המקדש הראשון והשני", "hint": "" },

        { "id": "places-2", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "הכנסת — מהו שם נרדף לכנסת?",
          "options": ["הרשות המבצעת", "בית המשפט העליון", "בית המחוקקים", "משרד ראש הממשלה"],
          "boardLabel": "בית המחוקקים",
          "answer": "בית המחוקקים", "hint": "" },

        { "id": "places-3", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "שער האריות — איזה אירוע מכונן ארע במקום הזה?",
          "options": ["פריצת הצנחנים לעיר העתיקה במלחמת ששת הימים (1967)", "חתימת מגילת העצמאות", "הקמת הכנסת הראשונה", "קרב תל חי"],
          "boardLabel": "פריצת הצנחנים",
          "answer": "פריצת הצנחנים לעיר העתיקה במלחמת ששת הימים (1967)", "hint": "" },

        { "id": "places-4", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "יד ושם — מה פירוש הביטוי \"חסידי אומות העולם\"?",
          "options": ["ניצולי שואה שקיבלו אזרחות ישראלית", "יהודים שעלו לארץ לפני קום המדינה", "לוחמי מחתרות בתקופת המנדט", "לא־יהודים שהצילו יהודים בשואה"],
          "boardLabel": "חסידי אומות העולם",
          "answer": "לא־יהודים שהצילו יהודים בשואה", "hint": "" },

        // ✅ על זמן + ניקוד ידני (מקסימום 20 נק׳ לכל קבוצה = 5 לחיצות של 4)
        { "id": "places-5", "points": 20, "type": "duel",
          "timerSeconds": 60,
          "manualScoring": true, "manualMaxAwards": 10, "manualPerAward": 2,
          "image": "design/shvatim.jpg",
          "question": "על כל קבוצה לכתוב כמה שיותר מקומות/אזורים בארץ שקרויים על שם שבטים שהתיישבו שם",
          "options": [],
          "answer": "דוגמאות: גוש דן–דן, מטה יהודה–יהודה, מדבר יהודה–יהודה, רמת מנשה–מנשה, מעלה אפרים–אפרים, מטה זבולון–זבולון, רמות נפתלי–נפתלי, בני שמעון–שמעון, מטה אשר–אשר.",
          "boardLabel": "התיישבות השבטים",
          "hint": "ניקוד ידני • אין גלגל הצלה" },

        { "id": "places-6", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/Degel_HaDyo.jpg",
          "question": "באיזו עיר בארץ צולמה התמונה הבאה?",
          "options": ["חיפה", "ירושלים", "אילת", "באר שבע"],
          "boardLabel": "אילת",
          "answer": "אילת", "hint": "" },

        // ✅ Duel per-hit: 5 פגיעות * 4 נק׳ = 20 נק׳
        { "id": "places-7", "points": 20, "type": "duel",
          "timerSeconds": 60,
          "scoringMode": "per_hit", "perCorrect": 4, "maxHits": 5,
          "image": "design/five.jpg",
          "question": "כתבו על דף כמה שיותר מקומות שאתם מזהים מהתמונות בדקה",
          "options": [],
          "answer": "כותל, מערת המכפלה, מצדה, ים המלח, בנייני עזריאלי",
          "boardLabel": "מקומות בארץ",
          "hint": "אין גלגל הצלה" }
      ]
    },

    "figures": {
      "label": "דמויות",
      "questions": [
        { "id": "figures-1", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/Tehillim.jpg",
          "question": "מי כתב את ספר תהילים?",
          "options": ["דוד המלך", "שלמה הקדוש", "אביב גפן", "דבורה הנביאה"],
          "boardLabel": "דוד המלך",
          "answer": "דוד המלך", "hint": "" },

        { "id": "figures-2", "points": 20, "type": "duel",
          "scoringMode": "per_hit", "perCorrect": 4, "maxHits": 5,
          "image": "design/ester.png",
          "question": "דו־קרב: נכון/לא נכון – אסתר המלכה (כל תשובה נכונה = 4 נק׳)\n\n1) אסתר המלכה הייתה אשתו של המן בן אמדתא\n2) אסתר המלכה הלכה לארמון מרצון שיבחרו בה למלכה\n3) אסתר המלכה צמה שלושה ימים ושלושה לילות\n4) אסתר המלכה נתלתה על העץ כי מרדה במלך\n5) אסתר המלכה עשתה שתי משתאות לאחשוורוש והמן יום אחרי יום",
          "options": [],
          "answer": "1) לא נכון\n2) לא נכון\n3) נכון\n4) לא נכון\n5) נכון",
          "boardLabel": "אסתר המלכה",
          "hint": "אין גלגל הצלה" },

        { "id": "figures-3", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "מי היה המנהיג הראשון של עם ישראל (מי הוביל את העם ביציאת מצרים)?",
          "options": ["יאנוש קורצ'אק", "יהושע בן נון", "הרבי מלובביץ'", "משה רבנו"],
          "boardLabel": "משה רבנו",
          "answer": "משה רבנו", "hint": "" },

        { "id": "figures-4", "points": 10, "type": "for_everyone",
          "question": "חתמתי על מגילת העצמאות, אני ראש הממשלה ה4 של מדינת ישראל. שם משפחתי הראשון היה מאירסון, הייתי רה\"מ בזמן מלחמת יום הכיפורים… מי אני?",
          "options": [],
          "boardLabel": "גולדה מאיר",
          "answer": "גולדה מאיר.",
          "hint": "" },

        { "id": "figures-5", "points": 10, "type": "for_everyone",
          "image": "design/einstein.jpg",
          "question": "זהו את הדמות ומה פועלה.",
          "options": ["אלברט איינשטיין - פיזיקאי", "יחזקאל - נביא", "אריק איינשטיין - זמר", "שמעון פרס - נשיא"],
          "answer": "אלברט איינשטיין - פיזיקאי",
          "boardLabel": "אלברט איינשטיין",
          "hint": "" },

        { "id": "figures-6", "points": 10, "type": "for_everyone",
          "image": "design/shai.jpg",
          "question": "מי היה ש\"י עגנון? ומה הם ראשי התיבות ש\"י?",
          "options": ["סופר עברי, חתן פרס נובל לספרות - שמואל יוסף", "זמר ישראלי, מפיק שירים לארוויזיון - שי יגנס", "הרמטכל במלחמת יום כיפור - שאול ישעיהו", "שחקן ילדים מוכר, השתתף בפסטיגל - שילה יגל"],
          "answer": "סופר עברי, חתן פרס נובל לספרות - שמואל יוסף",
          "boardLabel": "שמואל יוסף",
          "hint": "" },

        { "id": "figures-7", "points": 10, "type": "for_everyone",
          "image": "design/ilan.jpg",
          "question": "למי שייכים החפצים הבאים?",
          "options": [],
          "answer": "אילן רמון.",
          "boardLabel": "אילן רמון",
          "hint": "" }
      ]
    },

    "values": {
      "label": "ערכים",
      "questions": [
        { "id": "values-1", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "מה הם ראשי התיבות גמ\"ח?",
          "options": ["גמילות חסד", "גמרא וחסידות", "גמול חודשי", "גוף מנהל חינוך"],
          "boardLabel": "גמילות חסד",
          "answer": "גמילות חסד", "hint": "" },

        { "id": "values-2", "points": 10, "type": "for_everyone",
          "image": "design/money_ job.jpg",
          "question": "איזו צדקה גדולה יותר: לסייע לאדם במציאת עבודה או לתת לו צדקה?",
          "options": [],
          "answer": "לסייע במציאת עבודה (לעזור לו לעמוד על רגליו).",
          "boardLabel": "לסייע במציאת עבודה",
          "hint": "" },

        { "id": "values-3", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "ממי לומדים את הערך של הכנסת אורחים ומאיזה אירוע?",
          "options": ["אברהם אבינו — הכנסת האורחים לשלושת המלאכים", "משה רבנו — קריעת ים סוף", "יוסף — הכנסת האורחים למשפחתו למצרים", "יהושע בן נון — חציית הירדן"],
          "answer": "אברהם אבינו — הכנסת האורחים לשלושת המלאכים",
          "boardLabel": "הכנסת אורחים",
          "hint": "" },

        { "id": "values-4", "points": 10, "type": "for_everyone",
          "audio": "design/audio/eliezer.m4a",
          "question": "על מי נכתב השיר ומה הוא ניסה לקדם?",
          "options": [],
          "answer": "אליעזר בן־יהודה — החייאת השפה העברית.",
          "boardLabel": "אליעזר בן יהודה",
          "hint": "" },

        { "id": "values-5", "points": 10, "type": "for_everyone",
          "question": "אני מתנה שעם ישראל קיבל במיוחד. מאז ועד היום תרבויות רבות למדו מעם ישראל. אולי ראשון, אולי שישי — אבל בכל מקרה המקור זה אני… מי אני?",
          "options": [],
          "answer": "שבת.",
          "boardLabel": "שבת",
          "hint": "" },

        { "id": "values-6", "points": 20, "type": "duel",
          "question": "עליכם לחשב את הגימטריה של הפסוק \"וַאֲהַבְתֶּם אֶת-הַגֵּר כִּי-גֵרִים הֱיִיתֶם בְּאֶרֶץ מִצְרָיִם\". מי שמגיע ראשון לתשובה הנכונה מנצח!",
          "options": [],
          "answer": "2480",
          "boardLabel": "2480",
          "hint": "אין גלגל הצלה" },

        { "id": "values-7", "points": 10, "type": "for_everyone",
          "question": "אני מופיע בעשרת הדיברות ביחס למשפחה, כבסיס לחברה מתוקנת, כמצווה שצריך לעשות ולא להמנע ממנה. מה אני?",
          "options": [],
          "answer": "כיבוד הורים (כבד את אביך ואת אמך).",
          "boardLabel": "כיבוד הורים",
          "hint": "" }
      ]
    },

    "symbols": {
      "label": "סמלים",
      "questions": [
        { "id": "symbols-1", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/flag.jpg",
          "question": "מאיזה אלמנט יהודי אחר הגיעו שני פסי התכלת בדגל ישראל?",
          "options": ["הטלית", "החנוכייה", "השופר", "המזוזה"],
          "boardLabel": "טלית",
          "answer": "הטלית", "hint": "" },

        { "id": "symbols-2", "points": 10, "type": "for_everyone", "autoScore": true,
          "question": "מי כתב את מילות השיר \"התקווה\" (ההמנון)?",
          "options": ["אהוד מנור", "אנה זק", "דוד בן גוריון", "נפתלי הרץ אימבר"],
          "boardLabel": "נפתלי הרץ אימבר",
          "answer": "נפתלי הרץ אימבר", "hint": "" },

        { "id": "symbols-3", "points": 10, "type": "for_everyone",
          "question": "מה הסמל של המדינה ומאיפה הגיעו הסמלים שבו?",
          "options": [],
          "answer": "מנורה מהמקדש; עלי זית כסמל לשלום..",
         "boardLabel": "מנורת המקדש",
          "hint": "" },

        { "id": "symbols-4", "points": 10, "type": "for_everyone",
          "question": "מה הם ראשי התיבות תנ\"ך?",
          "options": [],
          "answer": "תורה, נביאים, כתובים.",
          "boardLabel": "תורה, נביאים, כתובים",
          "hint": "" },

        { "id": "symbols-5", "points": 10, "type": "for_everyone", "autoScore": true,
          "image": "design/mezuza.jpg",
          "question": "מה יש בתוך המזוזה?",
          "options": ["קלף עם פרשיות \"שמע\" ו\"והיה אם שמוע\"", "מטבע כסף קטן", "דף עם \"התקווה\"", "אבקה מיוחדת לברכה"],
          "answer": "קלף עם פרשיות \"שמע\" ו\"והיה אם שמוע\"",
          "boardLabel": "קלף עם פרשיות",
          "hint": "" },

        { "id": "symbols-6", "points": 20, "type": "duel",
          "image": "design/jerusalem.jpg",
          "question": "ירושלים תמיד הייתה מושא לתפילות וחלומות. המשימה: לומר כמה שיותר שירי ירושלים תור־תור. מי שאחרי 5 שניות לא מוצא — מפסיד.",
          "options": [],
          "answer": "",
          "boardLabel": "ירושלים",
          "hint": "אין גלגל הצלה" },

        { "id": "symbols-7", "points": 10, "type": "for_everyone",
          "question": "באיזה תאריך עברי ולועזי נכתבה מגילת העצמאות? ואיפה?",
          "options": ["י\"ג באב תשע\"ט, 13.8.2019, במצדה", "ה׳ באייר תש\"ח, 14.5.1948, בבית דיזנגוף", "כ\"ט בתמוז תשס\"א, 20.7.2001, בפתח תקווה", "א׳ בחשוון תרפ\"ט, 7.10.1928, בכותל"],
          "answer": "ה׳ באייר תש\"ח, 14.5.1948, בבית דיזנגוף",
          "boardLabel": "ה' באייר תש\"ח",
          "hint": "" }
      ]
    },

    "achievements": {
      "label": "הישגים",
      "questions": [
        { "id": "achievements-1", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: חוסר מים בשטח מדברי — מה הפתרון הישראלי?",
          "boardLabel": "התפלת מים",
          "options": [], "answer": "התפלת מים.", "hint": "" },

        { "id": "achievements-2", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: סגידה לאלילי אבן וחומר — מה הרעיון/הפתרון שהביא עם ישראל?",
          "boardLabel": "אמונה באל אחד",
          "options": [], "answer": "אמונה בא־ל אחד.", "hint": "" },

        { "id": "achievements-3", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: ניצול אנרגיה זמינה — מה הפתרון הישראלי הנפוץ?",
          "boardLabel": "דוד שמש",
          "options": [], "answer": "דודי שמש.", "hint": "" },

        { "id": "achievements-4", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: דאגה לעובד — מה העיקרון/הפתרון?",
           "boardLabel": "יום שבת",
          "options": [], "answer": "השבת.", "hint": "" },

        { "id": "achievements-5", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: שימור מאגרי מידע ותוכנות — מה הפתרון (לפי המשחק)?",
           "boardLabel": "דיסק און קי",
          "options": [], "answer": "דיסק און קי.", "hint": "" },

        { "id": "achievements-6", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: הגעה ליעד בדרך הקצרה — מה הפתרון הישראלי?",
          "boardLabel": "Waze",
          "options": [], "answer": "Waze (ווייז).", "hint": "" },

        { "id": "achievements-7", "points": 10, "type": "for_everyone",
          "image": "design/problem.jpg",
          "question": "בעיה: ירי טילים — מה הפתרון ההגנתי הישראלי?",
          "boardLabel": "כיפת ברזל",
          "options": [], "answer": "כיפת ברזל.", "hint": "" }
      ]
    }
  }
};

/* === State === */
const DEFAULT_STATE = {
  phase: "intro",          // intro | rules | start | board | duel | end
  teamCount: 2,
  teams: [],
  currentTeamIndex: 0,
  used: {},                // { [qid]: {status, teamIndex, label} }
  duel: null,              // {catKey, qIndex, revealed}
  undoStack: [],            // stack of snapshots
  partialHits: {} // { [qid]: { [teamIndex]: hitsCount } }
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
  ["screenIntro","screenRules", "screenStart", "screenBoard", "screenDuel", "screenEnd"].forEach(id => {
    const el = $(id);
    if (el) el.classList.add("hidden");
  });
  const target = $(screenId);
  if (target) target.classList.remove("hidden");
}

/* === Intro === */
const INTRO_LOGO_SRC = "design/logo.png"; // logo path
const INTRO_SUBTITLE = "משחק טריוויה קבוצתי";

function renderIntroScreen() {
  const wrap = $("introWrap");
  if (!wrap) return;

  const title = escapeHtml(QUESTIONS?.meta?.title || "אני והסיפור שלנו");

  wrap.innerHTML = `
    <div class="card introCard">
      <div class="introTitle">${title}</div>
      <div class="introSubtitle">${escapeHtml(INTRO_SUBTITLE)}</div>

      <div class="introActions">
        <button id="btnIntroGo" class="btn btn-primary" type="button">
          מתחילים ▶
        </button>
      </div>

      <div class="introHint">
       טיפ: אפשר לבטל פעולה עם U, ולסיים משחק עם E
      </div>

      <div class="introLogoDock">
        <img class="introLogo" src="${escapeHtml(INTRO_LOGO_SRC)}" alt="לוגו העמותה"
             onerror="this.style.display='none'"/>
      </div>
    </div>
  `;

  $("btnIntroGo")?.addEventListener("click", () => {
    pushUndo();
    state.phase = "rules";
    saveState();
    applyStateToUI();
  });
}

/* === Undo === */
function snapshotForUndo() {
  const snap = clone(state);
  snap.undoStack = []; // do not clone undo history inside snapshot
  return snap;
}
function pushUndo() {
  if (state.phase === "start") return;

  const stack = Array.isArray(state.undoStack) ? state.undoStack : [];
  stack.push(snapshotForUndo());
  while (stack.length > 50) stack.shift();
  state.undoStack = stack;
  saveState();
}
function undoLastAction() {
  const stack = Array.isArray(state.undoStack) ? state.undoStack : [];
  if (!stack.length) {
    alert("אין מה לבטל 🙂");
    return;
  }
  const prev = stack.pop();
  prev.undoStack = stack;
  state = prev;
  saveState();
  applyStateToUI();
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
function getQuestionPoints(q) { return Number(q?.points || 0); }

function isPerHit(q) {
  return q?.scoringMode === "per_hit" && Number(q?.perCorrect || 0) > 0;
}

function perHitConfig(q) {
  const per = Number(q?.perCorrect || 0);
  const total = Number(q?.points || 0);
  const maxByPoints = per > 0 ? Math.floor(total / per) : 0;
  const maxHits = Number(q?.maxHits || maxByPoints || 0);
  return { perCorrect: per, maxHits };
}

function isManualDuel(q) {
  return q?.type === "duel" && q?.manualScoring === true;
}

function manualConfig(q) {
  const maxAwards = Number(q?.manualMaxAwards || 3);
  const perAward = Number(q?.manualPerAward || 4); // ברירת מחדל: 4 נק' ללחיצה
  return { maxAwards, perAward };
}

function setHits(qid, teamIndex, hits) {
  ensurePartialStore();
  if (!state.partialHits[qid]) state.partialHits[qid] = {};
  state.partialHits[qid][teamIndex] = Number(hits || 0);
  saveState();
}

function isPerHitScoring(q) {
  return String(q?.scoringMode || "").trim() === "per_hit" && Number(q?.perCorrect || 0) > 0;
}

function getMaxHits(q) {
  const per = Number(q?.perCorrect || 0);
  const pts = Number(q?.points || 0);
  const byPoints = (per > 0) ? Math.floor(pts / per) : 0;
  const max = Number(q?.maxHits || 0);
  return Math.max(1, max || byPoints || 1);
}

function ensurePartialStore() {
  if (!state.partialHits) state.partialHits = {};
}

function getHits(qid, teamIndex) {
  ensurePartialStore();
  const m = state.partialHits[qid] || {};
  return Number(m[teamIndex] || 0);
}

function incHits(qid, teamIndex) {
  ensurePartialStore();
  if (!state.partialHits[qid]) state.partialHits[qid] = {};
  state.partialHits[qid][teamIndex] = getHits(qid, teamIndex) + 1;
}

function getTotalHits(qid) {
  ensurePartialStore();
  const byQ = state.partialHits?.[qid] || {};
  return Object.values(byQ).reduce((sum, v) => sum + Number(v || 0), 0);
}

function typeLabel(q){
  const base =
    q.type === "personal" ? "אישית" :
    q.type === "for_everyone" ? "לכולם" :
    q.type === "duel" ? "דו־קרב" :
    "רגילה";

  const extra = (q.autoScore === true) ? " • אמריקאי" : "";
  return base + extra;
}

/* === Auto-score helper === */
function isAutoTrivia(q) {
  const hasOptions = Array.isArray(q?.options) && q.options.length > 0;
  const hasAnswer = String(q?.answer ?? "").trim() !== "";
  const flag = q?.autoScore === true;
  return (flag && hasOptions && hasAnswer) || (hasOptions && hasAnswer);
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
  state.undoStack = [];
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

/* === Board "label" control ===
   כדי לשלוט מה כתוב על המשבצת לכל שאלה:
   פשוט הוסיפי לשאלה שדה boardLabel בתוך QUESTIONS (מבלי לשנות לוגיקה אחרת).
   אם אין boardLabel — ברירת מחדל היא ✓ כדי לא לחשוף תשובות.
*/
function getBoardLabelForQuestion(q) {
  const s = String(q?.boardLabel || "").trim();
  return s || "—";
}

// תאימות אחורה: אם איכשהו יש "true" מגרסה ישנה — נתייחס כ"burned".
function normalizeUsedEntry(entryRaw) {
  if (!entryRaw) return null;
  if (entryRaw === true) return { status: "burned", teamIndex: null, label: "—" };
  if (typeof entryRaw === "object") return entryRaw;
  return { status: "burned", teamIndex: null, label: "—" };
}

function buildBoard() {
  const board = $("board");
  if (!board) return;

  board.innerHTML = "";

  const order = QUESTIONS.meta.categoriesOrder;
  const rCount = rowsCount();

  // Header row (categories)
  order.forEach(catKey => {
    const cell = document.createElement("div");
    cell.className = "board-cell board-header";
    cell.dataset.cat = catKey;
    cell.textContent = QUESTIONS.categories[catKey]?.label || catKey;
    board.appendChild(cell);
  });

  // Rows: question numbers / labels
  for (let r = 0; r < rCount; r++) {
    const displayNumber = r + 1;

    order.forEach(catKey => {
      const q = getQuestionBy(catKey, r);

      const btn = document.createElement("button");
      btn.className = "board-cell board-btn";
      btn.type = "button";

      btn.dataset.cat = catKey;
      btn.dataset.qindex = String(r);
      btn.dataset.qid = q?.id || "";

      if (!q?.id) {
        btn.disabled = true;
        btn.classList.add("used");
        btn.textContent = "";
        board.appendChild(btn);
        return;
      }

      const usedEntry = normalizeUsedEntry(state.used?.[q.id]);
      const isUsed = !!usedEntry;

      if (!isUsed) {
        btn.textContent = String(displayNumber);
        btn.disabled = false;
      } else {
        btn.disabled = true;
        btn.classList.add("used");

        const label = String(usedEntry.label ?? "").trim() || "—";
        btn.textContent = label;

        if (usedEntry.status === "won" && typeof usedEntry.teamIndex === "number") {
          btn.classList.add(`won-by-${usedEntry.teamIndex}`);
        } else {
          btn.classList.add("burned");
        }
      }

      btn.addEventListener("click", () => {
        if (!q) return;

        // duel questions must go through duel screen (prep + "show question")
        if (q.type === "duel") {
          openDuel(catKey, r);
        } else {
          openQuestionModal(catKey, r);
        }
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

/* === Mark used (NEW structure) ===
  state.used[qid] = { status: "won"|"burned", teamIndex: number|null, label: string }
*/
function markUsed(catKey, qIndex, teamIndex = null, labelOverride = null, status = "won") {
  const q = getQuestionBy(catKey, qIndex);
  if (!q?.id) return;

  const label = (labelOverride != null)
    ? String(labelOverride)
    : getBoardLabelForQuestion(q);

  state.used[q.id] = {
    status: String(status || "won"),
    teamIndex: (typeof teamIndex === "number") ? teamIndex : null,
    label
  };

  saveState();
}

function confirmBurnIfNeeded() {
  if (!CONFIRM_BURN_QUESTION) return true;
  return confirm("לסמן את השאלה כ'שומשה' ולעבור הלאה?");
}

function openQuestionModal(catKey, qIndex) {
  activeCatKey = catKey;
  activeQIndex = qIndex;

  const q = getQuestionBy(catKey, qIndex);
  if (!q) return;

  // Safety routing: duel questions should never open in the modal
  if (q.type === "duel") {
    openDuel(catKey, qIndex);
    return;
  }

  const points = getQuestionPoints(q);
  const displayNumber = qIndex + 1;

  setText("modalCategory", QUESTIONS.categories[catKey]?.label || catKey);
  const mm = $("modalMeta");
  if (mm) {
    const pts = Number(points || 0);
    const ptsClass = `pts-${pts}`;
    mm.innerHTML = `
    <span>שאלה ${displayNumber}</span>
    <span class="metaDot">•</span>
    <span class="qBadge">${escapeHtml(typeLabel(q))}</span>
    <span class="ptsBadge ${ptsClass}">${pts} נק׳</span>
    `;
  }

  setText("modalQuestion", q.question || "");

  // media (image)
  const media = $("modalMedia");
  const img = $("modalImage");
  const src = String(q.image || "").trim();

  if (media && img) {
    if (src) {
      img.src = src;
      img.alt = q.question ? q.question : "תמונה לשאלה";
      img.onerror = () => {
        // אם קובץ לא נמצא - פשוט מסתירים כדי לא לשבור את המסך
        media.classList.add("hidden");
        img.removeAttribute("src");
      };
      media.classList.remove("hidden");
    } else {
      media.classList.add("hidden");
      img.removeAttribute("src");
    }
  }

  // audio
  const aWrap = $("modalAudioWrap");
  const audioEl = $("modalAudio");
  const aSrc = String(q.audio || "").trim();

  if (aWrap && audioEl) {
    if (aSrc) {
      audioEl.src = aSrc;
      aWrap.classList.remove("hidden");
    } else {
      audioEl.pause();
      audioEl.removeAttribute("src");
      aWrap.classList.add("hidden");
    }
  }

  // options
  const optWrap = $("modalOptions");
  if (optWrap) {
    optWrap.innerHTML = "";
    const hasOptions = Array.isArray(q.options) && q.options.length > 0;

    if (hasOptions) {
      optWrap.classList.remove("hidden");

      q.options.forEach(opt => {
        const b = document.createElement("button");
        b.className = "option-btn";
        b.type = "button";
        b.textContent = opt;

        b.addEventListener("click", () => {
          optWrap.querySelectorAll(".option-btn").forEach(x => x.classList.remove("selected"));
          b.classList.add("selected");

          if (isAutoTrivia(q)) {
            optWrap.querySelectorAll(".option-btn").forEach(x => (x.disabled = true));

            const chosen = String(opt).trim();
            const correct = String(q.answer).trim();

            if (chosen === correct) {
              pushUndo();
              awardPoints(state.currentTeamIndex, points);
            } else {
              // ❗ לא שורפים וסוגרים ישר — קודם מציגים תשובה נכונה
  const ans = $("modalAnswer");
  if (ans) {
    ans.textContent = `לא נכון. התשובה הנכונה: ${correct}`;
    ans.classList.remove("hidden");
  }

  // מסמנים ויזואלית: בחירה שגויה + תשובה נכונה
  optWrap.querySelectorAll(".option-btn").forEach(x => {
    const txt = x.textContent.trim();
    if (txt === correct) x.classList.add("correct");
    if (txt === chosen) x.classList.add("wrong");
  });

  // הופכים את כפתור "לא לתת נקודות" ל-"המשך"
  const none = $("btnNoPoints");
  if (none) {
    none.textContent = "המשך (שריפת שאלה בלי נקודות)";
    none.onclick = () => {
      if (!confirmBurnIfNeeded()) return;
      pushUndo();
      markUsed(activeCatKey, activeQIndex, null, "—", "burned");
      closeQuestionModal();
      advanceTurn();
      rerenderBoardUI();
    };
  }

  // לא סוגרים את המודאל אוטומטית
  return;
}

  
          }
        });

        optWrap.appendChild(b);
      });
    } else {
      optWrap.classList.add("hidden");
    }
  }

  // answer area reset
  const ans = $("modalAnswer");
  if (ans) {
    ans.classList.add("hidden");
    ans.textContent = "";
  }

  $("btnShowAnswer")?.classList.remove("hidden");

  if (!isAutoTrivia(q)) {
    renderTeamAwardButtons(points);
  } else {
    const wrap = $("teamButtons");
    if (wrap) wrap.innerHTML = "";
    const none = $("btnNoPoints");
    if (none) {
      none.onclick = () => {
        if (!confirmBurnIfNeeded()) return;
        pushUndo();
        // ✅ burned: בלי צבע קבוצה + טקסט "—"
        markUsed(activeCatKey, activeQIndex, null, "—", "burned");
        closeQuestionModal();
        advanceTurn();
        rerenderBoardUI();
      };
    }
  }

  stopTimer();
  updateTimerUI(0, 0);

  $("modalOverlay")?.classList.remove("hidden");
}

function closeQuestionModal() {
  $("modalOverlay")?.classList.add("hidden");
  stopTimer();
  activeCatKey = null;
  activeQIndex = null;
  const media = $("modalMedia");
  const img = $("modalImage");
  if (media) media.classList.add("hidden");
  if (img) img.removeAttribute("src");
  const aWrap = $("modalAudioWrap");
  const audioEl = $("modalAudio");
  if (audioEl) {
    audioEl.pause();
    audioEl.removeAttribute("src");
  }
  if (aWrap) aWrap.classList.add("hidden");
}

function renderTeamAwardButtons(points) {
  const wrap = $("teamButtons");
  if (!wrap) return;
  wrap.innerHTML = "";

  const q = getQuestionBy(activeCatKey, activeQIndex);
  const isPerHit = isPerHitScoring(q);

  // ✅ בשאלות לא-דו־קרב: רק לקבוצה שבתור
  const onlyIdx = state.currentTeamIndex;
  const onlyTeam = state.teams[onlyIdx];

  if (!onlyTeam) return;

  const b = document.createElement("button");
  b.className = "team-award-btn";
  b.type = "button";

  if (isPerHit) {
    const per = Number(q.perCorrect || 0);
    const maxHits = getMaxHits(q);
    const qid = q?.id || "";

    const hits = qid ? getHits(qid, onlyIdx) : 0;
    const left = Math.max(0, maxHits - hits);

    b.textContent = `+${per} נק׳ ל־${onlyTeam.name} (${left} נשארו)`;
    b.disabled = !qid || left <= 0;

    b.addEventListener("click", () => {
      if (!qid) return;
      if (getHits(qid, onlyIdx) >= maxHits) return;

      pushUndo();
      state.teams[onlyIdx].score += per;
      incHits(qid, onlyIdx);
      saveState();

      renderScoreBar();
      renderTurnLabel();
      renderTeamAwardButtons(points);
    });
  } else {
    b.textContent = `לתת נקודות ל־${onlyTeam.name}`;
    b.addEventListener("click", () => {
      pushUndo();
      awardPoints(onlyIdx, points);
    });
  }

  wrap.appendChild(b);

  const none = $("btnNoPoints");
  if (none) {
    none.textContent = isPerHit ? "לסגור שאלה (סיום מתן ניקוד)" : "לא לתת נקודות";
    none.onclick = () => {
      if (!confirmBurnIfNeeded()) return;
      pushUndo();
      // ✅ burned: בלי צבע קבוצה, אבל "✓" כדי לסמן סיום (אפשר לשנות ל-"—" אם תרצי)
      markUsed(activeCatKey, activeQIndex, null, "—", "burned");
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

  // ✅ won: צבע לפי קבוצה + label לפי boardLabel (או ✓ כברירת מחדל)
  markUsed(activeCatKey, activeQIndex, teamIndex);

  saveState();

  closeQuestionModal();
  advanceTurn();
  rerenderBoardUI();
}

/* === Timer === */
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
  // ✅ choose timer elements by screen
  const isDuel = state.phase === "duel";

  const bar  = isDuel ? $("duelTimerBar")  : $("timerBar");
  const fill = isDuel ? $("duelTimerFill") : $("timerFill");
  const text = isDuel ? $("duelTimerText") : $("timerText");

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

/* === Duel logic (2-stage) === */
function openDuel(catKey, qIndex) {
  state.phase = "duel";
  state.duel = { catKey, qIndex, revealed: false };
  saveState();
  renderDuelFromState();
  showOnlyScreen("screenDuel");
}

function closeDuel(goNextTurnIfRevealed) {
  stopTimer();
  updateTimerUI(0, 0);

  if (goNextTurnIfRevealed) {
    if (!confirmBurnIfNeeded()) return;
    pushUndo();
    // ✅ burned אחרי reveal: בלי צבע קבוצה + "—"
    markUsed(state.duel?.catKey, state.duel?.qIndex, null, "—", "burned");
    state.phase = "board";
    state.duel = null;
    saveState();
    advanceTurn();
    rerenderBoardUI();
    showOnlyScreen("screenBoard");
    return;
  }

  state.phase = "board";
  state.duel = null;
  saveState();
  showOnlyScreen("screenBoard");
}

function renderDuelFromState() {
  const d = state.duel;
  if (!d) return;

  const q = getQuestionBy(d.catKey, d.qIndex);
  if (!q) return;

  const points = getQuestionPoints(q);
  const displayNumber = d.qIndex + 1;
  const catLabel = QUESTIONS.categories[d.catKey]?.label || d.catKey;

  const dm = $("duelMeta");
  if (dm) {
    const pts = Number(points || 0);
    const ptsClass = `pts-${pts}`;
    dm.innerHTML = `
      <span>${escapeHtml(catLabel)}</span>
      <span class="metaDot">•</span>
      <span>שאלה ${displayNumber}</span>
      <span class="metaDot">•</span>
      <span class="qBadge">${escapeHtml(typeLabel(q))}</span>
      <span class="ptsBadge ${ptsClass}">${pts} נק׳</span>
    `;
  }

  // Intro text
  setText(
    "duelIntro",
    d.revealed
      ? "בחרו מנצח / תנו נקודות:"
      : "דו־קרב! קודם כולם מוכנים, ואז לוחצים 'הצג שאלה'."
  );

  const backBtn = $("btnDuelBack");
  if (backBtn) {
    backBtn.textContent = d.revealed ? "סיום מתן ניקוד" : "חזרה ללוח";
  }

  // Show/hide question area
  const area = $("duelQuestionArea");
  const qText = $("duelQuestionText");
  const showBtn = $("btnDuelShowQuestion");

  if (area) area.classList.toggle("hidden", !d.revealed);
  if (showBtn) showBtn.disabled = !!d.revealed;

  // ✅ Duel image rules:
  // Before reveal -> ALWAYS show duel.jpg
  // After reveal  -> show q.image only if exists, else hide
  const media = $("duelMedia");
  const img = $("duelImage");

  const duelIntroSrc = "design/duel.jpg";
  const qSrc = String(q.image || "").trim();

  if (media && img) {
    let srcToShow = "";

    if (!d.revealed) {
      srcToShow = duelIntroSrc;
    } else {
      srcToShow = qSrc; // show only if exists
    }

    if (srcToShow) {
      img.src = srcToShow;
      img.alt = "תמונה לדו־קרב";
      img.onerror = () => {
        media.classList.add("hidden");
        img.removeAttribute("src");
      };
      media.classList.remove("hidden");
    } else {
      media.classList.add("hidden");
      img.removeAttribute("src");
    }
  }

  // Buttons refs
  const b0 = $("btnDuelWinnerTeam0");
  const b1 = $("btnDuelWinnerTeam1");
  const b2 = $("btnDuelWinnerTeam2");

  // Before reveal: hide everything
  if (!d.revealed) {
    if (qText) qText.textContent = "";
    if (b0) b0.classList.add("hidden");
    if (b1) b1.classList.add("hidden");
    if (b2) b2.classList.add("hidden");
    return;
  }

  // After reveal: show question text
  if (qText) qText.textContent = q.question || "";

    // ✅ Answer text area (duel)
  const da = $("duelAnswerText");
  if (da) {
    const hasAnswer = String(q.answer ?? "").trim() !== "";
    if (d.revealed && hasAnswer) {
      da.textContent = `תשובה: ${q.answer}`;
      da.classList.remove("hidden");
    } else {
      da.textContent = "";
      da.classList.add("hidden");
    }
  }

  // Helper: show/hide team2 button
  const hasTeam3 = (state.teams?.length || 0) >= 3;
  if (b2) {
    if (hasTeam3) b2.classList.remove("hidden");
    else b2.classList.add("hidden");
  }

  // --- MODE 1: Manual scoring duel ---
  if (q.type === "duel" && q.manualScoring === true) {
    const maxAwards = Number(q.manualMaxAwards ?? 5);
    const perAward = Number(q.manualPerAward ?? 4);

    // IMPORTANT: manual uses a separate hits-key so it doesn't collide with per_hit counters
    const manualKey = q.id ? `manual_awards__${q.id}` : "";

    setText("duelIntro", "המנחה יבדוק את התשובות כשנגמר הזמן");

    const updateManualBtn = (btn, teamIndex) => {
      if (!btn) return;

      const teamName = state.teams[teamIndex]?.name ?? `קבוצה ${teamIndex + 1}`;
      const given = manualKey ? getHits(manualKey, teamIndex) : 0;
      const left = Math.max(0, maxAwards - given);

      btn.textContent = `+${perAward} נק׳ ל־${teamName} (${given}/${maxAwards})`;
      btn.classList.remove("hidden");
      btn.disabled = left <= 0;
    };

    updateManualBtn(b0, 0);
    updateManualBtn(b1, 1);
    if (hasTeam3) updateManualBtn(b2, 2);

    return;
  }

  // --- MODE 2: per_hit duel ---
  if (isPerHitScoring(q)) {
    const per = Number(q.perCorrect || 0);
    const maxHits = getMaxHits(q);
    const qid = q.id;

    setText("duelIntro", "המנחה יבדוק את התשובות כשנגמר הזמן");

    const updatePerHitBtn = (btn, teamIndex) => {
      if (!btn) return;

      const teamName = state.teams[teamIndex]?.name ?? `קבוצה ${teamIndex + 1}`;
      const hits = qid ? getHits(qid, teamIndex) : 0;
      const left = Math.max(0, maxHits - hits);

      btn.textContent = `+${per} נק׳ ל־${teamName} (${hits}/${maxHits})`;
      btn.classList.remove("hidden");
      btn.disabled = left <= 0;
    };

    updatePerHitBtn(b0, 0);
    updatePerHitBtn(b1, 1);
    if (hasTeam3) updatePerHitBtn(b2, 2);

    return;
  }

  // --- MODE 3: Normal duel winner takes all ---
  setText("duelIntro", "המנחה יחליט איזו קבוצה ניצחה!");

  if (b0) {
    b0.textContent = `ניצחון: ${state.teams[0]?.name ?? "קבוצה 1"}`;
    b0.classList.remove("hidden");
    b0.disabled = false;
  }
  if (b1) {
    b1.textContent = `ניצחון: ${state.teams[1]?.name ?? "קבוצה 2"}`;
    b1.classList.remove("hidden");
    b1.disabled = false;
  }
  if (hasTeam3 && b2) {
    b2.textContent = `ניצחון: ${state.teams[2]?.name ?? "קבוצה 3"}`;
    b2.classList.remove("hidden");
    b2.disabled = false;
  }
}

function awardDuelWinner(teamIndex) {
  stopTimer();
  const d = state.duel;
  if (!d) return;

  const q = getQuestionBy(d.catKey, d.qIndex);
  if (!q) return;

  pushUndo();

  const points = getQuestionPoints(q);
  if (state.teams[teamIndex]) {
    state.teams[teamIndex].score += Number(points || 0);
  }

  // ✅ won: צבע לפי קבוצה + label לפי boardLabel (או ✓)
  markUsed(d.catKey, d.qIndex, teamIndex);

  state.phase = "board";
  state.duel = null;
  saveState();

  advanceTurn();
  rerenderBoardUI();
  showOnlyScreen("screenBoard");
}

function awardDuelHit(teamIndex) {
  stopTimer();
  const d = state.duel;
  if (!d) return;

  const q = getQuestionBy(d.catKey, d.qIndex);
  if (!q?.id) return;

  const { perCorrect, maxHits } = perHitConfig(q);
  const qid = q.id;

  // ✅ בדיקה לפי סה״כ פגיעות (ולא לכל קבוצה)
  const totalBefore = getTotalHits(qid);
  if (totalBefore >= maxHits) return;

  const hitsTeam = getHits(qid, teamIndex);
  if (hitsTeam >= maxHits) return;

  pushUndo();

  // מוסיפים נקודות
  state.teams[teamIndex].score += perCorrect;

  // מעדכנים מספר פגיעות לקבוצה
  setHits(qid, teamIndex, hitsTeam + 1);

  saveState();
  renderScoreBar();

  // ✅ אם הגענו למקסימום הכולל – סוגרים דו־קרב וממשיכים תור
  const totalAfter = getTotalHits(qid);
  if (totalAfter >= maxHits) {
    if (!confirmBurnIfNeeded()) return;

    pushUndo();
    // per_hit נגמר: מסמנים כ"used" בלי צבע (אין מנצח חד-משמעי)
    markUsed(d.catKey, d.qIndex, null, "—", "won");

    state.phase = "board";
    state.duel = null;
    saveState();

    advanceTurn();
    rerenderBoardUI();
    showOnlyScreen("screenBoard");
    return;
  }

  // אחרת רק מרעננים
  renderDuelFromState();
}

/* === End game (UPDATED: podium + ties) === */
function computePlacements() {
  const teams = (state.teams || []).map((t, idx) => ({
    idx,
    name: t.name,
    score: Number(t.score || 0)
  }));

  // group by score
  const scoreToTeams = new Map();
  teams.forEach(t => {
    if (!scoreToTeams.has(t.score)) scoreToTeams.set(t.score, []);
    scoreToTeams.get(t.score).push(t);
  });

  // distinct scores desc
  const scores = Array.from(scoreToTeams.keys()).sort((a, b) => b - a);

  const groups = scores.map((score, i) => ({
    place: i + 1,           // place by distinct score order (not by team count)
    score,
    teams: scoreToTeams.get(score)
  }));

  // Only need up to 3 podium levels
  const podium = groups.slice(0, 3);

  // detect tie states
  const tieFirst = podium[0]?.teams?.length > 1;
  const tieSecond = podium[1]?.teams?.length > 1;
  const tieThird = podium[2]?.teams?.length > 1;

  return { podium, tieFirst, tieSecond, tieThird };
}

function renderTeamBadges(teamsArr, score) {
  // teamsArr: [{name, score, idx}]
  const chips = teamsArr.map(t => {
    return `
      <div style="
        display:inline-flex;
        align-items:center;
        gap:8px;
        padding:10px 12px;
        border-radius:16px;
        border:1px solid rgba(11,18,32,.10);
        background:rgba(255,255,255,.86);
        box-shadow:0 10px 18px rgba(11,18,32,.08);
        font-weight:900;
        margin:6px 0;
        max-width:100%;
      ">
        <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:260px;">${escapeHtml(t.name)}</span>
        <span style="opacity:.75; font-weight:950;">•</span>
        <span style="white-space:nowrap;">${score} נק׳</span>
      </div>
    `;
  }).join("");

  return `
    <div style="display:flex; flex-direction:column; align-items:center; width:100%;">
      ${chips}
    </div>
  `;
}

function escapeHtml(str) {
  return String(str ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderEndScreen() {
  const wrap = $("endRanking");
  if (!wrap) return;

  const { podium } = computePlacements();

  // helper to get group by desired podium slot:
  // We always want visual slots: 2nd (left), 1st (center), 3rd (right)
  const g1 = podium[0] || null; // best score
  const g2 = podium[1] || null;
  const g3 = podium[2] || null;

  const teamCount = state.teams?.length || 0;

  // Titles with tie awareness
  const titleFor = (visualPlace, group) => {
    if (!group) return "";
    const isTie = (group.teams?.length || 0) > 1;
    if (isTie) return `תיקו במקום ${visualPlace}`;
    return `מקום ${visualPlace}`;
  };

  // If only 2 teams, never show 3rd block
  const showThird = teamCount >= 3 && !!g3;

  // If there is no 2nd score (everyone tied on first), g2 null.
  // In that case, we will not show a "2nd" podium.
  const showSecond = !!g2;

  // Build podium blocks
  const block = ({ place, group, height, emoji }) => {
    if (!group) return `<div style="flex:1; min-width:220px;"></div>`;

    const isTie = (group.teams?.length || 0) > 1;

    return `
      <div style="
        flex:1;
        min-width:220px;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-end;
        gap:12px;
      ">
        <div style="
          width:100%;
          max-width:320px;
          padding:12px 12px 10px;
          border-radius:18px;
          border:1px solid rgba(11,18,32,.10);
          background:rgba(255,255,255,.88);
          box-shadow:0 12px 20px rgba(11,18,32,.10);
          text-align:center;
        ">
          <div style="font-weight:950; font-size:${place === 1 ? 18 : 16}px;">
            ${emoji} ${titleFor(place, group)}
          </div>
          <div style="margin-top:8px;">
            ${renderTeamBadges(group.teams, group.score)}
          </div>
          ${isTie ? `<div style="margin-top:6px; font-size:12px; opacity:.7;">(אותו ניקוד)</div>` : ``}
        </div>

        <div style="
          width:100%;
          max-width:320px;
          height:${height}px;
          border-radius:18px;
          background:linear-gradient(180deg, rgba(56,189,248,.26), rgba(29,78,216,.08));
          border:1px solid rgba(29,78,216,.12);
          box-shadow:0 18px 32px rgba(11,18,32,.10);
          display:flex;
          align-items:flex-end;
          justify-content:center;
          padding:10px;
          font-weight:950;
          font-size:${place === 1 ? 22 : 18}px;
          color:rgba(11,18,32,.85);
        ">
          ${place}
        </div>
      </div>
    `;
  };

  const headerText = g1 && (g1.teams?.length || 0) > 1
    ? "איזה יופי! יש תיקו במקום הראשון 🎉"
    : "כל הכבוד! הנה הדירוג הסופי 🎉";

  wrap.innerHTML = `
    <div style="width:100%; display:flex; flex-direction:column; gap:14px;">
      <div style="text-align:center; font-weight:950; font-size:18px; opacity:.9;">
        ${headerText}
      </div>

      <div style="
        display:flex;
        gap:18px;
        align-items:flex-end;
        justify-content:center;
        flex-wrap:wrap;
      ">
        ${showSecond ? block({ place: 2, group: g2, height: 150, emoji: "🥈" }) : `<div style="flex:1; min-width:220px;"></div>`}
        ${block({ place: 1, group: g1, height: 210, emoji: "🥇" })}
        ${showThird ? block({ place: 3, group: g3, height: 125, emoji: "🥉" }) : `<div style="flex:1; min-width:220px;"></div>`}
      </div>

      <div style="
        margin-top:4px;
        text-align:center;
        font-size:13px;
        opacity:.7;
      ">
        כל הכבוד לכל המשתתפים! 😊
      </div>
    </div>
  `;
}

function finishGame(withConfirm = true) {
  if (withConfirm) {
    const ok = confirm("לסיים את המשחק ולעבור למסך דירוג?");
    if (!ok) return;
  }
  state.phase = "end";
  saveState();
  renderEndScreen();
  showOnlyScreen("screenEnd");
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

  const finishBtn = $("btnFinish");
  if (finishBtn) {
    finishBtn.addEventListener("click", () => finishGame(true));
  }

  const undoBtn = $("btnUndo");
  if (undoBtn) {
    undoBtn.addEventListener("click", undoLastAction);
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

function wireRulesScreen() {
  $("btnRulesContinue")?.addEventListener("click", () => {
    state.phase = "start";
    saveState();
    applyStateToUI();
  });
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
    const ans = $("modalAnswer");
    if (ans) {
      ans.textContent = `תשובה: ${q.answer ?? ""}`;
      ans.classList.remove("hidden");
    }
  });

  $("modalOverlay")?.addEventListener("click", (e) => {
    if (e.target && e.target.id === "modalOverlay") closeQuestionModal();
  });
}

function wireDuelButtons() {

  $("btnDuelShowQuestion")?.addEventListener("click", () => {
    if (!state.duel) return;

    const q = getQuestionBy(state.duel.catKey, state.duel.qIndex);
    if (!q) return;

    pushUndo();
    state.duel.revealed = true;
    saveState();

    renderDuelFromState();
  });

  $("btnDuelBack")?.addEventListener("click", () => {
    const revealed = !!state.duel?.revealed;
    closeDuel(revealed);
  });

  $("btnDuelStartTimer")?.addEventListener("click", () => {
    const d = state.duel;
    if (!d) return;

    const q = getQuestionBy(d.catKey, d.qIndex);
    if (!q) return;

    const seconds = Number(q.timerSeconds || 0);
    if (seconds <= 0) {
      alert("לשאלה הזו אין timerSeconds");
      return;
    }

    // ✅ כל לחיצה מתחילה מחדש (אפשר גם כמה פעמים)
    startTimer(seconds);
  });

  $("btnDuelShowAnswer")?.addEventListener("click", () => {
  const d = state.duel;
  if (!d) return;

  const q = getQuestionBy(d.catKey, d.qIndex);
  if (!q) return;

  const da = $("duelAnswerText");
  if (da) {
    da.textContent = `תשובה: ${q.answer ?? ""}`;
    da.classList.remove("hidden");
  }
});


  // ---- helpers ----
  function isManualDuelQ(q) {
    return q?.type === "duel" && q?.manualScoring === true;
  }

  function manualCfg(q) {
    return {
      perAward: Number(q?.manualPerAward ?? 10),   // ✅ ברירת מחדל 10
      maxAwards: Number(q?.manualMaxAwards ?? 3),  // ✅ ברירת מחדל 3
    };
  }

  // משתמשים במנגנון hits הקיים, אבל עם מפתח ייחודי לשאלות manual
  function manualKey(q) {
    return q?.id ? `manual_awards__${q.id}` : "";
  }

  function awardManual(teamIndex, q) {
    const { perAward, maxAwards } = manualCfg(q);
    const key = manualKey(q);
    if (!key) return;
    if (perAward <= 0) return;

    if (getHits(key, teamIndex) >= maxAwards) return;

    pushUndo();
    state.teams[teamIndex].score += perAward;
    incHits(key, teamIndex);
    saveState();

    renderScoreBar();
    renderDuelFromState();
  }

  function awardPerHit(teamIndex, q) {
    const per = Number(q?.perCorrect || 0);
    const maxHits = getMaxHits(q);
    const qid = q?.id || "";
    if (!qid) return;

    if (getHits(qid, teamIndex) >= maxHits) return;

    pushUndo();
    state.teams[teamIndex].score += per;
    incHits(qid, teamIndex);
    saveState();

    renderScoreBar();
    renderDuelFromState();
  }

  function duelClick(teamIndex) {
    const d = state.duel;
    if (!d) return;

    const q = getQuestionBy(d.catKey, d.qIndex);
    if (!q) return;

    // 1) ניקוד ידני
    if (isManualDuelQ(q)) {
      awardManual(teamIndex, q);
      return;
    }

    // 2) per_hit
    if (isPerHitScoring(q)) {
      awardPerHit(teamIndex, q);
      return;
    }

    // 3) דו-קרב רגיל: מנצח אחד לוקח הכל
    awardDuelWinner(teamIndex);
  }

  $("btnDuelWinnerTeam0")?.addEventListener("click", () => duelClick(0));
  $("btnDuelWinnerTeam1")?.addEventListener("click", () => duelClick(1));
  $("btnDuelWinnerTeam2")?.addEventListener("click", () => duelClick(2));
}

function wireEndButtons() {
  $("btnEndPlayAgain")?.addEventListener("click", () => {
    resetState();
    applyStateToUI();
  });

  $("btnEndBackToBoard")?.addEventListener("click", () => {
    state.phase = "board";
    saveState();
    applyStateToUI();
  });
}

function wireKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea") return;

    if (e.key === "Escape") {
      const modalVisible = !$("modalOverlay")?.classList.contains("hidden");
      if (modalVisible) {
        closeQuestionModal();
        return;
      }

      if (state.phase === "duel" && state.duel) {
        if (state.duel.revealed) {
          pushUndo();
          state.duel.revealed = false;
          saveState();
          renderDuelFromState();
        } else {
          closeDuel(false);
        }
      }
    }

    if (e.key === "u" || e.key === "U") {
      undoLastAction();
    }

    if (e.key === "e" || e.key === "E") {
      finishGame(true);
    }
  });
}

/* === Apply state === */
function applyStateToUI() {
  // intro screen first (until user clicks "מתחילים")
  if (state.phase === "intro") {
    saveState();
    renderIntroScreen();
    showOnlyScreen("screenIntro");
    return;
  }

  if (state.phase === "rules") {
  saveState();
  showOnlyScreen("screenRules");
  return;
  }

  if (!state.teams || !state.teams.length) {
    state.phase = "start";
    saveState();
    showOnlyScreen("screenStart");
    buildTeamsForm(Number($("teamCount")?.value || 2));
    return;
  }

  if (state.phase === "end") {
    renderEndScreen();
    showOnlyScreen("screenEnd");
    return;
  }

  if (state.phase === "duel" && state.duel) {
    showOnlyScreen("screenDuel");
    renderDuelFromState();
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
  wireRulesScreen();
  wireModalButtons();
  wireDuelButtons();
  wireEndButtons();
  wireKeyboardShortcuts();

  buildTeamsForm(Number($("teamCount")?.value || 2));

  const loaded = loadState();
  if (loaded) state = loaded;
  if (!state.partialHits) state.partialHits = {};

  // תאימות אחורה: אם יש used בצורה ישנה — לא חובה, אבל נשאר נקי.
  if (!state.used) state.used = {};

  applyStateToUI();
}

document.addEventListener("DOMContentLoaded", boot);


