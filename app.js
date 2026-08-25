// Version & Update Management
const CURRENT_TRAINER_VERSION = '{{VERSION_PLACEHOLDER}}';

// State Management
let currentTab = 'dashboard';
let currentQuizId = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedOptions = [];
let hasCheckedAnswer = false;
let sessionCorrectCount = 0;

// Trainer States
let activeTrainer = 'alkalinity';
let currentAlkalinityData = null;
let currentMassBalanceData = null;
let currentSolidsData = null;
let currentHoleData = null;

// Global Stats (Persisted in LocalStorage)
let stats = {
  totalAnswered: 0,
  correctCount: 0,
  simulatorsRun: 0,
  hw5_highScore: null,
  hw6_highScore: null,
  hw7_highScore: null,
  hw8_highScore: null,
  hw9_highScore: null,
  bp_highScore: null,
  hw11_highScore: null,
  hw12_highScore: null,
  hw13_highScore: null,
  hw14_highScore: null,
  hw15_highScore: null,
  hw16_highScore: null,
  hw17_highScore: null,
  hw18_highScore: null,
  hw19_highScore: null,
  hw20_highScore: null,
  hw21_highScore: null,
  hw22_highScore: null,
  vcf_highScore: null,
  vfd_highScore: null,
  vhc_highScore: null,
  vpd_highScore: null,
  failedQuestions: [],
  theme: 'dark'
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  loadStats();
  applyTheme();
  updateDashboardStats();
  switchTab('dashboard');
  
  // Render Cheatsheet and Initialize counters
  renderProductCheatSheet();
  updateErrorLogCounter();
  
  // Initialize trainers with default parameters
  generateAlkalinityParams();
  generateMassBalanceParams();
  generateSolidsParams();
  generateHoleParams();
  loadRandomContaminantCase();

  // Check for trainer updates after initialization and then every 15 minutes
  setTimeout(checkUpdates, 3000);
  setInterval(checkUpdates, 15 * 60 * 1000);
});

// Load and Save Stats
function loadStats() {
  try {
    const saved = localStorage.getItem('baroid_core_stats');
    if (saved) {
      stats = { ...stats, ...JSON.parse(saved) };
    }
    // Defensive initialization
    if (!stats.failedQuestions || !Array.isArray(stats.failedQuestions)) {
      stats.failedQuestions = [];
    }
  } catch (e) {
    console.warn("localStorage is not accessible in this context", e);
  }
}

function saveStats() {
  try {
    localStorage.setItem('baroid_core_stats', JSON.stringify(stats));
  } catch (e) {
    console.warn("localStorage save failed", e);
  }
  updateDashboardStats();
}

// Theme Management
function toggleTheme() {
  stats.theme = stats.theme === 'dark' ? 'light' : 'dark';
  saveStats();
  applyTheme();
}

function applyTheme() {
  document.body.setAttribute('data-theme', stats.theme);
  const btn = document.getElementById('theme-toggle-button');
  if (btn) {
    btn.innerHTML = stats.theme === 'dark' 
      ? `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;margin-right:8px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m14.071-4.071l-.707.707M6.343 17.657l-.707.707m2.828-9.9a5 5 0 117.072 0l-.707.707M16.243 17.657l-.707-.707"/></svg>Light Mode`
      : `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;margin-right:8px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>Dark Mode`;
  }
}

// Navigation Tabs
function switchTab(tabId) {
  currentTab = tabId;
  
  // Close mobile drawer automatically
  closeMobileSidebar();
  
  // Sync active mobile bottom tabs
  document.querySelectorAll('.mobile-nav-tab').forEach(el => el.classList.remove('active'));
  const mTab = document.getElementById(`m-tab-${tabId}`);
  if (mTab) mTab.classList.add('active');
  
  // Hide all sections
  document.querySelectorAll('.view-pane').forEach(el => el.style.display = 'none');
  
  // Remove active from links
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  
  // Show target section
  if (tabId === 'dashboard') {
    document.getElementById('view-dashboard').style.display = 'flex';
    document.getElementById('nav-dashboard').classList.add('active');
    document.getElementById('page-title').innerText = "Learning Dashboard";
    document.getElementById('page-subtitle').innerText = "Monitor your stats and start practicing.";
  } else if (tabId === 'hw5') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw5').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 5: Solids Control & Waste";
    document.getElementById('page-subtitle').innerText = "Practice questions about the waste hierarchy, solids classification, and mechanical separation.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_5' || isFinished) startQuiz('homework_5');
  } else if (tabId === 'hw6') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw6').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 6: Solids Control Equipment";
    document.getElementById('page-subtitle').innerText = "Review shale shakers, screen API standards, conductance/conveyance, and feed pumps.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_6' || isFinished) startQuiz('homework_6');
  } else if (tabId === 'hw7') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw7').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 7: Centrifuges & Dryers";
    document.getElementById('page-subtitle').innerText = "Review centrifuge settings, dewatering physics, vertical cuttings dryers, and dilution math.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_7' || isFinished) startQuiz('homework_7');
  } else if (tabId === 'hw8') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw8').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 8: Alkalinity & pH (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice theory questions about pH, filtrate alkalinity, and ionic calculations.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_8' || isFinished) startQuiz('homework_8');
  } else if (tabId === 'hw9') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw9').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 9: Chemistry & Clays (Theory)";
    document.getElementById('page-subtitle').innerText = "Clays and polymers theory questions, excluding all calculation items.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_9' || isFinished) startQuiz('homework_9');
  } else if (tabId === 'bp') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-bp').classList.add('active');
    document.getElementById('page-title').innerText = "Baroid Business Processes";
    document.getElementById('page-subtitle').innerText = "Practice questions about Baroid's 5 Mainstays, Value Proposition, Technical Process, Black Book, Hard Stops, and focus areas.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'business_processes' || isFinished) startQuiz('business_processes');
  } else if (tabId === 'hw11') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw11').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 11: Fluid Contaminants (Theory)";
    document.getElementById('page-subtitle').innerText = "Identify WBF contaminants, classify solids, and calculate treatment chemical dosages.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_11' || isFinished) startQuiz('homework_11');
  } else if (tabId === 'hw12') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw12').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 12: Drilling Hydraulics (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice questions about flow regimes, shear rates, rheological models, and bit energy distribution based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_12' || isFinished) startQuiz('homework_12');
  } else if (tabId === 'hw13') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw13').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 13: Non-Aqueous Fluids (NAF)";
    document.getElementById('page-subtitle').innerText = "Practice questions about NAF and IEF chemistry, retort calculations, and waste management based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_13' || isFinished) startQuiz('homework_13');
  } else if (tabId === 'hw14') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw14').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 14: WPS & Solids (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice questions about Water Phase Salinity (WPS) salts, excess lime, and retort solids definitions based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_14' || isFinished) startQuiz('homework_14');
  } else if (tabId === 'hw15') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw15').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 15: NAF Formulations (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice questions about NAF mixing sequences, product functions (INVERMUL, GELTONE II), and formulation parameters based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_15' || isFinished) startQuiz('homework_15');
  } else if (tabId === 'hw16') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw16').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 16: OWR & Salinity Adjustments (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice questions about OWR changes, salinity adjustments, and density effects based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_16' || isFinished) startQuiz('homework_16');
  } else if (tabId === 'hw17') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw17').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 17: NAF Contaminants (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice questions about Non-Aqueous Fluid (NAF) contaminants and their treatments based on the Baroid Core guide.";
    const isFinished = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_17' || isFinished) startQuiz('homework_17');
  } else if (tabId === 'hw18') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw18').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 18: Formation Damage & Reservoir Fluids";
    document.getElementById('page-subtitle').innerText = "Review formation damage mechanisms, reservoir characteristics, drill-in fluids, and completion brines.";
    const isFinished18 = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_18' || isFinished18) startQuiz('homework_18');
  } else if (tabId === 'hw19') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw19').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 19: Wellbore Displacements & Brines";
    document.getElementById('page-subtitle').innerText = "Practice questions on wellbore displacement procedures, completion brines, and fluid selection criteria.";
    const isFinished19 = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_19' || isFinished19) startQuiz('homework_19');
  } else if (tabId === 'hw20') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw20').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 20: Breakers & Packer Fluids";
    document.getElementById('page-subtitle').innerText = "Practice questions on filter cake breakers, packer fluid design, and completion fluid applications.";
    const isFinished20 = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_20' || isFinished20) startQuiz('homework_20');
  } else if (tabId === 'hw21') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw21').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 21: Hole Cleaning & Sweeps";
    document.getElementById('page-subtitle').innerText = "Review hole cleaning concepts, cuttings transport by angle, sweep design, and drilling parameter optimization.";
    const isFinished21 = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_21' || isFinished21) startQuiz('homework_21');
  } else if (tabId === 'hw22') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw22').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 22: Pore Pressures & Wellbore Instability";
    document.getElementById('page-subtitle').innerText = "Review pore pressure regimes, wellbore instability causes, stuck pipe mechanisms, spacer design, and hydraulics.";
    const isFinished22 = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'homework_22' || isFinished22) startQuiz('homework_22');
  } else if (tabId === 'vcf') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-vcf').classList.add('active');
    document.getElementById('page-title').innerText = "Video Quiz: Completion Fluids";
    document.getElementById('page-subtitle').innerText = "Practice questions from the Completion Fluids video: categories, hydrates, overbalance, polymers, brine tools, and PPE.";
    const isFinishedVcf = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'video_completions' || isFinishedVcf) startQuiz('video_completions');
  } else if (tabId === 'vfd') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-vfd').classList.add('active');
    document.getElementById('page-title').innerText = "Video Quiz: Formation Damage";
    document.getElementById('page-subtitle').innerText = "Practice questions from the Formation Damage video: production causes, damage mechanisms, clay behavior, scaling, skin, and wettability.";
    const isFinishedVfd = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'video_formation_damage' || isFinishedVfd) startQuiz('video_formation_damage');
  } else if (tabId === 'vhc') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-vhc').classList.add('active');
    document.getElementById('page-title').innerText = "Video Quiz: Hole Cleaning";
    document.getElementById('page-subtitle').innerText = "Practice questions from the Hole Cleaning video: primary vs secondary methods, indicators, fluid properties, sweeps, annular velocity, and slip velocity.";
    const isFinishedVhc = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'video_hole_cleaning' || isFinishedVhc) startQuiz('video_hole_cleaning');
  } else if (tabId === 'vpd') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-vpd').classList.add('active');
    document.getElementById('page-title').innerText = "Video Quiz: Pills and Displacement";
    document.getElementById('page-subtitle').innerText = "Practice questions from the Pills and Displacement video: recommended practices, sweep pills, pill types, dry jobs, objectives, and CFG modeling.";
    const isFinishedVpd = document.getElementById('quiz-results-container').style.display === 'block';
    if (currentQuizId !== 'video_pills_displacement' || isFinishedVpd) startQuiz('video_pills_displacement');
  } else if (tabId === 'contaminants') {
    document.getElementById('view-contaminants').style.display = 'block';
    document.getElementById('nav-contaminants').classList.add('active');
    document.getElementById('page-title').innerText = "WBF Contaminants Diagnostics Workspace";
    document.getElementById('page-subtitle').innerText = "Analyze fluid reports, identify contaminants, select chemical treatments, and calculate dosages.";
    if (!currentContaminantCase) {
      loadRandomContaminantCase();
    } else {
      loadContaminantCase(currentContaminantCase);
    }
  } else if (tabId === 'trainers') {
    document.getElementById('view-trainers').style.display = 'flex';
    document.getElementById('nav-trainers').classList.add('active');
    document.getElementById('page-title').innerText = "Dynamic Math Simulators";
    document.getElementById('page-subtitle').innerText = "Practice calculations with randomized parameters and instant step-by-step guidance.";
  } else if (tabId === 'cheatsheet') {
    document.getElementById('view-cheatsheet').style.display = 'block';
    document.getElementById('nav-cheatsheet').classList.add('active');
    document.getElementById('page-title').innerText = "Baroid Core Knowledge Base";
    document.getElementById('page-subtitle').innerText = "Reference sheets for Baroid products and exam equations.";
  } else if (tabId === 'contaminants-naf') {
    document.getElementById('view-contaminants-naf').style.display = 'block';
    document.getElementById('nav-contaminants-naf').classList.add('active');
    document.getElementById('page-title').innerText = "NAF Contaminants Diagnostics Workspace";
    document.getElementById('page-subtitle').innerText = "Analyze fluid reports, identify contaminants, and select chemical treatments based on Homework 17.";
    if (!currentNafCase) {
      startNafSession();
    } else {
      loadNafCase(currentNafCase);
    }
  } else if (tabId === 'errors') {
    document.getElementById('view-errors').style.display = 'block';
    document.getElementById('nav-errors').classList.add('active');
    document.getElementById('page-title').innerText = "Active Error Log";
    document.getElementById('page-subtitle').innerText = "Review and practice your incorrect answers.";
    updateErrorLogIntro();
  }
  
  // Expand category automatically in sidebar
  autoExpandSidebarCategory(tabId);
  
  // Autofocus first input on tab switch
  setTimeout(() => {
    const activePane = document.querySelector('.view-pane[style*="display: flex"], .view-pane[style*="display: block"]');
    if (activePane) {
      const firstInp = activePane.querySelector('input');
      if (firstInp && !firstInp.disabled) {
        firstInp.focus();
      }
    }
  }, 100);
}

function autoExpandSidebarCategory(tabId) {
  const link = document.getElementById(`nav-${tabId}`);
  if (link) {
    const parentDetails = link.closest('.nav-category');
    if (parentDetails) {
      parentDetails.open = true;
    }
  }
}

// Dashboard statistics updating
function updateDashboardStats() {
  document.getElementById('stats-total-answered').innerText = stats.totalAnswered;
  document.getElementById('stats-correct-count').innerText = stats.correctCount;
  document.getElementById('stats-simulators-run').innerText = stats.simulatorsRun;
  
  const scoreHw5El = document.getElementById('score-hw5');
  if (scoreHw5El) scoreHw5El.innerText = stats.hw5_highScore !== null ? `Record: ${stats.hw5_highScore}%` : "Record: --";
  const scoreHw6El = document.getElementById('score-hw6');
  if (scoreHw6El) scoreHw6El.innerText = stats.hw6_highScore !== null ? `Record: ${stats.hw6_highScore}%` : "Record: --";
  const scoreHw7El = document.getElementById('score-hw7');
  if (scoreHw7El) scoreHw7El.innerText = stats.hw7_highScore !== null ? `Record: ${stats.hw7_highScore}%` : "Record: --";
  
  const scoreHw8El = document.getElementById('score-hw8');
  if (scoreHw8El) scoreHw8El.innerText = stats.hw8_highScore !== null ? `Record: ${stats.hw8_highScore}%` : "Record: --";
  const scoreHw9El = document.getElementById('score-hw9');
  if (scoreHw9El) scoreHw9El.innerText = stats.hw9_highScore !== null ? `Record: ${stats.hw9_highScore}%` : "Record: --";
  const scoreBpEl = document.getElementById('score-bp');
  if (scoreBpEl) scoreBpEl.innerText = stats.bp_highScore !== null ? `Record: ${stats.bp_highScore}%` : "Record: --";
  const scoreHw11El = document.getElementById('score-hw11');
  if (scoreHw11El) scoreHw11El.innerText = stats.hw11_highScore !== null ? `Record: ${stats.hw11_highScore}%` : "Record: --";
  const scoreHw12El = document.getElementById('score-hw12');
  if (scoreHw12El) scoreHw12El.innerText = stats.hw12_highScore !== null ? `Record: ${stats.hw12_highScore}%` : "Record: --";
  const scoreHw13El = document.getElementById('score-hw13');
  if (scoreHw13El) scoreHw13El.innerText = stats.hw13_highScore !== null ? `Record: ${stats.hw13_highScore}%` : "Record: --";
  const scoreHw14El = document.getElementById('score-hw14');
  if (scoreHw14El) scoreHw14El.innerText = stats.hw14_highScore !== null ? `Record: ${stats.hw14_highScore}%` : "Record: --";
  const scoreHw15El = document.getElementById('score-hw15');
  if (scoreHw15El) scoreHw15El.innerText = stats.hw15_highScore !== null ? `Record: ${stats.hw15_highScore}%` : "Record: --";
  const scoreHw16El = document.getElementById('score-hw16');
  if (scoreHw16El) scoreHw16El.innerText = stats.hw16_highScore !== null ? `Record: ${stats.hw16_highScore}%` : "Record: --";
  const scoreHw17El = document.getElementById('score-hw17');
  if (scoreHw17El) scoreHw17El.innerText = stats.hw17_highScore !== null ? `Record: ${stats.hw17_highScore}%` : "Record: --";
  const scoreHw18El = document.getElementById('score-hw18');
  if (scoreHw18El) scoreHw18El.innerText = stats.hw18_highScore !== null ? `Record: ${stats.hw18_highScore}%` : "Record: --";
  const scoreHw19El = document.getElementById('score-hw19');
  if (scoreHw19El) scoreHw19El.innerText = stats.hw19_highScore !== null ? `Record: ${stats.hw19_highScore}%` : "Record: --";
  const scoreHw20El = document.getElementById('score-hw20');
  if (scoreHw20El) scoreHw20El.innerText = stats.hw20_highScore !== null ? `Record: ${stats.hw20_highScore}%` : "Record: --";
  const scoreHw21El = document.getElementById('score-hw21');
  if (scoreHw21El) scoreHw21El.innerText = stats.hw21_highScore !== null ? `Record: ${stats.hw21_highScore}%` : "Record: --";
  const scoreHw22El = document.getElementById('score-hw22');
  if (scoreHw22El) scoreHw22El.innerText = stats.hw22_highScore !== null ? `Record: ${stats.hw22_highScore}%` : "Record: --";
  const scoreVcfEl = document.getElementById('score-vcf');
  if (scoreVcfEl) scoreVcfEl.innerText = stats.vcf_highScore !== null ? `Record: ${stats.vcf_highScore}%` : "Record: --";
  const scoreVfdEl = document.getElementById('score-vfd');
  if (scoreVfdEl) scoreVfdEl.innerText = stats.vfd_highScore !== null ? `Record: ${stats.vfd_highScore}%` : "Record: --";
  const scoreVhcEl = document.getElementById('score-vhc');
  if (scoreVhcEl) scoreVhcEl.innerText = stats.vhc_highScore !== null ? `Record: ${stats.vhc_highScore}%` : "Record: --";
  const scoreVpdEl = document.getElementById('score-vpd');
  if (scoreVpdEl) scoreVpdEl.innerText = stats.vpd_highScore !== null ? `Record: ${stats.vpd_highScore}%` : "Record: --";

  // Calculate Accuracy
  const accuracy = stats.totalAnswered > 0 ? Math.round((stats.correctCount / stats.totalAnswered) * 100) : 0;
  document.getElementById('stat-accuracy-text').innerText = `${accuracy}% correct`;
  document.getElementById('stat-accuracy-value').innerText = `${accuracy}%`;
  
  // Progress circular bar conic gradient
  const ring = document.getElementById('accuracy-progress-ring');
  if (ring) {
    ring.style.background = `conic-gradient(var(--primary) ${accuracy}%, rgba(255,255,255,0.05) ${accuracy}%)`;
  }
}
// QUIZ SYSTEM LOGIC
function startQuiz(quizId) {
  currentQuizId = quizId;
  const quizInfo = QUIZ_DATA[quizId];
  
  // Initialize questions with state tracking properties
  currentQuestions = quizInfo.questions.map(question => {
    const q = { ...question };
    q.userAnswerState = 'unanswered';
    q.userSelectedOptions = [];
    if (q.options) {
      q.shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    }
    q.userMatchingAnswers = {};
    q.userCalculationAnswers = {};
    return q;
  });
  
  currentQuestionIndex = 0;
  selectedOptions = [];
  hasCheckedAnswer = false;
  sessionCorrectCount = 0;
  
  // Switch to quiz view pane
  document.querySelectorAll('.view-pane').forEach(el => el.style.display = 'none');
  document.getElementById('view-quiz').style.display = 'block';
  
  // Update sidebar active links
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  
  let navId = '';
  let badgeName = '';
  if (quizId === 'homework_5') {
    navId = 'nav-hw5';
    badgeName = "Homework 5";
  } else if (quizId === 'homework_6') {
    navId = 'nav-hw6';
    badgeName = "Homework 6";
  } else if (quizId === 'homework_7') {
    navId = 'nav-hw7';
    badgeName = "Homework 7";
  } else if (quizId === 'homework_8') {
    navId = 'nav-hw8';
    badgeName = "Homework 8";
  } else if (quizId === 'homework_9') {
    navId = 'nav-hw9';
    badgeName = "Homework 9";
  } else if (quizId === 'business_processes') {
    navId = 'nav-bp';
    badgeName = "Processes";
  } else if (quizId === 'homework_11') {
    navId = 'nav-hw11';
    badgeName = "Homework 11";
  } else if (quizId === 'homework_12') {
    navId = 'nav-hw12';
    badgeName = "Homework 12";
  } else if (quizId === 'homework_13') {
    navId = 'nav-hw13';
    badgeName = "Homework 13";
  } else if (quizId === 'homework_14') {
    navId = 'nav-hw14';
    badgeName = "Homework 14";
  } else if (quizId === 'homework_15') {
    navId = 'nav-hw15';
    badgeName = "Homework 15";
  } else if (quizId === 'homework_16') {
    navId = 'nav-hw16';
    badgeName = "Homework 16";
  } else if (quizId === 'homework_17') {
    navId = 'nav-hw17';
    badgeName = "Homework 17";
  } else if (quizId === 'homework_18') {
    navId = 'nav-hw18';
    badgeName = "Homework 18";
  } else if (quizId === 'homework_19') {
    navId = 'nav-hw19';
    badgeName = "Homework 19";
  } else if (quizId === 'homework_20') {
    navId = 'nav-hw20';
    badgeName = "Homework 20";
  } else if (quizId === 'homework_21') {
    navId = 'nav-hw21';
    badgeName = "Homework 21";
  } else if (quizId === 'homework_22') {
    navId = 'nav-hw22';
    badgeName = "Homework 22";
  } else if (quizId.startsWith('video_')) {
    if (quizId === 'video_completions') { navId = 'nav-vcf'; badgeName = 'CF Video'; }
    else if (quizId === 'video_formation_damage') { navId = 'nav-vfd'; badgeName = 'FD Video'; }
    else if (quizId === 'video_hole_cleaning') { navId = 'nav-vhc'; badgeName = 'HC Video'; }
    else if (quizId === 'video_pills_displacement') { navId = 'nav-vpd'; badgeName = 'Pill Video'; }
  } else if (quizId.startsWith('contaminants')) {
    navId = quizId === 'contaminants-naf' ? 'nav-contaminants-naf' : 'nav-contaminants';
    badgeName = 'Contam';
  }
  
  if (navId) {
    const navLink = document.getElementById(navId);
    if (navLink) navLink.classList.add('active');
  } else {
    console.warn('[Trainer Updates] Unmapped quizId for navigation highlighting:', quizId);
  }
  
  document.getElementById('quiz-badge-id').innerText = badgeName;
  
  // Set page headers
  document.getElementById('page-title').innerText = quizInfo.title;
  document.getElementById('page-subtitle').innerText = quizInfo.description;
  
  // Hide result screen initially
  document.getElementById('quiz-results-container').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  
  showQuestion(0);
}

// Render the interactive top ribbon
function renderQuizProgressGrid() {
  const gridContainer = document.getElementById('quiz-progress-grid');
  if (!gridContainer) return;
  gridContainer.innerHTML = '';
  
  currentQuestions.forEach((q, idx) => {
    const chip = document.createElement('div');
    chip.className = `progress-chip ${q.userAnswerState}`;
    if (idx === currentQuestionIndex) {
      chip.classList.add('current');
    }
    chip.innerText = idx + 1;
    chip.title = `Jump to Question ${idx + 1}`;
    chip.onclick = () => {
      saveUnsubmittedAnswers();
      showQuestion(idx);
    };
    gridContainer.appendChild(chip);
  });
}

// Save inputs before navigating away
function saveUnsubmittedAnswers() {
  if (hasCheckedAnswer) return;
  const q = currentQuestions[currentQuestionIndex];
  if (!q) return;
  
  if (q.type === 'single' || q.type === 'multiple') {
    q.userSelectedOptions = [...selectedOptions];
  } else if (q.type === 'matching') {
    Object.keys(q.pairs).forEach(key => {
      const selectEl = document.getElementById(`match-select-${key}`);
      if (selectEl) {
        q.userMatchingAnswers[key] = selectEl.value;
      }
    });
  } else if (q.type.startsWith('calculation')) {
    Object.keys(q.answer).forEach(key => {
      const inputEl = document.getElementById(`calc-ans-${key}`);
      if (inputEl) {
        q.userCalculationAnswers[key] = inputEl.value;
      }
    });
  }
}

function showQuestion(index) {
  currentQuestionIndex = index;
  const q = currentQuestions[index];
  
  // Set evaluated status based on saved state
  hasCheckedAnswer = (q.userAnswerState === 'correct' || q.userAnswerState === 'incorrect');
  
  // Restore selected options
  selectedOptions = q.userSelectedOptions ? [...q.userSelectedOptions] : [];
  
  // Render progress ribbon
  renderQuizProgressGrid();
  
  document.getElementById('quiz-question-counter').innerText = `Question ${index + 1} of ${currentQuestions.length}`;
  document.getElementById('quiz-question-text').innerText = `${q.number}: ${q.question}`;
  
  const list = document.getElementById('quiz-options-list');
  list.innerHTML = '';
  
  if (q.type === 'single' || q.type === 'multiple') {
    // Keep consistent shuffle order when navigating back and forth
    if (!q.shuffledOptions) {
      q.shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    }
    
    q.shuffledOptions.forEach((opt, oIdx) => {
      const card = document.createElement('div');
      card.className = 'option-card glass glass-hover';
      card.id = `opt-${opt.value}`;
      
      if (!hasCheckedAnswer) {
        card.setAttribute('onclick', `selectOption('${opt.value}')`);
      }
      
      const indicator = document.createElement('div');
      indicator.className = q.type === 'single' ? 'option-radio' : 'option-checkbox';
      
      const text = document.createElement('span');
      text.innerText = opt.label;
      
      card.appendChild(indicator);
      card.appendChild(text);
      
      // Shortcut key badge
      const badge = document.createElement('span');
      badge.className = 'shortcut-badge';
      const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
      badge.innerText = `${oIdx + 1} / ${letters[oIdx]}`;
      card.appendChild(badge);
      
      list.appendChild(card);
      
      // Restore selected state
      if (selectedOptions.includes(opt.value)) {
        card.classList.add('selected');
      }
      
      // Restore grading classes
      if (hasCheckedAnswer) {
        const isCorrectOpt = q.type === 'single' ? (opt.value === q.answer) : q.answer.includes(opt.value);
        if (isCorrectOpt) {
          card.classList.add('correct');
        } else if (selectedOptions.includes(opt.value)) {
          card.classList.add('incorrect');
        }
      }
    });
    
    if (hasCheckedAnswer) {
      document.getElementById('btn-quiz-action').innerText = index === currentQuestions.length - 1 ? "View Results" : "Next Question";
      document.getElementById('btn-quiz-retry').style.display = q.userAnswerState === 'correct' ? 'none' : 'inline-flex';
      document.getElementById('btn-quiz-skip').style.display = 'none';
      document.getElementById('btn-quiz-prev').disabled = index === 0;
      
      document.getElementById('quiz-explanation-text').innerText = q.explanation;
      document.getElementById('quiz-explanation-card').style.display = 'block';
    } else {
      document.getElementById('btn-quiz-action').innerText = "Check Answer";
      document.getElementById('btn-quiz-retry').style.display = 'none';
      document.getElementById('btn-quiz-skip').style.display = 'inline-flex';
      document.getElementById('btn-quiz-prev').disabled = index === 0;
      document.getElementById('quiz-explanation-card').style.display = 'none';
    }
  } else if (q.type === 'matching') {
    renderMatchingInputs(q);
    if (hasCheckedAnswer) {
      document.getElementById('btn-quiz-action').innerText = index === currentQuestions.length - 1 ? "View Results" : "Next Question";
      document.getElementById('btn-quiz-retry').style.display = q.userAnswerState === 'correct' ? 'none' : 'inline-flex';
      document.getElementById('btn-quiz-skip').style.display = 'none';
      
      document.getElementById('quiz-explanation-text').innerText = q.explanation;
      document.getElementById('quiz-explanation-card').style.display = 'block';
    }
  } else if (q.type.startsWith('calculation')) {
    renderCalculationInputs(q);
    if (hasCheckedAnswer) {
      document.getElementById('btn-quiz-action').innerText = index === currentQuestions.length - 1 ? "View Results" : "Next Question";
      document.getElementById('btn-quiz-retry').style.display = q.userAnswerState === 'correct' ? 'none' : 'inline-flex';
      document.getElementById('btn-quiz-skip').style.display = 'none';
      
      document.getElementById('quiz-explanation-text').innerText = q.explanation;
      document.getElementById('quiz-explanation-card').style.display = 'block';
    }
  }
}

function renderMatchingInputs(q) {
  const list = document.getElementById('quiz-options-list');
  list.innerHTML = '';
  
  const container = document.createElement('div');
  container.className = 'trainer-section';
  
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = '150px 1fr';
  grid.style.gap = '16px';
  grid.style.alignItems = 'center';
  
  const allValues = q.options ? q.options : Object.values(q.pairs);
  const shuffledValues = [...allValues].sort(() => Math.random() - 0.5);
  
  const allKeys = Object.keys(q.pairs);
  const shuffledKeys = q.keepKeysOrder ? allKeys : [...allKeys].sort(() => Math.random() - 0.5);
  
  shuffledKeys.forEach(key => {
    const label = document.createElement('div');
    label.style.fontWeight = '600';
    label.style.fontSize = '16px';
    label.innerText = key;
    
    const select = document.createElement('select');
    select.className = 'input-field';
    select.id = `match-select-${key}`;
    select.style.width = '100%';
    
    const defOpt = document.createElement('option');
    defOpt.value = '';
    defOpt.innerText = '-- Select match --';
    select.appendChild(defOpt);
    
    shuffledValues.forEach(val => {
      const opt = document.createElement('option');
      opt.value = val;
      opt.innerText = val;
      select.appendChild(opt);
    });
    
    // Restore selection
    if (q.userMatchingAnswers && q.userMatchingAnswers[key] !== undefined) {
      select.value = q.userMatchingAnswers[key];
    }
    
    // Restore styling / state
    if (hasCheckedAnswer) {
      select.disabled = true;
      const correctVal = q.pairs[key];
      if (select.value === correctVal) {
        select.classList.add('correct');
      } else {
        select.classList.add('incorrect');
      }
    }
    
    grid.appendChild(label);
    grid.appendChild(select);
  });
  
  container.appendChild(grid);
  list.appendChild(container);
  
  document.getElementById('btn-quiz-action').innerText = "Check Answer";
  document.getElementById('btn-quiz-retry').style.display = 'none';
  document.getElementById('btn-quiz-skip').style.display = 'inline-flex';
  document.getElementById('btn-quiz-prev').disabled = currentQuestionIndex === 0;
  document.getElementById('quiz-explanation-card').style.display = 'none';
}

function renderCalculationInputs(q) {
  const list = document.getElementById('quiz-options-list');
  list.innerHTML = '';
  
  const container = document.createElement('div');
  container.className = 'trainer-section';
  
  const board = document.createElement('div');
  board.className = 'params-board';
  board.innerHTML = `<div class="params-title">Problem Data</div>`;
  
  const grid = document.createElement('div');
  grid.className = 'params-grid';
  
  Object.keys(q.inputs).forEach(key => {
    if (key === 'type') return;
    const item = document.createElement('div');
    item.className = 'param-item';
    item.innerHTML = `<span class="param-label">${key}</span><span class="param-value">${q.inputs[key]}</span>`;
    grid.appendChild(item);
  });
  
  board.appendChild(grid);
  container.appendChild(board);
  
  const inputGrid = document.createElement('div');
  inputGrid.className = 'inputs-grid';
  
  Object.keys(q.answer).forEach(key => {
    const group = document.createElement('div');
    group.className = 'input-group';
    let labelText = key;
    if (key === 'OH') labelText = 'Hydroxide (OH⁻), mg/L';
    else if (key === 'CO3') labelText = 'Carbonate (CO₃²⁻), mg/L';
    else if (key === 'HCO3') labelText = 'Bicarbonate (HCO₃⁻), mg/L';
    else if (key === 'sacks') labelText = 'Sacks of Barite (100 lb/sk)';
    else if (key === 'dump') labelText = 'Volume to dump (bbl)';
    else if (key === 'vfinal') labelText = 'Final Volume (bbl)';
    else if (key === 'contaminant') labelText = 'Contaminant to be removed';
    else if (key === 'chemical') labelText = 'Treatment Chemical';
    else if (key === 'concentration') labelText = 'Concentration of treatment (lb/bbl)';
    else if (key === 'nap_ratio') labelText = 'NAP Ratio (%)';
    else if (key === 'water_ratio') labelText = 'Water Ratio (%)';
    else if (key === 'dilution_bbl') labelText = 'Required Dilution Volume (bbl)';
    else if (key === 'savings_usd') labelText = 'Cost Savings (US$)';
    
    const isString = typeof q.answer[key] === 'string';
    const inputId = `calc-ans-${key}`;
    
    const label = document.createElement('label');
    label.className = 'input-label';
    label.setAttribute('for', inputId);
    label.innerText = labelText;
    
    const input = document.createElement('input');
    input.type = isString ? 'text' : 'number';
    if (!isString) input.setAttribute('step', '0.0001');
    input.id = inputId;
    input.className = 'input-field';
    input.placeholder = isString ? 'e.g. Lime' : 'Enter calculated value...';
    
    // Restore value
    if (q.userCalculationAnswers && q.userCalculationAnswers[key] !== undefined) {
      input.value = q.userCalculationAnswers[key];
    }
    
    // Apply styling if graded
    if (hasCheckedAnswer) {
      input.disabled = true;
      const targetVal = q.answer[key];
      let isInputCorrect = false;
      
      if (typeof targetVal === 'string') {
        isInputCorrect = input.value.trim().toLowerCase() === targetVal.trim().toLowerCase();
      } else {
        const userVal = parseFloat(input.value);
        const tol = Math.max(0.1, targetVal * 0.01);
        const diff = Math.abs(userVal - targetVal);
        isInputCorrect = !isNaN(userVal) && diff <= tol;
      }
      
      if (isInputCorrect) {
        input.classList.add('correct');
      } else {
        input.classList.add('incorrect');
      }
    }
    
    // Enter key validation handler
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        quizActionSubmit();
      }
    });
    
    group.appendChild(label);
    group.appendChild(input);
    inputGrid.appendChild(group);
  });
  
  container.appendChild(inputGrid);
  list.appendChild(container);
  
  document.getElementById('btn-quiz-action').innerText = "Check Answer";
  document.getElementById('btn-quiz-retry').style.display = 'none';
  document.getElementById('btn-quiz-skip').style.display = 'inline-flex';
  document.getElementById('btn-quiz-prev').disabled = currentQuestionIndex === 0;
  document.getElementById('quiz-explanation-card').style.display = 'none';
  
  // Autofocus the first field
  setTimeout(() => {
    const firstInp = inputGrid.querySelector('input');
    if (firstInp && !firstInp.disabled) {
      firstInp.focus();
    }
  }, 60);
}

function selectOption(val) {
  if (hasCheckedAnswer) return;
  const q = currentQuestions[currentQuestionIndex];
  
  if (q.type === 'single') {
    selectedOptions = [val];
    document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
    const targetEl = document.getElementById(`opt-${val}`);
    if (targetEl) targetEl.classList.add('selected');
    
    // Immediate auto-evaluation in Speedrun Mode
    const isSpeedrun = document.getElementById('speedrun-mode-checkbox')?.checked;
    if (isSpeedrun) {
      setTimeout(() => {
        quizActionSubmit();
      }, 180);
    }
  } else if (q.type === 'multiple') {
    const idx = selectedOptions.indexOf(val);
    const targetEl = document.getElementById(`opt-${val}`);
    if (idx > -1) {
      selectedOptions.splice(idx, 1);
      if (targetEl) targetEl.classList.remove('selected');
    } else {
      selectedOptions.push(val);
      if (targetEl) targetEl.classList.add('selected');
    }
  }
}

function quizActionSubmit() {
  const q = currentQuestions[currentQuestionIndex];
  if (!q) return;
  
  if (!hasCheckedAnswer) {
    let isCorrect = false;
    
    if (q.type === 'single') {
      if (selectedOptions.length === 0) return alert("Please select an option.");
      isCorrect = selectedOptions[0] === q.answer;
      
      document.querySelectorAll('.option-card').forEach(el => {
        const val = el.id.substring(4);
        if (val === q.answer) el.classList.add('correct');
        else if (selectedOptions.includes(val)) el.classList.add('incorrect');
      });
      
    } else if (q.type === 'multiple') {
      if (selectedOptions.length === 0) return alert("Please select at least one option.");
      
      const sortedUser = [...selectedOptions].sort();
      const sortedAns = [...q.answer].sort();
      isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedAns);
      
      document.querySelectorAll('.option-card').forEach(el => {
        const val = el.id.substring(4);
        const shouldHave = q.answer.includes(val);
        const selected = selectedOptions.includes(val);
        
        if (shouldHave) el.classList.add('correct');
        else if (selected) el.classList.add('incorrect');
      });
      
    } else if (q.type === 'matching') {
      let allCorrect = true;
      let selectedCount = 0;
      
      Object.keys(q.pairs).forEach(key => {
        const selectEl = document.getElementById(`match-select-${key}`);
        if (selectEl && selectEl.value !== '') selectedCount++;
      });
      
      if (selectedCount < Object.keys(q.pairs).length) {
        return alert("Please select a match for all items.");
      }
      
      Object.keys(q.pairs).forEach(key => {
        const selectEl = document.getElementById(`match-select-${key}`);
        if (!selectEl) return;
        const correctVal = q.pairs[key];
        
        if (selectEl.value === correctVal) {
          selectEl.classList.add('correct');
          selectEl.classList.remove('incorrect');
        } else {
          selectEl.classList.add('incorrect');
          selectEl.classList.remove('correct');
          allCorrect = false;
        }
      });
      
      isCorrect = allCorrect;
      
    } else if (q.type.startsWith('calculation')) {
      let allCorrect = true;
      Object.keys(q.answer).forEach(key => {
        const inputEl = document.getElementById(`calc-ans-${key}`);
        if (!inputEl) return;
        const targetVal = q.answer[key];
        
        if (typeof targetVal === 'string') {
          const userVal = inputEl.value.trim().toLowerCase();
          const targetStr = targetVal.trim().toLowerCase();
          if (userVal === targetStr) {
            inputEl.classList.add('correct');
            inputEl.classList.remove('incorrect');
          } else {
            inputEl.classList.add('incorrect');
            inputEl.classList.remove('correct');
            allCorrect = false;
          }
        } else {
          const userVal = parseFloat(inputEl.value);
          const tol = Math.max(0.1, targetVal * 0.01);
          const diff = Math.abs(userVal - targetVal);
          
          if (!isNaN(userVal) && diff <= tol) {
            inputEl.classList.add('correct');
            inputEl.classList.remove('incorrect');
          } else {
            inputEl.classList.add('incorrect');
            inputEl.classList.remove('correct');
            allCorrect = false;
          }
        }
      });
      isCorrect = allCorrect;
    }
    
    // Update question state properties
    q.userAnswerState = isCorrect ? 'correct' : 'incorrect';
    if (q.type === 'single' || q.type === 'multiple') {
      q.userSelectedOptions = [...selectedOptions];
    } else if (q.type === 'matching') {
      q.userMatchingAnswers = {};
      Object.keys(q.pairs).forEach(key => {
        const selectEl = document.getElementById(`match-select-${key}`);
        if (selectEl) q.userMatchingAnswers[key] = selectEl.value;
      });
    } else if (q.type.startsWith('calculation')) {
      q.userCalculationAnswers = {};
      Object.keys(q.answer).forEach(key => {
        const inputEl = document.getElementById(`calc-ans-${key}`);
        if (inputEl) q.userCalculationAnswers[key] = inputEl.value;
      });
    }
    
    stats.totalAnswered += 1;
    if (isCorrect) {
      stats.correctCount += 1;
      sessionCorrectCount += 1;
      const targetQuizId = currentQuizId === 'errors' ? q.originalQuizId : currentQuizId;
      removeFromErrorLog(targetQuizId, q.id);
    } else {
      const targetQuizId = currentQuizId === 'errors' ? q.originalQuizId : currentQuizId;
      addToErrorLog(targetQuizId, q.id);
    }
    saveStats();
    
    document.getElementById('quiz-explanation-text').innerText = q.explanation;
    document.getElementById('quiz-explanation-card').style.display = 'block';
    
    document.getElementById('btn-quiz-action').innerText = currentQuestionIndex === currentQuestions.length - 1 ? "View Results" : "Next Question";
    document.getElementById('btn-quiz-retry').style.display = isCorrect ? 'none' : 'inline-flex';
    document.getElementById('btn-quiz-skip').style.display = 'none';
    hasCheckedAnswer = true;
    
    // Re-render the visual progress chips
    renderQuizProgressGrid();
    
    // Auto-advance in Speedrun Mode if answered CORRECTLY
    const isSpeedrun = document.getElementById('speedrun-mode-checkbox')?.checked;
    if (isSpeedrun && isCorrect) {
      setTimeout(() => {
        if (hasCheckedAnswer && currentQuestionIndex < currentQuestions.length - 1) {
          showQuestion(currentQuestionIndex + 1);
        } else if (hasCheckedAnswer && currentQuestionIndex === currentQuestions.length - 1) {
          showQuizResults();
        }
      }, 1000);
    }
    
  } else {
    // Already checked, advance to next question
    if (currentQuestionIndex < currentQuestions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      showQuizResults();
    }
  }
}

function quizPrevQuestion() {
  if (currentQuestionIndex > 0) {
    saveUnsubmittedAnswers();
    showQuestion(currentQuestionIndex - 1);
  }
}

function quizRetryQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  if (q) {
    q.userAnswerState = 'unanswered';
    q.userSelectedOptions = [];
    q.userMatchingAnswers = {};
    q.userCalculationAnswers = {};
  }
  showQuestion(currentQuestionIndex);
}

function quizSkipQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  if (q && q.userAnswerState === 'unanswered') {
    q.userAnswerState = 'skipped';
  }
  if (currentQuestionIndex < currentQuestions.length - 1) {
    showQuestion(currentQuestionIndex + 1);
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('quiz-results-container').style.display = 'block';
  
  const scorePercent = Math.round((sessionCorrectCount / currentQuestions.length) * 100);
  
  const congratsEl = document.getElementById('quiz-results-congrats');
  if (congratsEl) {
    if (scorePercent >= 80) {
      congratsEl.innerText = "Congrats Habibi!";
      congratsEl.style.display = 'block';
    } else {
      congratsEl.style.display = 'none';
    }
  }
  
  document.getElementById('quiz-results-summary').innerText = `You answered ${sessionCorrectCount} out of ${currentQuestions.length} questions correctly.`;
  document.getElementById('quiz-results-score').innerText = `${scorePercent}%`;
  
  if (currentQuizId === 'homework_5') {
    if (stats.hw5_highScore === null || scorePercent > stats.hw5_highScore) stats.hw5_highScore = scorePercent;
  } else if (currentQuizId === 'homework_6') {
    if (stats.hw6_highScore === null || scorePercent > stats.hw6_highScore) stats.hw6_highScore = scorePercent;
  } else if (currentQuizId === 'homework_7') {
    if (stats.hw7_highScore === null || scorePercent > stats.hw7_highScore) stats.hw7_highScore = scorePercent;
  } else if (currentQuizId === 'homework_8') {
    if (stats.hw8_highScore === null || scorePercent > stats.hw8_highScore) stats.hw8_highScore = scorePercent;
  } else if (currentQuizId === 'homework_9') {
    if (stats.hw9_highScore === null || scorePercent > stats.hw9_highScore) stats.hw9_highScore = scorePercent;
  } else if (currentQuizId === 'business_processes') {
    if (stats.bp_highScore === null || scorePercent > stats.bp_highScore) stats.bp_highScore = scorePercent;
  } else if (currentQuizId === 'homework_11') {
    if (stats.hw11_highScore === null || scorePercent > stats.hw11_highScore) stats.hw11_highScore = scorePercent;
  } else if (currentQuizId === 'homework_12') {
    if (stats.hw12_highScore === null || scorePercent > stats.hw12_highScore) stats.hw12_highScore = scorePercent;
  } else if (currentQuizId === 'homework_13') {
    if (stats.hw13_highScore === null || scorePercent > stats.hw13_highScore) stats.hw13_highScore = scorePercent;
  } else if (currentQuizId === 'homework_14') {
    if (stats.hw14_highScore === null || scorePercent > stats.hw14_highScore) stats.hw14_highScore = scorePercent;
  } else if (currentQuizId === 'homework_15') {
    if (stats.hw15_highScore === null || scorePercent > stats.hw15_highScore) stats.hw15_highScore = scorePercent;
  } else if (currentQuizId === 'homework_16') {
    if (stats.hw16_highScore === null || scorePercent > stats.hw16_highScore) stats.hw16_highScore = scorePercent;
  } else if (currentQuizId === 'homework_17') {
    if (stats.hw17_highScore === null || scorePercent > stats.hw17_highScore) stats.hw17_highScore = scorePercent;
  } else if (currentQuizId === 'homework_18') {
    if (stats.hw18_highScore === null || scorePercent > stats.hw18_highScore) stats.hw18_highScore = scorePercent;
  } else if (currentQuizId === 'homework_19') {
    if (stats.hw19_highScore === null || scorePercent > stats.hw19_highScore) stats.hw19_highScore = scorePercent;
  } else if (currentQuizId === 'homework_20') {
    if (stats.hw20_highScore === null || scorePercent > stats.hw20_highScore) stats.hw20_highScore = scorePercent;
  } else if (currentQuizId === 'homework_21') {
    if (stats.hw21_highScore === null || scorePercent > stats.hw21_highScore) stats.hw21_highScore = scorePercent;
  } else if (currentQuizId === 'homework_22') {
    if (stats.hw22_highScore === null || scorePercent > stats.hw22_highScore) stats.hw22_highScore = scorePercent;
  } else if (currentQuizId === 'video_completions') {
    if (stats.vcf_highScore === null || scorePercent > stats.vcf_highScore) stats.vcf_highScore = scorePercent;
  } else if (currentQuizId === 'video_formation_damage') {
    if (stats.vfd_highScore === null || scorePercent > stats.vfd_highScore) stats.vfd_highScore = scorePercent;
  } else if (currentQuizId === 'video_hole_cleaning') {
    if (stats.vhc_highScore === null || scorePercent > stats.vhc_highScore) stats.vhc_highScore = scorePercent;
  } else if (currentQuizId === 'video_pills_displacement') {
    if (stats.vpd_highScore === null || scorePercent > stats.vpd_highScore) stats.vpd_highScore = scorePercent;
  }
  saveStats();
}

function restartCurrentQuiz() {
  if (currentQuizId === 'errors') {
    startErrorPractice();
  } else {
    startQuiz(currentQuizId);
  }
}


// DYNAMIC MATH TRAINERS LOGIC

function switchTrainer(trainerName) {
  activeTrainer = trainerName;
  document.querySelectorAll('.trainer-pane').forEach(el => el.style.display = 'none');
  document.querySelectorAll('#view-trainers .nav-link').forEach(el => el.classList.remove('active'));
  
  if (trainerName === 'alkalinity') {
    document.getElementById('trainer-alkalinity').style.display = 'block';
    document.getElementById('btn-train-alkalinity').classList.add('active');
  } else if (trainerName === 'massbalance') {
    document.getElementById('trainer-massbalance').style.display = 'block';
    document.getElementById('btn-train-massbalance').classList.add('active');
  } else if (trainerName === 'solids') {
    document.getElementById('trainer-solids').style.display = 'block';
    document.getElementById('btn-train-solids').classList.add('active');
  } else if (trainerName === 'hole') {
    document.getElementById('trainer-hole').style.display = 'block';
    document.getElementById('btn-train-hole').classList.add('active');
  }
  
  // Focus first input field in active trainer
  setTimeout(() => {
    const pane = document.getElementById(`trainer-${trainerName}`);
    if (pane) {
      const firstInp = pane.querySelector('input');
      if (firstInp && !firstInp.disabled) {
        firstInp.focus();
      }
    }
  }, 100);
}

// 1. Alkalinity Trainer
function loadAlkalinityPreset() {
  const val = document.getElementById('preset-alkalinity').value;
  if (val === 'random') {
    generateAlkalinityParams();
  } else {
    const entry = CALCULATIONS_DATA.alkalinity.find(x => x.id === val);
    currentAlkalinityData = { Pf: entry.Pf, Mf: entry.Mf };
    document.getElementById('train-alk-pf').innerText = `${entry.Pf} mL`;
    document.getElementById('train-alk-mf').innerText = `${entry.Mf} mL`;
    clearAlkalinityInputs();
  }
}

function generateAlkalinityParams() {
  const Pf = Math.round((Math.random() * 4) * 10) / 10;
  const Mf = Math.round((Pf + Math.random() * 5) * 10) / 10;
  
  currentAlkalinityData = { Pf, Mf };
  
  document.getElementById('train-alk-pf').innerText = `${Pf} mL`;
  document.getElementById('train-alk-mf').innerText = `${Mf} mL`;
  
  clearAlkalinityInputs();
}

function resetAlkalinityInputs() {
  const val = document.getElementById('preset-alkalinity').value;
  if (val === 'random') {
    generateAlkalinityParams();
  } else {
    loadAlkalinityPreset();
  }
}

function clearAlkalinityInputs() {
  document.getElementById('input-alk-oh').value = '';
  document.getElementById('input-alk-co3').value = '';
  document.getElementById('input-alk-hco3').value = '';
  
  document.getElementById('input-alk-oh').className = 'input-field';
  document.getElementById('input-alk-co3').className = 'input-field';
  document.getElementById('input-alk-hco3').className = 'input-field';
  
  document.getElementById('train-alk-explanation').style.display = 'none';
  document.getElementById('btn-alk-check').innerText = "Check Answers";
}

function checkAlkalinityAnswers() {
  const { Pf, Mf } = currentAlkalinityData;
  
  let OH = 0;
  let CO3 = 0;
  let HCO3 = 0;
  let conditionText = "";
  
  if (Pf === 0) {
    OH = 0;
    CO3 = 0;
    HCO3 = 1200 * Mf;
    conditionText = "Pf = 0\n- OH⁻ = 0\n- CO3²⁻ = 0\n- HCO3⁻ = 1200 * Mf";
  } else if (Pf === Mf) {
    OH = 340 * Pf;
    CO3 = 0;
    HCO3 = 0;
    conditionText = "Pf = Mf\n- OH⁻ = 340 * Pf\n- CO3²⁻ = 0\n- HCO3⁻ = 0";
  } else if (2 * Pf === Mf) {
    OH = 0;
    CO3 = 1200 * Pf;
    HCO3 = 0;
    conditionText = "2Pf = Mf\n- OH⁻ = 0\n- CO3²⁻ = 1200 * Pf\n- HCO3⁻ = 0";
  } else if (2 * Pf > Mf) {
    OH = 340 * (2 * Pf - Mf);
    CO3 = 1200 * (Mf - Pf);
    HCO3 = 0;
    conditionText = "2Pf > Mf\n- OH⁻ = 340 * (2*Pf - Mf)\n- CO3²⁻ = 1200 * (Mf - Pf)\n- HCO3⁻ = 0";
  } else if (2 * Pf < Mf) {
    OH = 0;
    CO3 = 1200 * Pf;
    HCO3 = 1200 * (Mf - 2 * Pf);
    conditionText = "2Pf < Mf\n- OH⁻ = 0\n- CO3²⁻ = 1200 * Pf\n- HCO3⁻ = 1200 * (Mf - 2*Pf)";
  }
  
  OH = Math.round(OH);
  CO3 = Math.round(CO3);
  HCO3 = Math.round(HCO3);
  
  const userOH = parseInt(document.getElementById('input-alk-oh').value);
  const userCO3 = parseInt(document.getElementById('input-alk-co3').value);
  const userHCO3 = parseInt(document.getElementById('input-alk-hco3').value);
  
  let allCorrect = true;
  
  const ohEl = document.getElementById('input-alk-oh');
  if (!isNaN(userOH) && userOH === OH) ohEl.className = 'input-field correct';
  else { ohEl.className = 'input-field incorrect'; allCorrect = false; }
  
  const co3El = document.getElementById('input-alk-co3');
  if (!isNaN(userCO3) && userCO3 === CO3) co3El.className = 'input-field correct';
  else { co3El.className = 'input-field incorrect'; allCorrect = false; }
  
  const hco3El = document.getElementById('input-alk-hco3');
  if (!isNaN(userHCO3) && userHCO3 === HCO3) hco3El.className = 'input-field correct';
  else { hco3El.className = 'input-field incorrect'; allCorrect = false; }
  
  stats.simulatorsRun += 1;
  saveStats();
  
  const stepText = `Evaluating results:\nPf = ${Pf} mL, Mf = ${Mf} mL\nCompute 2*Pf = ${Math.round(2*Pf*10)/10} mL\n\nCondition identified: ${conditionText}\n\nNumerical solution:\n- OH⁻ = ${OH} mg/L\n- CO₃²⁻ = ${CO3} mg/L\n- HCO₃⁻ = ${HCO3} mg/L`;
  document.getElementById('train-alk-explanation-text').innerText = stepText;
  document.getElementById('train-alk-explanation').style.display = 'block';
  document.getElementById('btn-alk-check').innerText = "Checked";
}

// 2. Mass Balance Trainer
function loadMassBalancePreset() {
  const val = document.getElementById('preset-massbalance').value;
  if (val === 'random') {
    generateMassBalanceParams();
  } else {
    const entry = CALCULATIONS_DATA.massbalance.find(x => x.id === val);
    currentMassBalanceData = entry;
    
    let desc = "";
    if (entry.id === 'hw9_q24_25') {
      desc = `While maintaining 2900 bbls volume, increase the weight of a 12.0 ppg drilling fluid to 15.0 ppg. (Barite SG 4.2, multiplier 14.72)`;
    } else if (entry.id === 'hw9_q26_27') {
      desc = `905 bbl of 11.4 ppg drilling fluid will be weighted up to 12.9 ppg with barite (no mud dump, volume increases, multiplier 14.7).`;
    } else if (entry.id === 'hw9_q28_29') {
      desc = `Calculate how much water and BARACARB (CaCO3) are required to make 500 bbls of a WBF with a final density of 13.0 ppg. The BARACARB (SG 2.7) comes in 50lb/sack.`;
    } else if (entry.id === 'hw9_q30_32') {
      desc = `Weight up 2200 bbls of 16.5 ppg drilling fluid to 18.0 ppg and maintain exactly 2200 bbls. (Barite SG 4.2, multiplier 14.72)`;
    }
    
    document.getElementById('train-mb-description').innerText = desc;
    document.getElementById('train-mb-vol').innerText = `${entry.V || entry.V2 || entry.V1} bbl`;
    document.getElementById('train-mb-w1').innerText = entry.W1 ? `${entry.W1} ppg` : "--";
    document.getElementById('train-mb-w2').innerText = `${entry.W2} ppg`;
    
    renderMassBalanceInputsForCase(entry.caseType);
    clearMassBalanceInputs();
  }
}

function generateMassBalanceParams() {
  const cases = ['constant_volume', 'weight_up_only', 'build_from_scratch_baracarb'];
  const caseType = cases[Math.floor(Math.random() * cases.length)];
  
  let V = 0, W1 = 0, W2 = 0, desc = "";
  
  if (caseType === 'constant_volume') {
    V = Math.round(1500 + Math.random() * 1500);
    W1 = Math.round((10 + Math.random() * 4) * 10) / 10;
    W2 = Math.round((W1 + 1 + Math.random() * 3) * 10) / 10;
    
    desc = `Increase the density of a ${V} bbl drilling fluid system from ${W1} ppg to ${W2} ppg with barite (SG 4.2), maintaining the final volume exactly at ${V} bbl.`;
  } else if (caseType === 'weight_up_only') {
    V = Math.round(500 + Math.random() * 1000);
    W1 = Math.round((9 + Math.random() * 4) * 10) / 10;
    W2 = Math.round((W1 + 1 + Math.random() * 2) * 10) / 10;
    
    desc = `Weight up ${V} bbl of ${W1} ppg drilling fluid to ${W2} ppg with barite (SG 4.2, no mud dump, volume increases). Calculate sacks needed and final volume.`;
  } else if (caseType === 'build_from_scratch_baracarb') {
    V = Math.round(200 + Math.random() * 600);
    W2 = Math.round((11 + Math.random() * 3) * 10) / 10;
    
    desc = `Calculate how much fresh water and sacks of BARACARB (CaCO3, SG 2.7, 50 lb/sk) are required to build ${V} bbl of a WBF with a final density of ${W2} ppg.`;
  }
  
  currentMassBalanceData = { caseType, V, W1, W2 };
  
  document.getElementById('train-mb-description').innerText = desc;
  document.getElementById('train-mb-vol').innerText = `${V} bbl`;
  document.getElementById('train-mb-w1').innerText = W1 > 0 ? `${W1} ppg` : "--";
  document.getElementById('train-mb-w2').innerText = `${W2} ppg`;
  
  renderMassBalanceInputsForCase(caseType);
  clearMassBalanceInputs();
}

function renderMassBalanceInputsForCase(caseType) {
  let inputsHTML = "";
  if (caseType === 'constant_volume') {
    inputsHTML = `
      <div class="input-group">
        <label class="input-label" for="input-mb-sacks">Sacks of Barite (100 lb/sk)</label>
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks..." inputmode="decimal" pattern="[0-9.]*">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-dump">Volume of mud to dump (bbl)</label>
        <input type="number" step="0.01" id="input-mb-dump" class="input-field" placeholder="bbl..." inputmode="decimal" pattern="[0-9.]*">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-keep">Original volume to keep (bbl)</label>
        <input type="number" step="0.01" id="input-mb-keep" class="input-field" placeholder="bbl..." inputmode="decimal" pattern="[0-9.]*">
      </div>
    `;
  } else if (caseType === 'weight_up_only') {
    inputsHTML = `
      <div class="input-group">
        <label class="input-label" for="input-mb-sacks">Sacks of Barite (100 lb/sk)</label>
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks..." inputmode="decimal" pattern="[0-9.]*">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-vfinal">Final Volume obtained (bbl)</label>
        <input type="number" step="0.01" id="input-mb-vfinal" class="input-field" placeholder="bbl..." inputmode="decimal" pattern="[0-9.]*">
      </div>
    `;
  } else if (caseType === 'build_from_scratch_baracarb') {
    inputsHTML = `
      <div class="input-group">
        <label class="input-label" for="input-mb-water">Volume of fresh water needed (bbl)</label>
        <input type="number" step="0.01" id="input-mb-water" class="input-field" placeholder="bbl..." inputmode="decimal" pattern="[0-9.]*">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-sacks">Sacks of BARACARB (50 lb/sk)</label>
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks..." inputmode="decimal" pattern="[0-9.]*">
      </div>
    `;
  }
  document.getElementById('train-mb-inputs-container').innerHTML = inputsHTML;
}

function resetMassBalanceInputs() {
  const val = document.getElementById('preset-massbalance').value;
  if (val === 'random') {
    generateMassBalanceParams();
  } else {
    loadMassBalancePreset();
  }
}

function clearMassBalanceInputs() {
  const fields = ['sacks', 'dump', 'keep', 'vfinal', 'water'];
  fields.forEach(f => {
    const el = document.getElementById(`input-mb-${f}`);
    if (el) {
      el.value = '';
      el.className = 'input-field';
    }
  });
  document.getElementById('train-mb-explanation').style.display = 'none';
  document.getElementById('btn-mb-check').innerText = "Check Answers";
}

function checkMassBalanceAnswers() {
  const { caseType, V, W1, W2 } = currentMassBalanceData;
  let explanation = "";
  let isAllCorrect = true;
  
  if (caseType === 'constant_volume') {
    const V_keep = Math.round((V * (35.05 - W2) / (35.05 - W1)) * 100) / 100;
    const V_dump = Math.round((V - V_keep) * 100) / 100;
    const sacks = Math.round(14.72 * V_keep * (W2 - W1) / (35.05 - W2));
    
    const userSacks = parseInt(document.getElementById('input-mb-sacks').value);
    const userDump = parseFloat(document.getElementById('input-mb-dump').value);
    const userKeep = parseFloat(document.getElementById('input-mb-keep').value);
    
    const skEl = document.getElementById('input-mb-sacks');
    if (!isNaN(userSacks) && Math.abs(userSacks - sacks) <= 5) skEl.className = 'input-field correct';
    else { skEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    const dpEl = document.getElementById('input-mb-dump');
    if (!isNaN(userDump) && Math.abs(userDump - V_dump) <= 0.5) dpEl.className = 'input-field correct';
    else { dpEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    const kpEl = document.getElementById('input-mb-keep');
    if (!isNaN(userKeep) && Math.abs(userKeep - V_keep) <= 0.5) kpEl.className = 'input-field correct';
    else { kpEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    explanation = `1) Mud volume to keep in pits:\n   V_keep = V_final * (35.05 - W2) / (35.05 - W1)\n   V_keep = ${V} * (35.05 - ${W2}) / (35.05 - ${W1}) = ${V_keep} bbl.\n2) Mud volume to dump:\n   V_dump = ${V} - ${V_keep} = ${V_dump} bbl.\n3) Sacks of barite needed (100 lb/sk):\n   Sacks = 14.72 * V_keep * (W2 - W1) / (35.05 - W2) = ${sacks} sacks.`;
    
  } else if (caseType === 'weight_up_only') {
    const sacks = Math.round(14.7 * V * (W2 - W1) / (35 - W2));
    const V2 = Math.round((V * (35.05 - W1) / (35.05 - W2)) * 100) / 100;
    
    const userSacks = parseInt(document.getElementById('input-mb-sacks').value);
    const userVfinal = parseFloat(document.getElementById('input-mb-vfinal').value);
    
    const skEl = document.getElementById('input-mb-sacks');
    if (!isNaN(userSacks) && Math.abs(userSacks - sacks) <= 5) skEl.className = 'input-field correct';
    else { skEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    const vfEl = document.getElementById('input-mb-vfinal');
    if (!isNaN(userVfinal) && Math.abs(userVfinal - V2) <= 0.5) vfEl.className = 'input-field correct';
    else { vfEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    explanation = `1) Sacks of barite needed (field formula):\n   Sacks = 14.7 * V1 * (W2 - W1) / (35 - W2) = ${sacks} sacks.\n2) Final volume obtained (barite SG 4.2):\n   V2 = V1 * (35.05 - W1) / (35.05 - W2) = ${V2} bbl.`;
    
  } else if (caseType === 'build_from_scratch_baracarb') {
    const V_water = Math.round((V * 42 * (22.53 - W2) / (42 * (22.53 - 8.345))) * 100) / 100;
    const V_baracarb = V - V_water;
    const sacks = Math.round((V_baracarb * 42 * 22.53 / 50));
    
    const userWater = parseFloat(document.getElementById('input-mb-water').value);
    const userSacks = parseInt(document.getElementById('input-mb-sacks').value);
    
    const wtEl = document.getElementById('input-mb-water');
    if (!isNaN(userWater) && Math.abs(userWater - V_water) <= 0.5) wtEl.className = 'input-field correct';
    else { wtEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    const skEl = document.getElementById('input-mb-sacks');
    if (!isNaN(userSacks) && Math.abs(userSacks - sacks) <= 5) skEl.className = 'input-field correct';
    else { skEl.className = 'input-field incorrect'; isAllCorrect = false; }
    
    explanation = `1) CaCO3 (BARACARB) density = 2.7 * 8.345 = 22.53 ppg.\n2) Volume of fresh water required:\n   V_water = V_final * (22.53 - W2) / (22.53 - 8.345) = ${V_water} bbl.\n3) Volume occupied by BARACARB:\n   V_baracarb = ${V} - ${V_water} = ${Math.round(V_baracarb*100)/100} bbl.\n4) Sacks of BARACARB needed (50 lb/sk):\n   Sacks = (V_baracarb * 42 * 22.53) / 50 = ${sacks} sacks.`;
  }
  
  stats.simulatorsRun += 1;
  saveStats();
  
  document.getElementById('train-mb-explanation-text').innerText = explanation;
  document.getElementById('train-mb-explanation').style.display = 'block';
  document.getElementById('btn-mb-check').innerText = "Checked";
}

// 3. Solids Analysis Trainer
function loadSolidsPreset() {
  const val = document.getElementById('preset-solids').value;
  if (val === 'random') {
    generateSolidsParams();
  } else {
    const entry = CALCULATIONS_DATA.solids.find(x => x.id === val);
    currentSolidsData = entry;
    
    document.getElementById('train-sol-water').innerText = `${entry.water_pct}%`;
    document.getElementById('train-sol-oil').innerText = `${entry.oil_pct}%`;
    document.getElementById('train-sol-mw').innerText = `${entry.mw} ppg`;
    document.getElementById('train-sol-cec').innerText = entry.cec;
    
    clearSolidsInputs();
  }
}

function generateSolidsParams() {
  const mw = Math.round((10 + Math.random() * 4) * 10) / 10;
  const water_pct = Math.round((70 + Math.random() * 15) * 10) / 10;
  const oil_pct = Math.round((Math.random() * 3) * 10) / 10;
  const cec = Math.round(3 + Math.random() * 6);
  
  currentSolidsData = { mw, water_pct, oil_pct, cec };
  
  document.getElementById('train-sol-water').innerText = `${water_pct}%`;
  document.getElementById('train-sol-oil').innerText = `${oil_pct}%`;
  document.getElementById('train-sol-mw').innerText = `${mw} ppg`;
  document.getElementById('train-sol-cec').innerText = cec;
  
  clearSolidsInputs();
}

function resetSolidsInputs() {
  const val = document.getElementById('preset-solids').value;
  if (val === 'random') {
    generateSolidsParams();
  } else {
    loadSolidsPreset();
  }
}

function clearSolidsInputs() {
  document.getElementById('input-sol-asg').value = '';
  document.getElementById('input-sol-lgspct').value = '';
  document.getElementById('input-sol-lgsppb').value = '';
  document.getElementById('input-sol-hgspct').value = '';
  document.getElementById('input-sol-hgsppb').value = '';
  document.getElementById('input-sol-drillppb').value = '';
  
  document.querySelectorAll('#trainer-solids .input-field').forEach(el => el.className = 'input-field');
  document.getElementById('train-sol-explanation').style.display = 'none';
  document.getElementById('btn-sol-check').innerText = "Check Answers";
}

function checkSolidsAnswers() {
  const { mw, water_pct, oil_pct, cec } = currentSolidsData;
  
  const solids_pct = Math.round((100 - water_pct - oil_pct) * 100) / 100;
  
  let asg = (100 * mw - (water_pct * 8.345 + oil_pct * 7.0)) / (solids_pct * 8.345);
  asg = Math.round(asg * 1000) / 1000;
  
  let hgs_pct = (solids_pct * (asg - 2.6)) / 1.6;
  hgs_pct = Math.round(hgs_pct * 100) / 100;
  
  let lgs_pct = Math.round((solids_pct - hgs_pct) * 100) / 100;
  let lgs_ppb = Math.round((lgs_pct * 0.01 * 350.49 * 2.6) * 100) / 100;
  let hgs_ppb = Math.round((hgs_pct * 0.01 * 350.49 * 4.2) * 100) / 100;
  let drill_ppb = Math.round((lgs_ppb - (cec * 5)) * 100) / 100;
  
  const uAsg = parseFloat(document.getElementById('input-sol-asg').value);
  const uLgsPct = parseFloat(document.getElementById('input-sol-lgspct').value);
  const uLgsPpb = parseFloat(document.getElementById('input-sol-lgsppb').value);
  const uHgsPct = parseFloat(document.getElementById('input-sol-hgspct').value);
  const uHgsPpb = parseFloat(document.getElementById('input-sol-hgsppb').value);
  const uDrillPpb = parseFloat(document.getElementById('input-sol-drillppb').value);
  
  let isAllCorrect = true;
  
  const asgEl = document.getElementById('input-sol-asg');
  if (!isNaN(uAsg) && Math.abs(uAsg - asg) <= 0.05) asgEl.className = 'input-field correct';
  else { asgEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  const lgspEl = document.getElementById('input-sol-lgspct');
  if (!isNaN(uLgsPct) && Math.abs(uLgsPct - lgs_pct) <= 0.2) lgspEl.className = 'input-field correct';
  else { lgspEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  const lgsbEl = document.getElementById('input-sol-lgsppb');
  if (!isNaN(uLgsPpb) && Math.abs(uLgsPpb - lgs_ppb) <= 0.5) lgsbEl.className = 'input-field correct';
  else { lgsbEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  const hgspEl = document.getElementById('input-sol-hgspct');
  if (!isNaN(uHgsPct) && Math.abs(uHgsPct - hgs_pct) <= 0.2) hgspEl.className = 'input-field correct';
  else { hgspEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  const hgsbEl = document.getElementById('input-sol-hgsppb');
  if (!isNaN(uHgsPpb) && Math.abs(uHgsPpb - hgs_ppb) <= 1.0) hgsbEl.className = 'input-field correct';
  else { hgsbEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  const drbEl = document.getElementById('input-sol-drillppb');
  if (!isNaN(uDrillPpb) && Math.abs(uDrillPpb - drill_ppb) <= 0.5) drbEl.className = 'input-field correct';
  else { drbEl.className = 'input-field incorrect'; isAllCorrect = false; }
  
  stats.simulatorsRun += 1;
  saveStats();
  
  const stepText = `1) %Total Solids = 100 - ${water_pct} - ${oil_pct} = ${solids_pct}%\n2) Average Specific Gravity (ASG):\n   ASG = [100 * ${mw} - (${water_pct} * 8.345 + ${oil_pct} * 7.0)] / (${solids_pct} * 8.345) = ${asg}\n3) High Gravity Solids percentage (%HGS):\n   %HGS = ${solids_pct} * (ASG - 2.6) / 1.6 = ${hgs_pct}%\n4) Low Gravity Solids percentage (%LGS):\n   %LGS = ${solids_pct} - ${hgs_pct} = ${lgs_pct}%\n5) Concentrations in ppb:\n   - LGS ppb = %LGS * 9.1127 * 2.6 = ${lgs_ppb} ppb\n   - HGS ppb = %HGS * 9.1127 * 4.2 = ${hgs_ppb} ppb\n6) Drill solids concentration:\n   Commercial Bentonite = CEC * 5 = ${cec * 5} ppb\n   Drill Solids ppb = LGS ppb - Bentonita = ${lgs_ppb} - ${cec * 5} = ${drill_ppb} ppb.`;
  
  document.getElementById('train-sol-explanation-text').innerText = stepText;
  document.getElementById('train-sol-explanation').style.display = 'block';
  document.getElementById('btn-sol-check').innerText = "Checked";
}

// 4. Hole Volume & Hydraulics Trainer
function loadHolePreset() {
  const val = document.getElementById('preset-hole').value;
  if (val === 'random') {
    generateHoleParams();
  } else {
    const entry = CALCULATIONS_DATA.hole.find(x => x.id === val);
    currentHoleData = entry;
    
    document.getElementById('train-hole-pump').innerText = `${entry.pump_liner}" x ${entry.pump_stroke}" @ ${Math.round(entry.pump_eff*100)}%`;
    document.getElementById('train-hole-spm').innerText = `${entry.spm_pump1} spm / ${entry.spm_pump2} spm`;
    document.getElementById('train-hole-td').innerText = `${entry.TD.toLocaleString()} ft`;
    document.getElementById('train-hole-pit').innerText = `${entry.pit_vol.toLocaleString()} bbl`;
    
    clearHoleInputs();
  }
}

function generateHoleParams() {
  const pump_liner = 6.5;
  const pump_stroke = 12;
  const pump_eff = 0.96;
  const TD = 22000;
  const pit_vol = 1800;
  const spm_pump1 = 58;
  const spm_pump2 = 57;
  
  currentHoleData = { pump_liner, pump_stroke, pump_eff, TD, pit_vol, spm_pump1, spm_pump2 };
  
  document.getElementById('train-hole-pump').innerText = `${pump_liner}" x ${pump_stroke}" @ ${Math.round(pump_eff*100)}%`;
  document.getElementById('train-hole-spm').innerText = `${spm_pump1} spm / ${spm_pump2} spm`;
  document.getElementById('train-hole-td').innerText = `${TD.toLocaleString()} ft`;
  document.getElementById('train-hole-pit').innerText = `${pit_vol.toLocaleString()} bbl`;
  
  clearHoleInputs();
}

function resetHoleInputs() {
  const val = document.getElementById('preset-hole').value;
  if (val === 'random') {
    generateHoleParams();
  } else {
    loadHolePreset();
  }
}

function clearHoleInputs() {
  const fields = [
    'pumpout', 'annvol', 'dpvol', 'circvol',
    'bustk', 'bumin', 'bitstk', 'bitmin', 'totstk', 'totmin'
  ];
  fields.forEach(f => {
    document.getElementById(`input-hole-${f}`).value = '';
    document.getElementById(`input-hole-${f}`).className = 'input-field';
  });
  document.getElementById('train-hole-explanation').style.display = 'none';
  document.getElementById('btn-hole-check').innerText = "Check Answers";
}

function checkHoleAnswers() {
  const pump_out = 0.1183;
  const annular_vol = 837.26;
  const drillstring_vol = 235.69;
  const circulating_vol = 2873.05;
  
  const bottoms_up_strokes = 7078;
  const bottoms_up_min = 62;
  const surface_to_bit_strokes = 1994;
  const surface_to_bit_min = 18;
  const total_strokes = 24287;
  const total_min = 212;
  
  let allCorrect = true;
  const answers = {
    pumpout: pump_out,
    annvol: annular_vol,
    dpvol: drillstring_vol,
    circvol: circulating_vol,
    bustk: bottoms_up_strokes,
    bumin: bottoms_up_min,
    bitstk: surface_to_bit_strokes,
    bitmin: surface_to_bit_min,
    totstk: total_strokes,
    totmin: total_min
  };
  
  Object.keys(answers).forEach(key => {
    const el = document.getElementById(`input-hole-${key}`);
    const val = parseFloat(el.value);
    const correct = answers[key];
    const tol = correct * 0.02;
    
    if (!isNaN(val) && Math.abs(val - correct) <= tol) {
      el.className = 'input-field correct';
    } else {
      el.className = 'input-field incorrect';
      allCorrect = false;
    }
  });
  
  stats.simulatorsRun += 1;
  saveStats();
  
  const stepText = `1) Triplex Pump output:\n   Output = 0.000243 * 6.5² * 12 * 0.96 = 0.1183 bbl/stk\n2) Drill string capacity (DP + DC):\n   - DP 4.5" (ID 3.958", length 9,650 ft) = 9650 * 3.958² / 1029.4 = 146.7 bbl\n   - DP 3.5" (ID 2.9", length 10,350 ft) = 10350 * 2.9² / 1029.4 = 84.5 bbl\n   - DC 3.5" (ID 1.5", length 2,000 ft) = 2000 * 1.5² / 1029.4 = 4.4 bbl\n   - Total capacities = 235.69 bbl\n3) Total annular volume = 837.26 bbl\n4) Circulating volume = Annular (837.26) + String (235.69) + Pits (1800) = 2873.05 bbl\n5) Strokes and times (Total SPM = 58 + 57 = 115 spm):\n   - Bottoms Up: 837.26 / 0.1183 = 7,078 strokes | Time = 62 min\n   - Surface to Bit: 235.69 / 0.1183 = 1,994 strokes | Time = 18 min\n   - Suction to Suction: 2873.05 / 0.1183 = 24,287 strokes | Time = 212 min.`;
  
  document.getElementById('train-hole-explanation-text').innerText = stepText;
  document.getElementById('train-hole-explanation').style.display = 'block';
  document.getElementById('btn-hole-check').innerText = "Checked";
}

// 4. Cheat Sheet Filtering
function filterCheatSheet() {
  const query = document.getElementById('cheat-search').value.toLowerCase();
  
  const prodRows = document.querySelectorAll('#table-products tbody tr');
  prodRows.forEach(row => {
    const text = row.innerText.toLowerCase();
    row.style.display = text.includes(query) ? '' : 'none';
  });
  
  const formulaDivs = document.querySelectorAll('#formula-list > div');
  formulaDivs.forEach(div => {
    const text = div.innerText.toLowerCase();
    div.style.display = text.includes(query) ? '' : 'none';
  });
}

// 5. WBF Contaminants Diagnostics Workspace
let currentContaminantCase = null;
let contaminantCasesOrder = [];
let currentContaminantIndex = 0;
let contaminantsChecked = false;

function startContaminantsSession() {
  const cases = CALCULATIONS_DATA.contaminants;
  if (!cases || cases.length === 0) return;
  
  // Shuffle cases
  contaminantCasesOrder = [...cases].sort(() => Math.random() - 0.5);
  currentContaminantIndex = 0;
  
  loadContaminantIndex(0);
}

function loadContaminantIndex(index) {
  if (!contaminantCasesOrder || contaminantCasesOrder.length === 0) return;
  if (index < 0 || index >= contaminantCasesOrder.length) return;
  
  currentContaminantIndex = index;
  currentContaminantCase = contaminantCasesOrder[index];
  contaminantsChecked = false;
  
  // Update progress text
  const counterEl = document.getElementById('train-cont-counter');
  if (counterEl) {
    counterEl.innerText = `${index + 1} of ${contaminantCasesOrder.length}`;
  }
  
  loadContaminantCase(currentContaminantCase);
}

function loadRandomContaminantCase() {
  startContaminantsSession();
}

function loadContaminantCase(entry) {
  if (!entry) return;

  // Clear inputs
  document.getElementById('input-cont-name').value = '';
  document.getElementById('input-cont-treatment').value = '';
  document.getElementById('input-cont-dosage').value = '';
  document.getElementById('train-cont-explanation').style.display = 'none';

  // Toggle dosage input visibility dynamically
  const dosageGroup = document.getElementById('group-cont-dosage');
  if (entry.answer.dosage > 0) {
    dosageGroup.style.display = 'block';
  } else {
    dosageGroup.style.display = 'none';
  }

  // Update title generically to hide the case name
  document.getElementById('train-cont-title').innerText = "Mud Properties Report (Day 1 vs Day 2)";

  // Update field note
  const noteEl = document.getElementById('train-cont-note');
  if (entry.note) {
    document.getElementById('train-cont-note-text').innerText = entry.note;
    noteEl.style.display = 'block';
  } else {
    noteEl.style.display = 'none';
  }

  // Render properties table (Exactly 3 columns, no color highlighting)
  const tbody = document.getElementById('table-cont-compare-body');
  tbody.innerHTML = '';
  entry.properties.forEach(p => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border-glow)';

    const tdName = document.createElement('td');
    tdName.style.padding = '10px';
    tdName.innerText = p.name;

    const tdDay1 = document.createElement('td');
    tdDay1.style.padding = '10px';
    tdDay1.innerText = p.day1;

    const tdDay2 = document.createElement('td');
    tdDay2.style.padding = '10px';
    tdDay2.innerText = p.day2;

    tr.appendChild(tdName);
    tr.appendChild(tdDay1);
    tr.appendChild(tdDay2);
    tbody.appendChild(tr);
  });

  // Reset input styles and enable them
  const contEl = document.getElementById('input-cont-name');
  const treatEl = document.getElementById('input-cont-treatment');
  const dosageEl = document.getElementById('input-cont-dosage');
  
  contEl.className = 'input-field';
  treatEl.className = 'input-field';
  dosageEl.className = 'input-field';
  
  contEl.disabled = false;
  treatEl.disabled = false;
  dosageEl.disabled = false;

  document.getElementById('btn-cont-check').innerText = 'Check Answers';
}

function resetContaminantsInputs() {
  if (contaminantsChecked) return;
  document.getElementById('input-cont-name').value = '';
  document.getElementById('input-cont-treatment').value = '';
  document.getElementById('input-cont-dosage').value = '';
  document.getElementById('train-cont-explanation').style.display = 'none';
  document.getElementById('input-cont-name').className = 'input-field';
  document.getElementById('input-cont-treatment').className = 'input-field';
  document.getElementById('input-cont-dosage').className = 'input-field';
  document.getElementById('btn-cont-check').innerText = 'Check Answers';
}

function checkContaminantsAnswers() {
  const entry = currentContaminantCase;
  if (!entry) return;

  if (contaminantsChecked) {
    // If already checked, this button click should take us to the next case!
    if (currentContaminantIndex < contaminantCasesOrder.length - 1) {
      loadContaminantIndex(currentContaminantIndex + 1);
    } else {
      // Completed all cases!
      alert("¡Enhorabuena! Has completado los " + contaminantCasesOrder.length + " casos de contaminación.");
      startContaminantsSession(); // Restart session
    }
    return;
  }

  const userCont = document.getElementById('input-cont-name').value;
  const userTreat = document.getElementById('input-cont-treatment').value;
  const userDosageStr = document.getElementById('input-cont-dosage').value;
  const userDosage = parseFloat(userDosageStr);

  let isContCorrect = (userCont === entry.answer.contaminant);
  let isTreatCorrect = (userTreat === entry.answer.treatment);
  let isDosageCorrect = true;

  if (entry.answer.dosage > 0) {
    if (isNaN(userDosage)) {
      isDosageCorrect = false;
    } else {
      isDosageCorrect = (Math.abs(userDosage - entry.answer.dosage) <= 0.01);
    }
  } else {
    isDosageCorrect = (isNaN(userDosage) || userDosage === 0);
  }

  // Update input styles
  const contEl = document.getElementById('input-cont-name');
  const treatEl = document.getElementById('input-cont-treatment');
  const dosageEl = document.getElementById('input-cont-dosage');

  contEl.className = isContCorrect ? 'input-field correct' : 'input-field incorrect';
  treatEl.className = isTreatCorrect ? 'input-field correct' : 'input-field incorrect';
  dosageEl.className = isDosageCorrect ? 'input-field correct' : 'input-field incorrect';

  // Disable inputs so they cannot change after checking
  contEl.disabled = true;
  treatEl.disabled = true;
  dosageEl.disabled = true;

  let allCorrect = isContCorrect && isTreatCorrect && isDosageCorrect;

  // Show detailed explanation
  const expEl = document.getElementById('train-cont-explanation');
  const expTextEl = document.getElementById('train-cont-explanation-text');
  const expTitleEl = document.getElementById('train-cont-explanation-title');
  const badgesEl = document.getElementById('train-cont-summary-badges');

  if (allCorrect) {
    expTitleEl.innerText = `Correct! Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--success)';
  } else {
    expTitleEl.innerText = `Incorrect. Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--error)';
  }

  // Get pretty option labels for memory visual aid
  const getOptionLabel = (selectId, val) => {
    const select = document.getElementById(selectId);
    if (!select) return val;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === val) return select.options[i].text;
    }
    return val;
  };

  const prettyCont = getOptionLabel('input-cont-name', entry.answer.contaminant);
  const prettyTreat = getOptionLabel('input-cont-treatment', entry.answer.treatment);
  const prettyDosage = entry.answer.dosage > 0 ? `${entry.answer.dosage} lb/bbl` : '0 lb/bbl (N/A)';

  // Build the badges HTML (bold & highlighted)
  let badgesHtml = `
    <div style="background: rgba(230,162,60,0.15); border: 1px solid rgba(230,162,60,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #e6a23c; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(230,162,60,0.05);">
      Contaminant: <span style="text-transform: uppercase; color: #f39c12; filter: drop-shadow(0 0 4px rgba(243,156,18,0.2));">${prettyCont}</span>
    </div>
    <div style="background: rgba(103,194,58,0.15); border: 1px solid rgba(103,194,58,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #67c23a; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(103,194,58,0.05);">
      Treatment: <span style="text-transform: uppercase; color: #2ecc71; filter: drop-shadow(0 0 4px rgba(46,204,113,0.2));">${prettyTreat}</span>
    </div>
  `;

  if (entry.answer.dosage > 0) {
    badgesHtml += `
      <div style="background: rgba(64,158,255,0.15); border: 1px solid rgba(64,158,255,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #409eff; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(64,158,255,0.05);">
        Dosage: <span style="text-transform: uppercase; color: #3498db; filter: drop-shadow(0 0 4px rgba(52,152,219,0.2));">${prettyDosage}</span>
      </div>
    `;
  } else {
    badgesHtml += `
      <div style="background: rgba(144,147,153,0.15); border: 1px solid rgba(144,147,153,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #909399; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(144,147,153,0.05);">
        Dosage: <span style="text-transform: uppercase; color: #b2bec3;">${prettyDosage}</span>
      </div>
    `;
  }

  if (badgesEl) {
    badgesEl.innerHTML = badgesHtml;
  }

  expTextEl.innerText = entry.explanation;
  expEl.style.display = 'block';

  // Increment stats
  stats.simulatorsRun += 1;
  saveStats();
  updateDashboardStats();

  contaminantsChecked = true;
  
  // Set button text for next step
  const btn = document.getElementById('btn-cont-check');
  if (currentContaminantIndex < contaminantCasesOrder.length - 1) {
    btn.innerText = "Next Case";
  } else {
    btn.innerText = "Finish Session";
  }
}

// Version check & Update banner logic
function checkUpdates() {
  if (CURRENT_TRAINER_VERSION.startsWith('{{')) {
    console.log('[Trainer Updates] Ejecutando en modo desarrollo. Ignorando chequeo de actualizaciones.');
    return;
  }

  const dismissedVersion = localStorage.getItem('app_dismissed_version');
  const versionUrl = 'https://xavirinaudo.github.io/baroid-core-trainer/version.json';
  
  fetch(`${versionUrl}?t=${Date.now()}`)
    .then(res => {
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    })
    .then(data => {
      if (data.version && data.version !== CURRENT_TRAINER_VERSION && data.version !== dismissedVersion) {
        showUpdateBanner(data);
      }
    })
    .catch(err => console.warn('[Trainer Updates] Error al consultar version.json:', err));
}

// Global functions for update actions so they can be called from inline HTML event handlers
window.dismissUpdate = function(version) {
  localStorage.setItem('app_dismissed_version', version);
  const banner = document.getElementById('update-notification-banner');
  if (banner) {
    banner.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => banner.remove(), 300);
  }
};

window.handleUpdateApp = async function(version) {
  const primaryBtn = document.querySelector('.update-banner-btn-primary');
  if (primaryBtn) {
    primaryBtn.innerText = 'Actualizando...';
    primaryBtn.disabled = true;
  }

  // 1. Guardar la versión en localStorage (opcional, para referencia)
  localStorage.setItem('app_version', version);

  // 2. Limpieza de cachés del navegador (Cache API)
  if ('caches' in window) {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      console.log('[Trainer Updates] Cachés de la Web API eliminadas con éxito.');
    } catch (e) {
      console.error('[Trainer Updates] Error eliminando cachés:', e);
    }
  }

  // 3. Desregistro de Service Workers
  if ('serviceWorker' in navigator) {
    try {
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
        console.log('[Trainer Updates] Service Worker desregistrado.');
      }
    } catch (e) {
      console.error('[Trainer Updates] Error desregistrando Service Workers:', e);
    }
  }

  // 4. Forzar recarga con Cache-Buster en la dirección URL
  const cacheBuster = 'v-update=' + version;
  let cleanUrl = window.location.href;

  if (cleanUrl.includes('v-update=')) {
    cleanUrl = cleanUrl.replace(/[?&]v-update=[^&]+/g, '');
  }

  const separator = cleanUrl.includes('?') ? '&' : '?';
  window.location.href = cleanUrl + separator + cacheBuster;
};

function showUpdateBanner(updateInfo) {
  if (document.getElementById('update-notification-banner')) return;

  const style = document.createElement('style');
  style.id = 'update-banner-styles';
  style.textContent = `
    .update-banner {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(25, 30, 45, 0.95);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(229, 9, 20, 0.5);
      box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.6);
      border-radius: 12px;
      padding: 16px 20px;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 340px;
      color: #fff;
      font-family: 'Inter', sans-serif;
      animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
    .update-banner-title {
      font-weight: 700;
      color: #e50914;
      font-size: 14px;
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .update-banner-text {
      font-size: 13px;
      margin: 0;
      color: rgba(255, 255, 255, 0.95);
      line-height: 1.4;
    }
    .update-banner-notes {
      font-size: 11px;
      background: rgba(255, 255, 255, 0.08);
      border-left: 2px solid #e50914;
      padding: 6px 10px;
      border-radius: 4px;
      color: rgba(255, 255, 255, 0.75);
      max-height: 80px;
      overflow-y: auto;
      margin: 2px 0;
    }
    .update-banner-actions {
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      margin-top: 4px;
    }
    .update-banner-btn {
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
    }
    .update-banner-btn-primary {
      background: #e50914;
      color: #fff;
    }
    .update-banner-btn-primary:hover:not(:disabled) {
      background: #b2070f;
    }
    .update-banner-btn-primary:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    .update-banner-btn-secondary {
      background: transparent;
      color: rgba(255, 255, 255, 0.7);
    }
    .update-banner-btn-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    @keyframes slideIn {
      from { transform: translateY(100px) scale(0.95); opacity: 0; }
      to { transform: translateY(0) scale(1); opacity: 1; }
    }
    @keyframes slideOut {
      from { transform: translateY(0) scale(1); opacity: 1; }
      to { transform: translateY(100px) scale(0.95); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  const banner = document.createElement('div');
  banner.id = 'update-notification-banner';
  banner.className = 'update-banner';
  
  const versionTag = `<span style="font-weight: 700; color: rgba(255,255,255,0.6); font-size: 11px;">[${updateInfo.version}]</span>`;
  const descriptionText = updateInfo.description || 'Hay una nueva versión del simulador disponible.';

  banner.innerHTML = `
    <h4 class="update-banner-title">
      <span>¡Actualización Disponible!</span>
      ${versionTag}
    </h4>
    <p class="update-banner-text">Se han publicado correcciones y mejoras en el simulador.</p>
    <div class="update-banner-notes">
      ${descriptionText}
    </div>
    <div class="update-banner-actions">
      <button class="update-banner-btn update-banner-btn-secondary" onclick="window.dismissUpdate('${updateInfo.version}')">Más tarde</button>
      <button class="update-banner-btn update-banner-btn-primary" onclick="window.handleUpdateApp('${updateInfo.version}')">Actualizar ahora</button>
    </div>
  `;

  document.body.appendChild(banner);
}


// 6. NAF Contaminants Diagnostics Workspace
let currentNafCase = null;
let nafCasesOrder = [];
let currentNafIndex = 0;
let nafChecked = false;

function startNafSession() {
  const cases = CALCULATIONS_DATA.contaminants_naf;
  if (!cases || cases.length === 0) return;
  
  // Shuffle cases
  nafCasesOrder = [...cases].sort(() => Math.random() - 0.5);
  currentNafIndex = 0;
  
  loadNafIndex(0);
}

function loadNafIndex(index) {
  if (!nafCasesOrder || nafCasesOrder.length === 0) return;
  if (index < 0 || index >= nafCasesOrder.length) return;
  
  currentNafIndex = index;
  currentNafCase = nafCasesOrder[index];
  nafChecked = false;
  
  // Update progress text
  const counterEl = document.getElementById('train-cont-naf-counter');
  if (counterEl) {
    counterEl.innerText = `${index + 1} of ${nafCasesOrder.length}`;
  }
  
  loadNafCase(currentNafCase);
}

function loadNafCase(entry) {
  if (!entry) return;

  // Clear inputs
  document.getElementById('input-cont-naf-name').value = '';
  document.getElementById('input-cont-naf-treatment').value = '';
  document.getElementById('train-cont-naf-explanation').style.display = 'none';

  // Update title generically to hide the case name
  document.getElementById('train-cont-naf-title').innerText = "Mud Properties Report (Day 1 vs Day 2)";

  // Update field note (NAF notes hidden to prevent exam help)
  const noteEl = document.getElementById('train-cont-naf-note');
  if (noteEl) {
    noteEl.style.display = 'none';
  }

  // Render properties table (Exactly 3 columns, always show all properties)
  const tbody = document.getElementById('table-cont-naf-compare-body');
  tbody.innerHTML = '';
  entry.properties.forEach(p => {
    const tr = document.createElement('tr');
    tr.style.borderBottom = '1px solid var(--border-glow)';

    const tdName = document.createElement('td');
    tdName.style.padding = '10px';
    tdName.innerText = p.name;

    const tdDay1 = document.createElement('td');
    tdDay1.style.padding = '10px';
    tdDay1.innerText = p.day1;

    const tdDay2 = document.createElement('td');
    tdDay2.style.padding = '10px';
    tdDay2.innerText = p.day2;

    tr.appendChild(tdName);
    tr.appendChild(tdDay1);
    tr.appendChild(tdDay2);
    tbody.appendChild(tr);
  });

  // Reset input styles and enable them
  const contEl = document.getElementById('input-cont-naf-name');
  const treatEl = document.getElementById('input-cont-naf-treatment');
  
  contEl.className = 'input-field';
  treatEl.className = 'input-field';
  
  contEl.disabled = false;
  treatEl.disabled = false;

  document.getElementById('btn-cont-naf-check').innerText = 'Check Answers';
}

function resetNafInputs() {
  if (nafChecked) return;
  document.getElementById('input-cont-naf-name').value = '';
  document.getElementById('input-cont-naf-treatment').value = '';
  document.getElementById('train-cont-naf-explanation').style.display = 'none';
  document.getElementById('input-cont-naf-name').className = 'input-field';
  document.getElementById('input-cont-naf-treatment').className = 'input-field';
  document.getElementById('btn-cont-naf-check').innerText = 'Check Answers';
}

function checkNafAnswers() {
  const entry = currentNafCase;
  if (!entry) return;

  if (nafChecked) {
    // If already checked, this button click should take us to the next case!
    if (currentNafIndex < nafCasesOrder.length - 1) {
      loadNafIndex(currentNafIndex + 1);
    } else {
      // Completed all cases!
      alert("¡Enhorabuena! Has completado los " + nafCasesOrder.length + " casos de contaminación de NAF.");
      startNafSession(); // Restart session
    }
    return;
  }

  const userCont = document.getElementById('input-cont-naf-name').value;
  const userTreat = document.getElementById('input-cont-naf-treatment').value;

  let isContCorrect = (userCont === entry.answer.contaminant);
  let isTreatCorrect = (userTreat === entry.answer.treatment);

  // Update input styles
  const contEl = document.getElementById('input-cont-naf-name');
  const treatEl = document.getElementById('input-cont-naf-treatment');

  contEl.className = isContCorrect ? 'input-field correct' : 'input-field incorrect';
  treatEl.className = isTreatCorrect ? 'input-field correct' : 'input-field incorrect';

  // Disable inputs so they cannot change after checking
  contEl.disabled = true;
  treatEl.disabled = true;

  let allCorrect = isContCorrect && isTreatCorrect;

  // Show detailed explanation
  const expEl = document.getElementById('train-cont-naf-explanation');
  const expTextEl = document.getElementById('train-cont-naf-explanation-text');
  const expTitleEl = document.getElementById('train-cont-naf-explanation-title');
  const badgesEl = document.getElementById('train-cont-naf-summary-badges');

  if (allCorrect) {
    expTitleEl.innerText = `Correct! Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--success)';
  } else {
    expTitleEl.innerText = `Incorrect. Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--error)';
  }

  // Get pretty option labels for memory visual aid
  const getOptionLabel = (selectId, val) => {
    const select = document.getElementById(selectId);
    if (!select) return val;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === val) return select.options[i].text;
    }
    return val;
  };

  const prettyCont = getOptionLabel('input-cont-naf-name', entry.answer.contaminant);
  const prettyTreat = getOptionLabel('input-cont-naf-treatment', entry.answer.treatment);

  // Build the badges HTML (bold & highlighted)
  let badgesHtml = `
    <div style="background: rgba(230,162,60,0.15); border: 1px solid rgba(230,162,60,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #e6a23c; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(230,162,60,0.05);">
      Contaminant: <span style="text-transform: uppercase; color: #f39c12; filter: drop-shadow(0 0 4px rgba(243,156,18,0.2));">${prettyCont}</span>
    </div>
    <div style="background: rgba(103,194,58,0.15); border: 1px solid rgba(103,194,58,0.3); padding: 8px 12px; border-radius: 6px; font-weight: 700; color: #67c23a; font-size: 13px; font-family: 'Outfit', sans-serif; letter-spacing: 0.5px; box-shadow: 0 0 10px rgba(103,194,58,0.05);">
      Treatment: <span style="text-transform: uppercase; color: #2ecc71; filter: drop-shadow(0 0 4px rgba(46,204,113,0.2));">${prettyTreat}</span>
    </div>
  `;

  if (badgesEl) {
    badgesEl.innerHTML = badgesHtml;
  }

  expTextEl.innerText = entry.explanation;
  expEl.style.display = 'block';

  // Increment stats
  stats.simulatorsRun += 1;
  saveStats();
  updateDashboardStats();

  nafChecked = true;
  
  // Set button text for next step
  const btn = document.getElementById('btn-cont-naf-check');
  if (currentNafIndex < nafCasesOrder.length - 1) {
    btn.innerText = "Next Case";
  } else {
    btn.innerText = "Finish Session";
  }
}

// ============================================================
// BAROID PRODUCTS GLOSSARY & SEARCH
// ============================================================
function renderProductCheatSheet() {
  const tbody = document.getElementById('table-products-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  PRODUCTS_DATA.forEach(p => {
    const tr = document.createElement('tr');
    tr.className = 'product-row';
    tr.innerHTML = `
      <td><span class="badge-product">${p.product}</span></td>
      <td style="color: var(--text-muted); font-size: 12px; font-weight: 700; text-transform: uppercase;">${p.category}</td>
      <td style="color: var(--primary); font-size: 13px; font-weight: 600;">${p.function}</td>
      <td style="font-size: 13px; line-height: 1.5; color: var(--text-secondary);">${p.notes}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ============================================================
// ACTIVE ERROR LOG ("CAJA DE ERRORES") LOGIC
// ============================================================
function addToErrorLog(quizId, questionId) {
  if (!quizId || !questionId) return;
  if (!stats.failedQuestions) stats.failedQuestions = [];
  
  const exists = stats.failedQuestions.some(x => x.quizId === quizId && x.questionId === questionId);
  if (!exists) {
    stats.failedQuestions.push({ quizId, questionId });
    saveStats();
    updateErrorLogCounter();
  }
}

function removeFromErrorLog(quizId, questionId) {
  if (!quizId || !questionId) return;
  if (!stats.failedQuestions) return;
  
  const initialLength = stats.failedQuestions.length;
  stats.failedQuestions = stats.failedQuestions.filter(x => !(x.quizId === quizId && x.questionId === questionId));
  if (stats.failedQuestions.length !== initialLength) {
    saveStats();
    updateErrorLogCounter();
  }
}

function updateErrorLogCounter() {
  const count = stats.failedQuestions ? stats.failedQuestions.length : 0;
  
  // Sidebar count badge
  const badge = document.getElementById('nav-error-count');
  if (badge) {
    badge.innerText = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
  
  // Mobile bottom navigation count badge
  const mBadge = document.getElementById('mobile-nav-error-count');
  if (mBadge) {
    mBadge.innerText = count;
    mBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
  
  // Error workspace pending count
  const pendingCountEl = document.getElementById('errors-pending-count');
  if (pendingCountEl) {
    pendingCountEl.innerText = count;
    pendingCountEl.style.color = count > 0 ? 'var(--h-red)' : 'var(--success)';
  }
  
  // Error practice button state
  const btn = document.getElementById('btn-practice-errors');
  if (btn) {
    btn.disabled = count === 0;
  }
}

function updateErrorLogIntro() {
  updateErrorLogCounter();
  
  // Reset container visibilities
  document.getElementById('errors-intro-container').style.display = 'block';
  document.getElementById('errors-practice-container').style.display = 'none';
}

function startErrorPractice() {
  if (!stats.failedQuestions || stats.failedQuestions.length === 0) return;
  
  // Resolve all failed questions from QUIZ_DATA
  currentQuestions = [];
  stats.failedQuestions.forEach(item => {
    const quiz = QUIZ_DATA[item.quizId];
    if (quiz) {
      const q = quiz.questions.find(x => x.id === item.questionId);
      if (q) {
        // Copy question and attach original details so we can remove it on success
        const qCopy = { ...q, originalQuizId: item.quizId };
        currentQuestions.push(qCopy);
      }
    }
  });

  if (currentQuestions.length === 0) {
    alert("No failed questions could be loaded from database.");
    return;
  }

  // Shuffle errors so they practice in random order
  currentQuestions.sort(() => Math.random() - 0.5);
  
  currentQuizId = 'errors';
  currentQuestionIndex = 0;
  selectedOptions = [];
  hasCheckedAnswer = false;
  sessionCorrectCount = 0;

  // Switch to quiz view pane
  document.querySelectorAll('.view-pane').forEach(el => el.style.display = 'none');
  document.getElementById('view-quiz').style.display = 'block';
  
  // Highlight Error Log nav link
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  const errLink = document.getElementById('nav-errors');
  if (errLink) errLink.classList.add('active');

  // Update header text
  document.getElementById('page-title').innerText = "Active Error Log Practice";
  document.getElementById('page-subtitle').innerText = "Review and clear your incorrect answers.";
  document.getElementById('quiz-badge-id').innerText = "Errors";

  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('quiz-results-container').style.display = 'none';

  showQuestion(0);
}

// ==========================================
// KEYBOARD SHORTCUTS & INTERACTION CONTROLLER
// ==========================================

window.addEventListener('keydown', (e) => {
  const activeEl = document.activeElement;
  const isInputActive = activeEl && (
    activeEl.tagName === 'INPUT' || 
    activeEl.tagName === 'SELECT' || 
    activeEl.tagName === 'TEXTAREA'
  );
  
  // 1. GLOBAL COMMAND PALETTE: Ctrl + K or Cmd + K
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    toggleCommandPalette();
    return;
  }
  
  // 2. PALETTE IS OPEN: Handle Escape, Arrow Up/Down, Enter
  const palette = document.getElementById('command-palette');
  const isPaletteOpen = palette && palette.style.display !== 'none';
  if (isPaletteOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeCommandPalette();
      return;
    }
    return;
  }
  
  // 3. Math Trainer Verification via Enter Key inside Inputs
  if (isInputActive && e.key === 'Enter') {
    const inputId = activeEl.id || '';
    if (inputId.startsWith('input-alk-')) {
      e.preventDefault();
      checkAlkalinityAnswers();
      return;
    } else if (inputId.startsWith('input-mb-')) {
      e.preventDefault();
      checkMassBalanceAnswers();
      return;
    } else if (inputId.startsWith('input-sol-')) {
      e.preventDefault();
      checkSolidsAnswers();
      return;
    } else if (inputId.startsWith('input-hole-')) {
      e.preventDefault();
      checkHoleAnswers();
      return;
    } else if (inputId.startsWith('input-cont-') || inputId.startsWith('select-cont-')) {
      e.preventDefault();
      checkContaminantsAnswers();
      return;
    }
  }

  // If typing in any input field (like simulator fields), do not trigger quiz shortcuts
  if (isInputActive) {
    return;
  }
  
  // 4. QUIZ PANELS SHORTCUTS
  const quizView = document.getElementById('view-quiz');
  const isQuizVisible = quizView && quizView.style.display !== 'none';
  
  if (isQuizVisible) {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;
    
    // Select Option (A, B, C, D / 1, 2, 3, 4)
    if (!hasCheckedAnswer && (q.type === 'single' || q.type === 'multiple')) {
      const keyStr = e.key.toLowerCase();
      let optionIdx = -1;
      
      if (['1', '2', '3', '4', '5', '6'].includes(keyStr)) {
        optionIdx = parseInt(keyStr) - 1;
      } else if (['a', 'b', 'c', 'd', 'e', 'f'].includes(keyStr)) {
        optionIdx = keyStr.charCodeAt(0) - 97; // 'a' code is 97
      }
      
      if (optionIdx >= 0 && q.shuffledOptions && optionIdx < q.shuffledOptions.length) {
        e.preventDefault();
        const optVal = q.shuffledOptions[optionIdx].value;
        selectOption(optVal);
        return;
      }
    }
    
    // Action: Space or Enter (Submit / Next)
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      quizActionSubmit();
      return;
    }
    
    // Prev question: ArrowLeft or P/p
    if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'p') {
      e.preventDefault();
      quizPrevQuestion();
      return;
    }
    
    // Next/Skip: ArrowRight or S/s
    if (e.key === 'ArrowRight' || e.key.toLowerCase() === 's') {
      e.preventDefault();
      quizSkipQuestion();
      return;
    }
    
    // Retry question: R/r
    if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      quizRetryQuestion();
      return;
    }
  }
});

// ==========================================
// COMMAND PALETTE MODULE IMPLEMENTATION
// ==========================================

const COMMAND_PALETTE_ITEMS = [
  { name: "Learning Dashboard", target: "dashboard", category: "General", keywords: "inicio dashboard score stats" },
  { name: "Active Error Log", target: "errors", category: "General", keywords: "log errors fallas incorrectas" },
  { name: "Homework 5: Solids Control & Waste", target: "hw5", category: "Solids Control & Waste", keywords: "hw5 theory solids control waste hierarchy separation low high gravity lgs hgs" },
  { name: "Homework 6: Solids Control Equipment", target: "hw6", category: "Solids Control Equipment", keywords: "hw6 theory shakers screens mesh api conductance conveyance feed pumps" },
  { name: "Homework 7: Centrifuges & Dryers", target: "hw7", category: "Solids Control Equipment", keywords: "hw7 theory centrifuges vertical cuttings dryers dewatering coagulants flocculants dilution math calculations economics" },

  { name: "Homework 8: Alkalinity & pH", target: "hw8", category: "Water-Based Fluids", keywords: "hw8 theory alkalinity ph titration pm pf mf" },
  { name: "Homework 9: Clays & Polymers", target: "hw9", category: "Water-Based Fluids", keywords: "hw9 theory clays chemistry bentonite polymers" },
  { name: "Homework 11: Fluid Contaminants", target: "hw11", category: "Water-Based Fluids", keywords: "hw11 contaminants calcium cement salt treatment" },
  { name: "Contaminants WBM Diagnostics", target: "contaminants", category: "Water-Based Fluids", keywords: "contaminants wbm day 1 day 2 check" },
  
  { name: "Homework 13: Non-Aqueous Fluids", target: "hw13", category: "Non-Aqueous Fluids", keywords: "hw13 naf ief emulsion retort waste base oil" },
  { name: "Homework 14: WPS & Solids", target: "hw14", category: "Non-Aqueous Fluids", keywords: "hw14 wps salinity salts lime solids" },
  { name: "Homework 15: NAF Formulations", target: "hw15", category: "Non-Aqueous Fluids", keywords: "hw15 formulations mixing sequence invermul geltone" },
  { name: "Homework 16: OWR & Salinity Adjustments", target: "hw16", category: "Non-Aqueous Fluids", keywords: "hw16 owr adjustment build water phase salinity density" },
  { name: "Homework 17: NAF Contaminants", target: "hw17", category: "Non-Aqueous Fluids", keywords: "hw17 naf contaminants water cement solids treatment" },
  { name: "Contaminants NAF Diagnostics", target: "contaminants-naf", category: "Non-Aqueous Fluids", keywords: "contaminants naf day 1 day 2 check" },
  
  { name: "Homework 12: Drilling Hydraulics", target: "hw12", category: "Engineering & Hydraulics", keywords: "hw12 hydraulics rheology shear rates flow regimes" },
  { name: "Homework 21: Hole Cleaning & Sweeps", target: "hw21", category: "Engineering & Hydraulics", keywords: "hw21 hole cleaning transport sweeps mud density speed" },
  { name: "Homework 22: Pore Pressures & Stuck Pipe", target: "hw22", category: "Engineering & Hydraulics", keywords: "hw22 pore pressure stuck pipe casing spacer hydraulics" },
  
  { name: "Homework 18: Formation Damage & Reservoirs", target: "hw18", category: "Reservoir & Completion", keywords: "hw18 reservoirs formation damage skin completion drill-in" },
  { name: "Homework 19: Wellbore Displacements & Brines", target: "hw19", category: "Reservoir & Completion", keywords: "hw19 displacements brines completion fluids displacement" },
  { name: "Homework 20: Breakers & Packer Fluids", target: "hw20", category: "Reservoir & Completion", keywords: "hw20 breakers filter cake packers completion applications" },
  
  { name: "Video Quiz: Completion Fluids", target: "vcf", category: "Video Quizzes", keywords: "vcf video completion fluids hydrate brine selection ppe" },
  { name: "Video Quiz: Formation Damage", target: "vfd", category: "Video Quizzes", keywords: "vfd video formation damage skin clay swelling scaling" },
  { name: "Video Quiz: Hole Cleaning", target: "vhc", category: "Video Quizzes", keywords: "vhc video hole cleaning sweeps AV slip velocity" },
  { name: "Video Quiz: Pills & Displacement", target: "vpd", category: "Video Quizzes", keywords: "vpd video pills displacement sweep pills cfg modeling" },
  
  { name: "Baroid Business Processes", target: "bp", category: "Tools & References", keywords: "bp business processes mainstays value proposition hard stops black book" },
  { name: "Math Practice Simulators", target: "trainers", category: "Tools & References", keywords: "trainers math simulators calculations alkalinity mass balance solids capacity wellbore" },
  { name: "Cheat Sheet & Glossary", target: "cheatsheet", category: "Tools & References", keywords: "cheatsheet glossary products formulas terms definitions" }
];

let selectedCommandIndex = 0;
let filteredCommandItems = [];

function toggleCommandPalette() {
  const palette = document.getElementById('command-palette');
  if (!palette) return;
  
  if (palette.style.display === 'none') {
    palette.style.display = 'flex';
    const input = document.getElementById('cmd-palette-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 50);
    }
    selectedCommandIndex = 0;
    filterCommandPalette();
  } else {
    palette.style.display = 'none';
  }
}

function closeCommandPalette(event) {
  const palette = document.getElementById('command-palette');
  if (palette) {
    palette.style.display = 'none';
  }
}

function filterCommandPalette() {
  const input = document.getElementById('cmd-palette-input');
  const resultsContainer = document.getElementById('cmd-palette-results-list');
  if (!input || !resultsContainer) return;
  
  const query = input.value.trim().toLowerCase();
  
  if (query === '') {
    filteredCommandItems = [...COMMAND_PALETTE_ITEMS];
  } else {
    const terms = query.split(/\s+/);
    filteredCommandItems = COMMAND_PALETTE_ITEMS.filter(item => {
      const matchText = `${item.name} ${item.category} ${item.keywords}`.toLowerCase();
      return terms.every(term => matchText.includes(term));
    });
  }
  
  if (selectedCommandIndex >= filteredCommandItems.length) {
    selectedCommandIndex = Math.max(0, filteredCommandItems.length - 1);
  }
  
  renderCommandPaletteResults();
}

function renderCommandPaletteResults() {
  const resultsContainer = document.getElementById('cmd-palette-results-list');
  if (!resultsContainer) return;
  
  resultsContainer.innerHTML = '';
  
  if (filteredCommandItems.length === 0) {
    resultsContainer.innerHTML = `<div style="padding:16px;text-align:center;color:var(--text-muted);font-size:14px;">No matching sections found.</div>`;
    return;
  }
  
  filteredCommandItems.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = `cmd-item ${idx === selectedCommandIndex ? 'selected' : ''}`;
    div.onclick = () => selectCommandItem(item);
    
    let iconSvg = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.707.707M2 12a10 10 0 1120 0 10 10 0 01-20 0z"/></svg>`;
    if (item.category === "General") {
      iconSvg = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`;
    } else if (item.category === "Video Quizzes") {
      iconSvg = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`;
    } else if (item.category.includes("Fluid")) {
      iconSvg = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24" style="width:16px;height:16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>`;
    }
    
    div.innerHTML = `
      ${iconSvg}
      <span>${item.name}</span>
      <span class="cmd-item-category">${item.category}</span>
    `;
    
    if (idx === selectedCommandIndex) {
      setTimeout(() => {
        div.scrollIntoView({ block: 'nearest' });
      }, 10);
    }
    
    resultsContainer.appendChild(div);
  });
}

function handleCommandPaletteKey(e) {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    selectedCommandIndex = (selectedCommandIndex + 1) % filteredCommandItems.length;
    renderCommandPaletteResults();
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    selectedCommandIndex = (selectedCommandIndex - 1 + filteredCommandItems.length) % filteredCommandItems.length;
    renderCommandPaletteResults();
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (filteredCommandItems[selectedCommandIndex]) {
      selectCommandItem(filteredCommandItems[selectedCommandIndex]);
    }
  }
}

function selectCommandItem(item) {
  closeCommandPalette();
  
  if (item.target === 'dashboard' || item.target === 'errors' || item.target === 'bp' || item.target === 'trainers' || item.target === 'cheatsheet') {
    switchTab(item.target);
  } else if (item.target.startsWith('hw') || item.target.startsWith('v') || item.target.startsWith('contaminants')) {
    let quizId = '';
    if (item.target === 'hw5') quizId = 'homework_5';
    else if (item.target === 'hw6') quizId = 'homework_6';
    else if (item.target === 'hw7') quizId = 'homework_7';
    else if (item.target === 'hw8') quizId = 'homework_8';
    else if (item.target === 'hw9') quizId = 'homework_9';
    else if (item.target === 'hw11') quizId = 'homework_11';
    else if (item.target === 'hw12') quizId = 'homework_12';
    else if (item.target === 'hw13') quizId = 'homework_13';
    else if (item.target === 'hw14') quizId = 'homework_14';
    else if (item.target === 'hw15') quizId = 'homework_15';
    else if (item.target === 'hw16') quizId = 'homework_16';
    else if (item.target === 'hw17') quizId = 'homework_17';
    else if (item.target === 'hw18') quizId = 'homework_18';
    else if (item.target === 'hw19') quizId = 'homework_19';
    else if (item.target === 'hw20') quizId = 'homework_20';
    else if (item.target === 'hw21') quizId = 'homework_21';
    else if (item.target === 'hw22') quizId = 'homework_22';
    else if (item.target === 'vcf') quizId = 'video_completions';
    else if (item.target === 'vfd') quizId = 'video_formation_damage';
    else if (item.target === 'vhc') quizId = 'video_hole_cleaning';
    else if (item.target === 'vpd') quizId = 'video_pills_displacement';
    else if (item.target === 'contaminants') quizId = 'contaminants';
    else if (item.target === 'contaminants-naf') quizId = 'contaminants-naf';
    
    if (quizId) {
      startQuiz(quizId);
    }
  }
}

// ==========================================
// MOBILE DRAWER MENU LOGIC
// ==========================================
function toggleMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('mobile-sidebar-overlay');
  
  if (sidebar && overlay) {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('active');
  }
}

function closeMobileSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.getElementById('mobile-sidebar-overlay');
  
  if (sidebar && overlay) {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('active');
  }
}
