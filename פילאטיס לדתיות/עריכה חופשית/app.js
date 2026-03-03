const completionKey = "pilates30_completed_days";
const reminderTimeKey = "pilates30_reminder_time";
const reminderLastSentDateKey = "pilates30_last_sent_date";
const languageKey = "pilates30_language";

const i18n = {
  he: {
    htmlLang: "he",
    dir: "rtl",
    appTitle: "פילאטיס לדתיות - אתגר 30 ימים",
    heroTitle: "פילאטיס לדתיות - אתגר 30 ימים",
    heroSubtitle:
      "תוכנית יומית עדינה ונוחה לבית: בכל יום אימון שמכוון לשריפת כ-100 קלוריות ולחיזוק כל שרירי הגוף.",
    heroNote:
      "מותאם לאימון צנוע בבית, ללא ציוד מיוחד. מומלץ להתייעץ עם גורם רפואי לפני התחלה.",
    languageLabel: "שפה:",
    dayPickerLabel: "בחרי יום:",
    showTodayBtn: "היום שלי",
    markDoneBtn: "סימנתי שביצעתי",
    unmarkDoneBtn: "לבטל סימון ביצוע",
    installBtn: "התקנת האפליקציה",
    reminderLabel: "תזכורת יומית בשעה:",
    saveReminderBtn: "שמירת תזכורת",
    testReminderBtn: "בדיקת תזכורת עכשיו",
    coachTitle: "דמות הדגמה לאימון",
    coachNote: "לחצי על התחלה כדי לראות דמות שמדגימה את שלבי האימון.",
    coachStartBtn: "התחלת הדגמה",
    coachPauseBtn: "עצירת הדגמה",
    coachNextBtn: "שלב הבא",
    coachPlaceholder: "שלב הדגמה יופיע כאן",
    coachCurrentStep: (step) => `עכשיו: ${step}`,
    progressTitle: "התקדמות חודשית",
    allDaysTitle: "כל תוכנית 30 הימים",
    daysWord: "ימים",
    dayWord: "יום",
    timeLabel: "זמן",
    targetCaloriesLabel: "יעד קלורי",
    focusLabel: "מיקוד",
    doneLabel: "בוצע ✅",
    dayPlanTitle: "תוכנית היום",
    tipLabel: "טיפ",
    approxCaloriesText: "כ-100 קלוריות",
    notificationTitle: "פילאטיס לדתיות",
    notificationBody: "הגיע הזמן לאימון היומי שלך 💜 20-25 דקות לחיזוק כל הגוף.",
    browserNoNotification: "הדפדפן לא תומך בהתראות.",
    notificationDenied: "לא ניתנה הרשאה להתראות.",
    chooseTimeFirst: "בחרי שעה לפני שמירה.",
    reminderSaved: (time) => `התזכורת נשמרה לשעה ${time}.`,
    reminderTestSent: "נשלחה תזכורת בדיקה.",
    reminderActive: (time) => `תזכורת פעילה לשעה ${time}.`,
    reminderNotSet: "עדיין לא הוגדרה תזכורת יומית.",
    appInstalled: "האפליקציה הותקנה בהצלחה.",
    swRegisterFail: "לא הצלחנו לרשום Service Worker.",
    focus: "חיזוק כל השרירים: ליבה, רגליים, גב, כתפיים וישבן",
    duration: "עד 10 דקות",
    warmup: "חימום: הליכה במקום + נשימות - דקה אחת",
    cooldown: "קירור ומתיחות עדינות - דקה אחת",
    tipEven: "שמרי על קצב נעים. המטרה היא רצף ונוחות, לא עומס.",
    tipOdd: "נשמי דרך האף, הוציאי אוויר לאט בכל מאמץ ושמרי על גב ארוך.",
    minuteShort: "דקות",
    themes: [
      "יציבה וליבה",
      "רגליים וישבן",
      "גב וכתפיים",
      "בטן עמוקה",
      "גוף מלא עדין",
      "שיווי משקל",
      "חיזוק מפרקים",
      "גמישות וזרימה",
      "סיבולת עדינה",
      "תנועה משקמת"
    ],
    exercises: [
      "נשימות פילאטיס עם איסוף בטן",
      "גשר אגן איטי",
      "הרמת ברך בשכיבה",
      "בעיטת רגל אחורית בעמידת שש",
      "פלאנק ברכיים קצר",
      "הרחקת זרוע-רגל נגדית",
      "סקוואט עדין עם איסוף בטן",
      "מתיחת חתול-פרה",
      "הרמת עקבים בעמידה",
      "ישיבה קיר לחיזוק ירכיים",
      "גלגול כתפיים ופתיחת חזה",
      "הרמת ידיים עם בקבוקי מים קלים",
      "פולס קטן לירך פנימית",
      "כפיפות צד בעמידה",
      "קירוב שכמות בשכיבה",
      "Dead Bug עדין",
      "תנועת שחייה בשכיבה על הבטן",
      "תנוחת ילד לנשימה"
    ]
  },
  en: {
    htmlLang: "en",
    dir: "ltr",
    appTitle: "Pilates for Religious Women - 30 Day Challenge",
    heroTitle: "Pilates for Religious Women - 30 Day Challenge",
    heroSubtitle:
      "A gentle daily home program: each day targets about 100 calories and full-body muscle strength.",
    heroNote:
      "Designed for modest home training with no special equipment. Consult a medical professional before starting.",
    languageLabel: "Language:",
    dayPickerLabel: "Choose day:",
    showTodayBtn: "My day",
    markDoneBtn: "Mark as done",
    unmarkDoneBtn: "Unmark done",
    installBtn: "Install app",
    reminderLabel: "Daily reminder at:",
    saveReminderBtn: "Save reminder",
    testReminderBtn: "Test reminder now",
    coachTitle: "Workout demo character",
    coachNote: "Press start to see a character demonstrating the workout flow.",
    coachStartBtn: "Start demo",
    coachPauseBtn: "Pause demo",
    coachNextBtn: "Next step",
    coachPlaceholder: "Demo step will appear here",
    coachCurrentStep: (step) => `Now: ${step}`,
    progressTitle: "Monthly progress",
    allDaysTitle: "Full 30-day plan",
    daysWord: "days",
    dayWord: "Day",
    timeLabel: "Time",
    targetCaloriesLabel: "Calorie target",
    focusLabel: "Focus",
    doneLabel: "Done ✅",
    dayPlanTitle: "Today's plan",
    tipLabel: "Tip",
    approxCaloriesText: "~100 calories",
    notificationTitle: "Pilates Challenge",
    notificationBody: "It is time for your daily workout 💜 20-25 minutes for full-body strength.",
    browserNoNotification: "Your browser does not support notifications.",
    notificationDenied: "Notification permission was not granted.",
    chooseTimeFirst: "Choose a time before saving.",
    reminderSaved: (time) => `Reminder saved for ${time}.`,
    reminderTestSent: "Test reminder sent.",
    reminderActive: (time) => `Reminder active at ${time}.`,
    reminderNotSet: "No daily reminder set yet.",
    appInstalled: "App installed successfully.",
    swRegisterFail: "Could not register Service Worker.",
    focus: "Full-body strengthening: core, legs, back, shoulders and glutes",
    duration: "Up to 10 min",
    warmup: "Warm-up: march in place + breathing - 1 min",
    cooldown: "Cool-down and gentle stretches - 1 min",
    tipEven: "Keep a comfortable pace. The goal is consistency, not overload.",
    tipOdd: "Breathe through the nose, exhale slowly on effort, and keep your spine long.",
    minuteShort: "min",
    themes: [
      "Posture & Core",
      "Legs & Glutes",
      "Back & Shoulders",
      "Deep Abs",
      "Gentle Full Body",
      "Balance",
      "Joint Strength",
      "Flexibility & Flow",
      "Gentle Endurance",
      "Restorative Movement"
    ],
    exercises: [
      "Pilates breathing with core engagement",
      "Slow glute bridge",
      "Supine knee lift",
      "Donkey kick in quadruped",
      "Knee plank hold",
      "Bird-dog reach",
      "Gentle squat with core brace",
      "Cat-cow stretch",
      "Standing calf raise",
      "Wall sit for thigh strength",
      "Shoulder rolls and chest opening",
      "Arm raises with light water bottles",
      "Inner-thigh pulse",
      "Standing side bends",
      "Scapular squeeze lying down",
      "Gentle dead bug",
      "Prone swimming movement",
      "Child's pose breathing"
    ]
  }
};

function getCurrentLanguage() {
  const saved = localStorage.getItem(languageKey);
  return saved && i18n[saved] ? saved : "he";
}

let currentLanguage = getCurrentLanguage();

function t() {
  return i18n[currentLanguage];
}

function getPlans() {
  const lang = t();

  function buildPlan(day) {
    const theme = lang.themes[(day - 1) % lang.themes.length];
    const ex1 = lang.exercises[(day * 2) % lang.exercises.length];
    const ex2 = lang.exercises[(day * 2 + 3) % lang.exercises.length];
    const ex3 = lang.exercises[(day * 2 + 6) % lang.exercises.length];
    const ex4 = lang.exercises[(day * 2 + 9) % lang.exercises.length];

    return {
      day,
      title: `${lang.dayWord} ${day} - ${theme}`,
      targetCalories: 100,
      duration: lang.duration,
      focus: lang.focus,
      routine: [
        lang.warmup,
        `${ex1} - 2 ${lang.minuteShort}`,
        `${ex2} - 2 ${lang.minuteShort}`,
        `${ex3} - 2 ${lang.minuteShort}`,
        `${ex4} - 2 ${lang.minuteShort}`,
        lang.cooldown
      ],
      tip: day % 2 === 0 ? lang.tipEven : lang.tipOdd,
      theme
    };
  }

  return Array.from({ length: 30 }, (_, index) => buildPlan(index + 1));
}

const dayPicker = document.getElementById("dayPicker");
const dayCard = document.getElementById("dayCard");
const daysGrid = document.getElementById("daysGrid");
const showTodayBtn = document.getElementById("showTodayBtn");
const markDoneBtn = document.getElementById("markDoneBtn");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const progressFill = document.getElementById("progressFill");
const installBtn = document.getElementById("installBtn");
const reminderTimeInput = document.getElementById("reminderTime");
const saveReminderBtn = document.getElementById("saveReminderBtn");
const testReminderBtn = document.getElementById("testReminderBtn");
const reminderStatus = document.getElementById("reminderStatus");
const languagePicker = document.getElementById("languagePicker");

const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroNote = document.getElementById("heroNote");
const languageLabel = document.getElementById("languageLabel");
const dayPickerLabel = document.getElementById("dayPickerLabel");
const reminderLabel = document.getElementById("reminderLabel");
const progressTitle = document.getElementById("progressTitle");
const allDaysTitle = document.getElementById("allDaysTitle");
const coachTitle = document.getElementById("coachTitle");
const coachNote = document.getElementById("coachNote");
const coachFigure = document.getElementById("coachFigure");
const coachStepText = document.getElementById("coachStepText");
const coachStartBtn = document.getElementById("coachStartBtn");
const coachNextBtn = document.getElementById("coachNextBtn");

let deferredInstallPrompt = null;
let reminderStatusKey = "reminderNotSet";
let reminderStatusTime = "";
let coachStepIndex = 0;
let coachPlaying = false;
let coachIntervalId = null;

function getCompletedDays() {
  const raw = localStorage.getItem(completionKey);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCompletedDays(days) {
  localStorage.setItem(completionKey, JSON.stringify(days));
}

function isDone(day) {
  return getCompletedDays().includes(day);
}

function toggleDayDone(day) {
  const doneDays = getCompletedDays();
  const exists = doneDays.includes(day);
  const next = exists ? doneDays.filter((d) => d !== day) : [...doneDays, day];
  saveCompletedDays(next.sort((a, b) => a - b));
}

function renderStaticTexts() {
  const lang = t();
  document.documentElement.lang = lang.htmlLang;
  document.documentElement.dir = lang.dir;
  document.title = lang.appTitle;

  heroTitle.textContent = lang.heroTitle;
  heroSubtitle.textContent = lang.heroSubtitle;
  heroNote.textContent = lang.heroNote;
  languageLabel.textContent = lang.languageLabel;
  dayPickerLabel.textContent = lang.dayPickerLabel;
  showTodayBtn.textContent = lang.showTodayBtn;
  installBtn.textContent = lang.installBtn;
  reminderLabel.textContent = lang.reminderLabel;
  saveReminderBtn.textContent = lang.saveReminderBtn;
  testReminderBtn.textContent = lang.testReminderBtn;
  coachTitle.textContent = lang.coachTitle;
  coachNote.textContent = lang.coachNote;
  coachNextBtn.textContent = lang.coachNextBtn;
  progressTitle.textContent = lang.progressTitle;
  allDaysTitle.textContent = lang.allDaysTitle;
  languagePicker.value = currentLanguage;
}

function renderPicker() {
  const lang = t();
  const plans = getPlans();
  dayPicker.innerHTML = plans
    .map((plan) => `<option value="${plan.day}">${lang.dayWord} ${plan.day}</option>`)
    .join("");
}

function renderDayCard(day) {
  const lang = t();
  const plans = getPlans();
  const plan = plans.find((item) => item.day === day);
  if (!plan) return;

  const done = isDone(day);
  dayCard.innerHTML = `
    <h2>${plan.title}</h2>
    <div class="badges">
      <span class="badge">${lang.timeLabel}: ${plan.duration}</span>
      <span class="badge">${lang.targetCaloriesLabel}: ~${plan.targetCalories}</span>
      <span class="badge">${lang.focusLabel}: ${plan.focus}</span>
      ${done ? `<span class="badge done-mark">${lang.doneLabel}</span>` : ""}
    </div>
    <h3>${lang.dayPlanTitle}</h3>
    <ul>
      ${plan.routine.map((step) => `<li>${step}</li>`).join("")}
    </ul>
    <p class="tip">${lang.tipLabel}: ${plan.tip}</p>
  `;

  markDoneBtn.textContent = done ? lang.unmarkDoneBtn : lang.markDoneBtn;
}

function renderAllDays() {
  const lang = t();
  const plans = getPlans();
  const completed = getCompletedDays();
  daysGrid.innerHTML = plans
    .map(
      (plan) => `
      <article class="day-mini ${completed.includes(plan.day) ? "done" : ""}">
        <strong>${lang.dayWord} ${plan.day}</strong>
        <p>${plan.theme}</p>
        <p>${lang.approxCaloriesText} • ${plan.duration}</p>
      </article>
    `
    )
    .join("");
}

function renderProgress() {
  const lang = t();
  const doneCount = getCompletedDays().length;
  progressText.textContent = `${doneCount}/30 ${lang.daysWord}`;
  progressBar.setAttribute("aria-valuenow", String(doneCount));
  progressFill.style.width = `${(doneCount / 30) * 100}%`;
}

function getSuggestedDay() {
  const doneDays = getCompletedDays();
  for (let day = 1; day <= 30; day += 1) {
    if (!doneDays.includes(day)) return day;
  }
  return 30;
}

function refreshUI(selectedDay) {
  renderStaticTexts();
  renderPicker();
  dayPicker.value = String(selectedDay);
  renderDayCard(selectedDay);
  renderAllDays();
  renderProgress();
  renderReminderStatus();
  renderCoachStep(selectedDay);
}

function getCoachPoseClass(stepIndex) {
  const pose = stepIndex % 5;
  return `pose-${pose}`;
}

function renderCoachStep(day) {
  const lang = t();
  const plan = getPlans().find((item) => item.day === day);
  if (!plan) return;

  const boundedIndex = Math.max(0, Math.min(coachStepIndex, plan.routine.length - 1));
  coachStepIndex = boundedIndex;
  const step = plan.routine[boundedIndex];
  coachStepText.textContent = lang.coachCurrentStep(step);

  coachFigure.className = `coach-figure ${getCoachPoseClass(boundedIndex)}`;
  coachFigure.classList.toggle("playing", coachPlaying);
  coachStartBtn.textContent = coachPlaying ? lang.coachPauseBtn : lang.coachStartBtn;
}

function stopCoachDemo() {
  coachPlaying = false;
  if (coachIntervalId) {
    clearInterval(coachIntervalId);
    coachIntervalId = null;
  }
}

function startCoachDemo() {
  const day = Number(dayPicker.value || getSuggestedDay());
  const plan = getPlans().find((item) => item.day === day);
  if (!plan) return;

  stopCoachDemo();
  coachPlaying = true;
  coachStepIndex = -1;
  nextCoachStep();
  coachIntervalId = setInterval(nextCoachStep, 3000);
}

function nextCoachStep() {
  const day = Number(dayPicker.value || getSuggestedDay());
  const plan = getPlans().find((item) => item.day === day);
  if (!plan) return;

  coachStepIndex = (coachStepIndex + 1) % plan.routine.length;
  renderCoachStep(day);
}

function setReminderStatus(statusKey, timeValue = "") {
  reminderStatusKey = statusKey;
  reminderStatusTime = timeValue;
  renderReminderStatus();
}

function renderReminderStatus() {
  const lang = t();
  if (reminderStatusKey === "reminderSaved" || reminderStatusKey === "reminderActive") {
    reminderStatus.textContent = lang[reminderStatusKey](reminderStatusTime);
    return;
  }

  reminderStatus.textContent = lang[reminderStatusKey] || "";
}

function getTodayDateKey() {
  return new Date().toISOString().slice(0, 10);
}

async function showReminderNotification() {
  const lang = t();
  const title = lang.notificationTitle;
  const body = lang.notificationBody;

  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration();
    if (registration) {
      await registration.showNotification(title, {
        body,
        icon: "icon.svg",
        badge: "icon.svg",
        tag: "daily-pilates-reminder"
      });
      return;
    }
  }

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
  }
}

function getSavedReminderTime() {
  return localStorage.getItem(reminderTimeKey) || "";
}

function saveReminderTime(timeValue) {
  localStorage.setItem(reminderTimeKey, timeValue);
}

async function ensureNotificationPermission() {
  const lang = t();

  if (!("Notification" in window)) {
    setReminderStatus("browserNoNotification");
    return false;
  }

  if (Notification.permission === "granted") return true;

  const result = await Notification.requestPermission();
  if (result !== "granted") {
    setReminderStatus("notificationDenied");
    return false;
  }

  return true;
}

async function handleSaveReminder() {
  const selectedTime = reminderTimeInput.value;
  if (!selectedTime) {
    setReminderStatus("chooseTimeFirst");
    return;
  }

  const hasPermission = await ensureNotificationPermission();
  if (!hasPermission) return;

  saveReminderTime(selectedTime);
  setReminderStatus("reminderSaved", selectedTime);
}

async function sendTestReminder() {
  const hasPermission = await ensureNotificationPermission();
  if (!hasPermission) return;
  await showReminderNotification();
  setReminderStatus("reminderTestSent");
}

async function checkAndSendDailyReminder() {
  const savedTime = getSavedReminderTime();
  if (!savedTime || Notification.permission !== "granted") return;

  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const currentTime = `${hh}:${mm}`;

  if (currentTime !== savedTime) return;

  const today = getTodayDateKey();
  const lastSentDate = localStorage.getItem(reminderLastSentDateKey);
  if (lastSentDate === today) return;

  await showReminderNotification();
  localStorage.setItem(reminderLastSentDateKey, today);
}

function initReminderUI() {
  reminderTimeInput.value = getSavedReminderTime();
  if (reminderTimeInput.value) {
    setReminderStatus("reminderActive", reminderTimeInput.value);
  } else {
    setReminderStatus("reminderNotSet");
  }
}

function initInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    installBtn.hidden = false;
  });

  window.addEventListener("appinstalled", () => {
    installBtn.hidden = true;
    deferredInstallPrompt = null;
    setReminderStatus("appInstalled");
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
  });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("sw.js").then((registration) => {
    registration.update();
  }).catch(() => {
    setReminderStatus("swRegisterFail");
  });
}

dayPicker.addEventListener("change", (event) => {
  const chosenDay = Number(event.target.value);
  coachStepIndex = 0;
  refreshUI(chosenDay);
});

languagePicker.addEventListener("change", (event) => {
  currentLanguage = event.target.value;
  localStorage.setItem(languageKey, currentLanguage);
  const day = Number(dayPicker.value || getSuggestedDay());
  refreshUI(day);
});

showTodayBtn.addEventListener("click", () => {
  const suggested = getSuggestedDay();
  dayPicker.value = String(suggested);
  coachStepIndex = 0;
  refreshUI(suggested);
});

markDoneBtn.addEventListener("click", () => {
  const day = Number(dayPicker.value);
  toggleDayDone(day);
  refreshUI(day);
});

saveReminderBtn.addEventListener("click", handleSaveReminder);
testReminderBtn.addEventListener("click", sendTestReminder);

coachStartBtn.addEventListener("click", () => {
  if (coachPlaying) {
    stopCoachDemo();
    renderCoachStep(Number(dayPicker.value || getSuggestedDay()));
    return;
  }

  startCoachDemo();
});

coachNextBtn.addEventListener("click", nextCoachStep);

function init() {
  registerServiceWorker();
  initInstallPrompt();
  initReminderUI();

  const firstDay = getSuggestedDay();
  refreshUI(firstDay);

  checkAndSendDailyReminder();
  setInterval(checkAndSendDailyReminder, 30000);
}

init();