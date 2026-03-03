const TOTAL_LEVELS = 1000;
const STORAGE_KEY = "memoryGameProfile";
const LEADERBOARD_KEY = "memoryGameTopFinishers";

const onboardingElement = document.getElementById("onboarding");
const onboardingTitle = document.getElementById("onboardingTitle");
const onboardingSubtitle = document.getElementById("onboardingSubtitle");
const onboardingError = document.getElementById("onboardingError");
const step1Element = document.getElementById("step1");
const step2Element = document.getElementById("step2");
const step3Element = document.getElementById("step3");
const nameInput1 = document.getElementById("nameInput1");
const ageInput = document.getElementById("ageInput");
const languageSelect = document.getElementById("languageSelect");
const nextToStep2Btn = document.getElementById("nextToStep2Btn");
const nextToStep3Btn = document.getElementById("nextToStep3Btn");
const startGameBtn = document.getElementById("startGameBtn");

const difficultyScreen = document.getElementById("difficultyScreen");
const levelsScreen = document.getElementById("levelsScreen");
const playScreen = document.getElementById("playScreen");

const titleText = document.getElementById("titleText");
const subtitleText = document.getElementById("subtitleText");
const difficultyEasyBtn = document.getElementById("difficultyEasyBtn");
const difficultyMediumBtn = document.getElementById("difficultyMediumBtn");
const difficultyHardBtn = document.getElementById("difficultyHardBtn");

const levelsTitle = document.getElementById("levelsTitle");
const levelsSubtitle = document.getElementById("levelsSubtitle");
const currentModeChip = document.getElementById("currentModeChip");
const modePicker = document.getElementById("modePicker");
const modeEasyBtn = document.getElementById("modeEasyBtn");
const modeMediumBtn = document.getElementById("modeMediumBtn");
const modeHardBtn = document.getElementById("modeHardBtn");
const leaderboardBtn = document.getElementById("leaderboardBtn");
const leaderboardPanel = document.getElementById("leaderboardPanel");
const leaderboardTitle = document.getElementById("leaderboardTitle");
const leaderboardList = document.getElementById("leaderboardList");
const closeLeaderboardBtn = document.getElementById("closeLeaderboardBtn");
const levelsGrid = document.getElementById("levelsGrid");

const playTitle = document.getElementById("playTitle");
const playMeta = document.getElementById("playMeta");
const backToLevelsBtn = document.getElementById("backToLevelsBtn");
const restartLevelBtn = document.getElementById("restartLevelBtn");

const timerLabel = document.getElementById("timerLabel");
const movesLabel = document.getElementById("movesLabel");
const pairsLabel = document.getElementById("pairsLabel");
const bestLabel = document.getElementById("bestLabel");
const timerElement = document.getElementById("timer");
const movesElement = document.getElementById("moves");
const pairsElement = document.getElementById("pairs");
const bestScoreElement = document.getElementById("bestScore");
const gameBoard = document.getElementById("gameBoard");
const messageElement = document.getElementById("message");

const translations = {
  he: {
    lang: "he",
    dir: "rtl",
    selectDifficultyTitle: "🧩 משחק זיכרון",
    selectDifficultySubtitle: "בחרו רמת קושי כדי להמשיך למסך השלבים.",
    easy: "קל",
    medium: "בינוני",
    hard: "קשה",
    levelsTitle: "שלבים 1-1000",
    levelsSubtitle: "שלבים נעולים ייפתחו בהדרגה. כל ניצחון פותח שלב חדש.",
    leaderboard: "שיאים",
    leaderboardTitle: "טופ שחקנים שסיימו 1000 שלבים",
    leaderboardEmpty: "עדיין אין שחקנים שסיימו את כל השלבים.",
    close: "סגור",
    finishedLevel1000: "סיים שלב 1000",
    levelWord: "שלב",
    locked: "נעול",
    playBack: "חזרה לשלבים",
    playRestart: "התחל שלב מחדש",
    timer: "זמן",
    moves: "מהלכים",
    pairs: "זוגות",
    best: "שיא אישי",
    congrats: "כל הכבוד!",
    startMessage: "התחילו להתאים זוגות זהים.",
    match: "זוג מצוין ✅",
    miss: "לא תואם, נסו שוב.",
    win: "כל הכבוד {name}! סיימתם את שלב {level}.",
    unlock: "נפתח לך שלב {next} 🔓",
    bestEmpty: "--"
  },
  en: {
    lang: "en",
    dir: "ltr",
    selectDifficultyTitle: "🧩 Memory Game",
    selectDifficultySubtitle: "Choose a difficulty to continue to the levels screen.",
    easy: "Easy",
    medium: "Medium",
    hard: "Hard",
    levelsTitle: "Levels 1-1000",
    levelsSubtitle: "Locked levels open gradually. Every win unlocks one more level.",
    leaderboard: "Top Scores",
    leaderboardTitle: "Top players who finished all 1000 levels",
    leaderboardEmpty: "No player has finished all levels yet.",
    close: "Close",
    finishedLevel1000: "Finished level 1000",
    levelWord: "Level",
    locked: "Locked",
    playBack: "Back to Levels",
    playRestart: "Restart Level",
    timer: "Time",
    moves: "Moves",
    pairs: "Pairs",
    best: "Best Score",
    congrats: "Well done!",
    startMessage: "Start matching identical pairs.",
    match: "Great pair ✅",
    miss: "Not a match. Try again.",
    win: "Great job {name}! You finished level {level}.",
    unlock: "Level {next} is now unlocked 🔓",
    bestEmpty: "--"
  },
  ar: {
    lang: "ar",
    dir: "rtl",
    selectDifficultyTitle: "🧩 لعبة الذاكرة",
    selectDifficultySubtitle: "اختر مستوى الصعوبة للانتقال إلى شاشة المراحل.",
    easy: "سهل",
    medium: "متوسط",
    hard: "صعب",
    levelsTitle: "المراحل 1-1000",
    levelsSubtitle: "تُفتح المراحل المغلقة تدريجيًا. كل فوز يفتح مرحلة جديدة.",
    leaderboard: "أفضل النتائج",
    leaderboardTitle: "أفضل اللاعبين الذين أنهوا 1000 مرحلة",
    leaderboardEmpty: "لا يوجد لاعب أنهى كل المراحل بعد.",
    close: "إغلاق",
    finishedLevel1000: "أنهى المرحلة 1000",
    levelWord: "مرحلة",
    locked: "مغلق",
    playBack: "العودة للمراحل",
    playRestart: "إعادة المرحلة",
    timer: "الوقت",
    moves: "الحركات",
    pairs: "الأزواج",
    best: "أفضل نتيجة",
    congrats: "أحسنت!",
    startMessage: "ابدأ بمطابقة الأزواج المتشابهة.",
    match: "زوج ممتاز ✅",
    miss: "ليسا متطابقين، حاول مرة أخرى.",
    win: "أحسنت {name}! أنهيت المرحلة {level}.",
    unlock: "تم فتح المرحلة {next} 🔓",
    bestEmpty: "--"
  }
};

let profile = {
  name: "",
  age: "",
  language: "he",
  selectedDifficulty: "easy",
  lastLevel: {
    easy: 1,
    medium: 1,
    hard: 1
  },
  progress: {
    easy: 1,
    medium: 1,
    hard: 1
  },
  bestScores: {
    easy: {},
    medium: {},
    hard: {}
  }
};

let onboardingStep = 1;
let currentLevel = 1;
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let totalPairs = 0;
let timerId = null;
let seconds = 0;
let gameStarted = false;
let topFinishers = [];
const blinkTargetLevel = {
  easy: null,
  medium: null,
  hard: null
};

const emojiPool = [
  "🐶", "🐱", "🦊", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐵",
  "🐸", "🐧", "🐦", "🦄", "🐙", "🐢", "🦋", "🐞", "🐠", "🦀",
  "🍎", "🍌", "🍇", "🍉", "🍓", "🍒", "🥝", "🍍", "🥥", "🍑",
  "🍕", "🍔", "🍟", "🌮", "🍩", "🍪", "🍰", "🍫", "🍿", "🥨",
  "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🎱", "🥊", "🏓", "🏸",
  "🚗", "🚕", "🚌", "🚑", "🚒", "🚜", "🚲", "✈️", "🚀", "🚤",
  "⭐", "🌙", "☀️", "🌈", "⚡", "🔥", "❄️", "🌊", "🌸", "🍀",
  "🎵", "🎹", "🎸", "🎺", "🥁", "🎻", "🎮", "🎲", "🧩", "🎯",
  "💎", "🪙", "🔑", "📚", "🕹️", "⌚", "📷", "💡", "🧠", "🪄",
  "❤️", "💙", "💜", "🖤", "🤍", "💛", "🧡", "💚", "🩷", "🩵"
];

function t(key) {
  const pack = translations[profile.language] || translations.he;
  return pack[key] ?? translations.he[key] ?? "";
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
}

function persistCurrentPosition() {
  if (!["easy", "medium", "hard"].includes(profile.selectedDifficulty)) {
    return;
  }

  const unlocked = profile.progress[profile.selectedDifficulty] || 1;
  const levelToSave = Math.max(1, Math.min(currentLevel || 1, unlocked));
  profile.lastLevel[profile.selectedDifficulty] = levelToSave;
  saveProfile();
}

function loadTopFinishers() {
  const raw = localStorage.getItem(LEADERBOARD_KEY);
  if (!raw) {
    topFinishers = [];
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      topFinishers = [];
      return;
    }

    topFinishers = parsed.filter((entry) => (
      entry
      && typeof entry.name === "string"
      && ["easy", "medium", "hard"].includes(entry.difficulty)
      && Number.isInteger(entry.time)
      && Number.isInteger(entry.moves)
      && typeof entry.completedAt === "string"
    ));
  } catch {
    topFinishers = [];
  }
}

function saveTopFinishers() {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(topFinishers));
}

function sortTopFinishers() {
  topFinishers.sort((a, b) => {
    return new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime();
  });
}

function registerTopFinisher() {
  const difficulty = profile.selectedDifficulty;
  const existingIndex = topFinishers.findIndex((entry) => (
    entry.name === profile.name && entry.difficulty === difficulty
  ));

  const newEntry = {
    name: profile.name,
    difficulty,
    time: seconds,
    moves,
    completedAt: new Date().toISOString()
  };

  if (existingIndex < 0) {
    topFinishers.push(newEntry);
  }

  sortTopFinishers();
  topFinishers = topFinishers.slice(0, 100);
  saveTopFinishers();
}

function renderLeaderboard() {
  leaderboardList.innerHTML = "";

  if (!topFinishers.length) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "leaderboard-empty";
    emptyItem.textContent = t("leaderboardEmpty");
    leaderboardList.appendChild(emptyItem);
    return;
  }

  topFinishers.slice(0, 100).forEach((entry, index) => {
    const item = document.createElement("li");
    item.className = "leaderboard-item";
    const difficultyLabel = t(entry.difficulty);
    item.textContent = `${index + 1}. ${entry.name} • ${difficultyLabel} • ${t("finishedLevel1000")} • ${formatTime(entry.time)} • ${entry.moves}`;
    leaderboardList.appendChild(item);
  });
}

function normalizeProgress(inputProgress) {
  return {
    easy: Number.isInteger(inputProgress?.easy) && inputProgress.easy > 0 ? Math.min(inputProgress.easy, TOTAL_LEVELS) : 1,
    medium: Number.isInteger(inputProgress?.medium) && inputProgress.medium > 0 ? Math.min(inputProgress.medium, TOTAL_LEVELS) : 1,
    hard: Number.isInteger(inputProgress?.hard) && inputProgress.hard > 0 ? Math.min(inputProgress.hard, TOTAL_LEVELS) : 1
  };
}

function normalizeLastLevel(inputLastLevel, progress) {
  return {
    easy: Number.isInteger(inputLastLevel?.easy) && inputLastLevel.easy > 0
      ? Math.min(inputLastLevel.easy, progress.easy)
      : 1,
    medium: Number.isInteger(inputLastLevel?.medium) && inputLastLevel.medium > 0
      ? Math.min(inputLastLevel.medium, progress.medium)
      : 1,
    hard: Number.isInteger(inputLastLevel?.hard) && inputLastLevel.hard > 0
      ? Math.min(inputLastLevel.hard, progress.hard)
      : 1
  };
}

function normalizeBestScores(inputBestScores) {
  const result = { easy: {}, medium: {}, hard: {} };
  ["easy", "medium", "hard"].forEach((difficulty) => {
    const source = inputBestScores?.[difficulty];
    if (!source || typeof source !== "object") {
      return;
    }
    Object.entries(source).forEach(([levelKey, value]) => {
      if (!value || typeof value !== "object") {
        return;
      }
      if (!Number.isInteger(value.time) || !Number.isInteger(value.moves)) {
        return;
      }
      result[difficulty][levelKey] = { time: value.time, moves: value.moves };
    });
  });
  return result;
}

function loadProfile() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);

    const selectedDifficulty = ["easy", "medium", "hard"].includes(parsed.selectedDifficulty)
      ? parsed.selectedDifficulty
      : (["easy", "medium", "hard"].includes(parsed.lastDifficulty) ? parsed.lastDifficulty : "easy");

    profile = {
      name: typeof parsed.name === "string" ? parsed.name : "",
      age: Number.isInteger(parsed.age) ? parsed.age : "",
      language: translations[parsed.language] ? parsed.language : "he",
      selectedDifficulty,
      progress: normalizeProgress(parsed.progress),
      lastLevel: { easy: 1, medium: 1, hard: 1 },
      bestScores: normalizeBestScores(parsed.bestScores)
    };

    profile.lastLevel = normalizeLastLevel(parsed.lastLevel, profile.progress);

    if (parsed.bestScores && !parsed.progress) {
      ["easy", "medium", "hard"].forEach((difficulty) => {
        if (parsed.bestScores[difficulty]) {
          profile.progress[difficulty] = 1;
        }
      });
    }
  } catch {
    profile = {
      name: "",
      age: "",
      language: "he",
      selectedDifficulty: "easy",
      lastLevel: { easy: 1, medium: 1, hard: 1 },
      progress: { easy: 1, medium: 1, hard: 1 },
      bestScores: { easy: {}, medium: {}, hard: {} }
    };
  }
}

function formatTime(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function showSection(sectionName) {
  difficultyScreen.classList.add("hidden");
  levelsScreen.classList.add("hidden");
  playScreen.classList.add("hidden");

  if (sectionName === "difficulty") {
    difficultyScreen.classList.remove("hidden");
  } else if (sectionName === "levels") {
    levelsScreen.classList.remove("hidden");
  } else {
    playScreen.classList.remove("hidden");
  }
}

function applyLanguage() {
  const current = translations[profile.language] || translations.he;
  document.documentElement.lang = current.lang;
  document.documentElement.dir = current.dir;

  titleText.textContent = current.selectDifficultyTitle;
  subtitleText.textContent = current.selectDifficultySubtitle;
  difficultyEasyBtn.textContent = current.easy;
  difficultyMediumBtn.textContent = current.medium;
  difficultyHardBtn.textContent = current.hard;

  levelsTitle.textContent = current.levelsTitle;
  levelsSubtitle.textContent = current.levelsSubtitle;
  modeEasyBtn.textContent = current.easy;
  modeMediumBtn.textContent = current.medium;
  modeHardBtn.textContent = current.hard;
  leaderboardBtn.textContent = current.leaderboard;
  leaderboardTitle.textContent = current.leaderboardTitle;
  closeLeaderboardBtn.textContent = current.close;

  backToLevelsBtn.textContent = current.playBack;
  restartLevelBtn.textContent = current.playRestart;
  timerLabel.textContent = current.timer;
  movesLabel.textContent = current.moves;
  pairsLabel.textContent = current.pairs;
  bestLabel.textContent = current.best;

  updatePlayHeader();
  renderLevelsGrid();
  updateBestScoreDisplay();
  renderLeaderboard();
}

function showOnboardingStep(step) {
  onboardingStep = step;
  step1Element.classList.toggle("active", step === 1);
  step2Element.classList.toggle("active", step === 2);
  step3Element.classList.toggle("active", step === 3);
  onboardingError.textContent = "";

  if (step === 1) {
    onboardingTitle.textContent = "ברוכים הבאים למשחק הזיכרון";
    onboardingSubtitle.textContent = "שלב 1: איך קוראים לכם?";
    nameInput1.focus();
  } else if (step === 2) {
    onboardingTitle.textContent = "עוד שלב קטן";
    onboardingSubtitle.textContent = "שלב 2: מה הגיל שלך?";
    ageInput.focus();
  } else {
    onboardingTitle.textContent = "שלב אחרון";
    onboardingSubtitle.textContent = "שלב 3: בחרו שפה ואז המשיכו למשחק.";
    languageSelect.focus();
  }
}

function validateName(value) {
  return value.trim().length >= 2;
}

function validateAge(value) {
  const parsedAge = Number(value);
  return Number.isInteger(parsedAge) && parsedAge >= 11 && parsedAge <= 1000;
}

function setupOnboardingHandlers() {
  nextToStep2Btn.addEventListener("click", () => {
    const name = nameInput1.value.trim();
    if (!validateName(name)) {
      onboardingError.textContent = "נא לכתוב שם תקין (לפחות 2 תווים).";
      return;
    }
    showOnboardingStep(2);
  });

  nextToStep3Btn.addEventListener("click", () => {
    const age = ageInput.value.trim();
    if (!validateAge(age)) {
      onboardingError.textContent = "נא להזין ערך תקין בין 11 ל-1000.";
      return;
    }
    showOnboardingStep(3);
  });

  startGameBtn.addEventListener("click", () => {
    const finalName = nameInput1.value.trim();
    const finalAge = ageInput.value.trim();
    const selectedLanguage = languageSelect.value;

    if (!validateName(finalName)) {
      onboardingError.textContent = "נא להכניס שם כדי להתחיל.";
      showOnboardingStep(1);
      return;
    }

    if (!validateAge(finalAge)) {
      onboardingError.textContent = "נא להזין ערך תקין בין 11 ל-1000.";
      showOnboardingStep(2);
      return;
    }

    profile.name = finalName;
    profile.age = Number(finalAge);
    profile.language = translations[selectedLanguage] ? selectedLanguage : "he";
    saveProfile();
    enterAppFlow();
  });

  [nameInput1, ageInput].forEach((inputElement) => {
    inputElement.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") {
        return;
      }
      if (onboardingStep === 1) {
        nextToStep2Btn.click();
      } else if (onboardingStep === 2) {
        nextToStep3Btn.click();
      }
    });
  });
}

function updateDifficultyButtons() {
  const selected = profile.selectedDifficulty;
  [difficultyEasyBtn, difficultyMediumBtn, difficultyHardBtn].forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === selected);
  });
  currentModeChip.textContent = t(selected);
  [modeEasyBtn, modeMediumBtn, modeHardBtn].forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === selected);
  });
}

function renderLevelsGrid() {
  levelsGrid.innerHTML = "";
  const selectedDifficulty = profile.selectedDifficulty;
  const unlockedUntil = profile.progress[selectedDifficulty] || 1;
  const highlightedLevel = Math.min(
    profile.lastLevel[selectedDifficulty] || 1,
    unlockedUntil
  );
  const blinkingLevel = blinkTargetLevel[selectedDifficulty] || highlightedLevel;

  for (let level = 1; level <= TOTAL_LEVELS; level += 1) {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.dataset.level = String(level);
    const isUnlocked = level <= unlockedUntil;

    tile.className = `level-tile ${isUnlocked ? "unlocked" : "locked"}`;
    tile.classList.toggle("active", level === highlightedLevel || (highlightedLevel === 1 && level === 1));
    tile.classList.toggle("blink-target", level === blinkingLevel);

    const levelText = `${t("levelWord")} ${level}`;
    tile.innerHTML = `<span>${levelText}</span>${isUnlocked ? "" : '<span class="lock">🔒</span>'}`;

    if (!isUnlocked) {
      tile.disabled = true;
      tile.title = t("locked");
    } else {
      tile.addEventListener("click", () => startLevel(level));
    }

    levelsGrid.appendChild(tile);
  }
}

function focusLevelTile(level) {
  const tile = levelsGrid.querySelector(`.level-tile[data-level="${level}"]`);
  if (!tile) {
    return;
  }
  tile.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

function updatePlayHeader() {
  const difficultyName = t(profile.selectedDifficulty);
  playTitle.textContent = `${t("levelWord")} ${currentLevel}`;
  playMeta.textContent = `${difficultyName} • ${totalPairs} זוגות`;
}

function getBestForCurrentLevel() {
  const key = String(currentLevel);
  const difficultyScores = profile.bestScores[profile.selectedDifficulty] || {};
  return difficultyScores[key] || null;
}

function updateBestScoreDisplay() {
  const best = getBestForCurrentLevel();
  bestScoreElement.textContent = best ? `${formatTime(best.time)} • ${best.moves}` : t("bestEmpty");
}

function updateStats() {
  movesElement.textContent = String(moves);
  pairsElement.textContent = `${matchedPairs}/${totalPairs}`;
}

function setMessage(text, type = "") {
  messageElement.textContent = text;
  messageElement.className = `message ${type}`.trim();
}

function startTimer() {
  if (timerId) {
    return;
  }

  timerId = setInterval(() => {
    seconds += 1;
    timerElement.textContent = formatTime(seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function resetTurn() {
  [firstCard, secondCard, lockBoard] = [null, null, false];
}

function getMismatchDelay() {
  const delays = { easy: 650, medium: 500, hard: 350 };
  return delays[profile.selectedDifficulty] || 500;
}

function maybeSaveBest() {
  const key = String(currentLevel);
  const scores = profile.bestScores[profile.selectedDifficulty] || {};
  const currentBest = scores[key];

  const hasNoBest = !currentBest;
  const betterByTime = currentBest && seconds < currentBest.time;
  const tieWithBetterMoves = currentBest && seconds === currentBest.time && moves < currentBest.moves;

  if (hasNoBest || betterByTime || tieWithBetterMoves) {
    scores[key] = { time: seconds, moves };
    profile.bestScores[profile.selectedDifficulty] = scores;
    saveProfile();
    return true;
  }

  return false;
}

function unlockNextLevelIfNeeded() {
  const difficulty = profile.selectedDifficulty;
  const highest = profile.progress[difficulty] || 1;

  if (currentLevel === highest && highest < TOTAL_LEVELS) {
    profile.progress[difficulty] = highest + 1;
    saveProfile();
    return highest + 1;
  }

  return null;
}

function checkWin() {
  if (matchedPairs !== totalPairs) {
    return;
  }

  stopTimer();
  maybeSaveBest();
  updateBestScoreDisplay();

  const unlocked = unlockNextLevelIfNeeded();
  const difficulty = profile.selectedDifficulty;
  const nowUnlockedUntil = profile.progress[difficulty] || 1;
  const nextTargetLevel = Math.min(currentLevel + 1, nowUnlockedUntil, TOTAL_LEVELS);

  profile.lastLevel[difficulty] = nextTargetLevel;
  blinkTargetLevel[difficulty] = nextTargetLevel;
  saveProfile();

  let winMessage = t("win")
    .replace("{name}", profile.name)
    .replace("{level}", String(currentLevel));

  if (unlocked) {
    winMessage += ` ${t("unlock").replace("{next}", String(unlocked))}`;
  }

  if (currentLevel === TOTAL_LEVELS) {
    registerTopFinisher();
    renderLeaderboard();
  }

  triggerVictoryAnimation();
  setMessage(winMessage, "success");
  renderLevelsGrid();

  setTimeout(() => {
    showSection("levels");
    focusLevelTile(nextTargetLevel);
  }, 1200);
}

function triggerVictoryAnimation() {
  playScreen.classList.add("victory-glow");

  const globalLayer = document.createElement("div");
  globalLayer.className = "global-victory-layer";
  globalLayer.setAttribute("aria-hidden", "true");

  const burst = document.createElement("div");
  burst.className = "victory-burst";
  burst.setAttribute("aria-hidden", "true");

  const overlay = document.createElement("div");
  overlay.className = "victory-overlay";
  burst.appendChild(overlay);

  const banner = document.createElement("div");
  banner.className = "victory-banner";
  banner.textContent = `${t("congrats")} 👏👏 👍👍`;
  burst.appendChild(banner);

  const burstEmojis = ["🎉", "✨", "⭐", "🏆", "💫", "👏", "👍", "🔥"];
  const particlesCount = 120;

  for (let index = 0; index < particlesCount; index += 1) {
    const particle = document.createElement("span");
    particle.className = "victory-particle";
    particle.textContent = burstEmojis[index % burstEmojis.length];
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 0.35}s`;
    particle.style.animationDuration = `${1.5 + Math.random() * 1.5}s`;
    burst.appendChild(particle);
  }

  globalLayer.appendChild(burst);
  document.body.appendChild(globalLayer);

  setTimeout(() => {
    playScreen.classList.remove("victory-glow");
    globalLayer.remove();
  }, 3000);
}

function onCardClick(event) {
  const card = event.currentTarget;

  if (lockBoard || card === firstCard || card.classList.contains("matched")) {
    return;
  }

  if (!gameStarted) {
    gameStarted = true;
    startTimer();
  }

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lockBoard = true;
  moves += 1;
  updateStats();

  const isMatch = firstCard.dataset.symbol === secondCard.dataset.symbol;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    matchedPairs += 1;
    updateStats();
    setMessage(t("match"));
    resetTurn();
    checkWin();
    return;
  }

  setMessage(t("miss"), "error");
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetTurn();
  }, getMismatchDelay());
}

function createCard(symbol) {
  const display = symbol.split("|")[1] || symbol;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "card";
  button.dataset.symbol = symbol;
  button.innerHTML = `
    <div class="card-inner">
      <span class="card-face card-front">?</span>
      <span class="card-face card-back">${display}</span>
    </div>
  `;
  button.addEventListener("click", onCardClick);
  return button;
}

function buildDeck(pairsCount) {
  const pool = [...emojiPool];
  shuffleArray(pool);
  const startOffset = (currentLevel * 7) % pool.length;

  const deck = [];
  for (let pairNumber = 1; pairNumber <= pairsCount; pairNumber += 1) {
    const emoji = pool[(startOffset + pairNumber - 1) % pool.length];
    const symbol = `${pairNumber}|${emoji}${pairNumber}`;
    deck.push(symbol, symbol);
  }
  return shuffleArray(deck);
}

function calculateColumns(cardCount) {
  const maxByDifficulty = {
    easy: 10,
    medium: 12,
    hard: 14
  };

  const maxCols = maxByDifficulty[profile.selectedDifficulty] || 12;
  const base = Math.ceil(Math.sqrt(cardCount));
  return Math.min(maxCols, Math.max(4, base));
}

function setBoardLayout(cardCount) {
  const cols = calculateColumns(cardCount);
  gameBoard.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
}

function resetLevelState() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matchedPairs = 0;
  seconds = 0;
  gameStarted = false;
  stopTimer();
  timerElement.textContent = formatTime(seconds);
  updateStats();
  setMessage(t("startMessage"));
}

function startLevel(level) {
  currentLevel = level;
  blinkTargetLevel[profile.selectedDifficulty] = null;
  persistCurrentPosition();
  totalPairs = level;

  showSection("play");
  updatePlayHeader();
  updateBestScoreDisplay();

  const cardsCount = totalPairs * 2;
  setBoardLayout(cardsCount);
  resetLevelState();

  const deck = buildDeck(totalPairs);
  gameBoard.innerHTML = "";
  deck.forEach((symbol) => {
    gameBoard.appendChild(createCard(symbol));
  });

  renderLevelsGrid();
}

function enterAppFlow() {
  document.body.classList.remove("setup-mode");
  document.body.classList.add("game-mode");
  onboardingElement.setAttribute("aria-hidden", "true");

  ["easy", "medium", "hard"].forEach((difficulty) => {
    const saved = Math.min(profile.lastLevel[difficulty] || 1, profile.progress[difficulty] || 1);
    blinkTargetLevel[difficulty] = saved;
  });

  applyLanguage();
  updateDifficultyButtons();
  currentLevel = profile.lastLevel[profile.selectedDifficulty] || 1;
  showSection("difficulty");
}

function setupDifficultyHandlers() {
  [difficultyEasyBtn, difficultyMediumBtn, difficultyHardBtn].forEach((button) => {
    button.addEventListener("click", () => {
      profile.selectedDifficulty = button.dataset.difficulty;
      currentLevel = profile.lastLevel[profile.selectedDifficulty] || 1;
      blinkTargetLevel[profile.selectedDifficulty] = currentLevel;
      saveProfile();
      updateDifficultyButtons();
      renderLevelsGrid();
      showSection("levels");
    });
  });

  currentModeChip.addEventListener("click", () => {
    modePicker.classList.toggle("hidden");
  });

  [modeEasyBtn, modeMediumBtn, modeHardBtn].forEach((button) => {
    button.addEventListener("click", () => {
      profile.selectedDifficulty = button.dataset.difficulty;
      currentLevel = profile.lastLevel[profile.selectedDifficulty] || 1;
      blinkTargetLevel[profile.selectedDifficulty] = currentLevel;
      saveProfile();
      updateDifficultyButtons();
      renderLevelsGrid();
      modePicker.classList.add("hidden");
    });
  });

  leaderboardBtn.addEventListener("click", () => {
    leaderboardPanel.classList.remove("hidden");
    renderLeaderboard();
  });

  closeLeaderboardBtn.addEventListener("click", () => {
    leaderboardPanel.classList.add("hidden");
  });
}

function setupPlayHandlers() {
  backToLevelsBtn.addEventListener("click", () => {
    stopTimer();
    showSection("levels");
    renderLevelsGrid();
  });

  restartLevelBtn.addEventListener("click", () => {
    startLevel(currentLevel);
  });
}

function init() {
  document.body.classList.add("setup-mode");
  loadProfile();
  loadTopFinishers();

  nameInput1.value = profile.name || "";
  ageInput.value = profile.age ? String(profile.age) : "";
  languageSelect.value = translations[profile.language] ? profile.language : "he";

  setupOnboardingHandlers();
  setupDifficultyHandlers();
  setupPlayHandlers();
  window.addEventListener("beforeunload", persistCurrentPosition);
  showOnboardingStep(1);
}

init();
