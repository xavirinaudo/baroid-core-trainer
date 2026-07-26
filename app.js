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
  hw8_highScore: null,
  hw9_highScore: null,
  bp_highScore: null,
  hw11_highScore: null,
  hw12_highScore: null,
  theme: 'dark'
};

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
  loadStats();
  applyTheme();
  updateDashboardStats();
  switchTab('dashboard');
  
  // Initialize trainers with default parameters
  generateAlkalinityParams();
  generateMassBalanceParams();
  generateSolidsParams();
  generateHoleParams();
  loadRandomContaminantCase();
});

// Load and Save Stats
function loadStats() {
  try {
    const saved = localStorage.getItem('baroid_core_stats');
    if (saved) {
      stats = { ...stats, ...JSON.parse(saved) };
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
  } else if (tabId === 'hw8') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw8').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 8: Alkalinity & pH (Theory)";
    document.getElementById('page-subtitle').innerText = "Practice theory questions about pH, filtrate alkalinity, and ionic calculations.";
    if (currentQuizId !== 'homework_8') startQuiz('homework_8');
  } else if (tabId === 'hw9') {
    document.getElementById('view-quiz').style.display = 'block';
    document.getElementById('nav-hw9').classList.add('active');
    document.getElementById('page-title').innerText = "Homework 9: Chemistry & Clays (Theory)";
    document.getElementById('page-subtitle').innerText = "Clays and polymers theory questions, excluding all calculation items.";
    if (currentQuizId !== 'homework_9') startQuiz('homework_9');
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
  }
}

// Dashboard statistics updating
function updateDashboardStats() {
  document.getElementById('stats-total-answered').innerText = stats.totalAnswered;
  document.getElementById('stats-correct-count').innerText = stats.correctCount;
  document.getElementById('stats-simulators-run').innerText = stats.simulatorsRun;
  
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
  // Shuffle questions randomly
  currentQuestions = [...quizInfo.questions].sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  
  selectedOptions = [];
  hasCheckedAnswer = false;
  sessionCorrectCount = 0;
  
  // Switch to quiz view pane
  document.querySelectorAll('.view-pane').forEach(el => el.style.display = 'none');
  document.getElementById('view-quiz').style.display = 'block';
  
  // Update sidebar active links
  document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
  
  let navId = 'nav-hw8';
  let badgeName = "Homework 8";
  if (quizId === 'homework_9') {
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
  }
  
  const navEl = document.getElementById(navId);
  if (navEl) navEl.classList.add('active');
  
  // Update header text
  document.getElementById('page-title').innerText = quizInfo.title;
  document.getElementById('page-subtitle').innerText = quizInfo.description;
  document.getElementById('quiz-badge-id').innerText = badgeName;
  
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('quiz-results-container').style.display = 'none';
  
  showQuestion(0);
}

function showQuestion(index) {
  currentQuestionIndex = index;
  const q = currentQuestions[index];
  hasCheckedAnswer = false;
  selectedOptions = [];
  
  document.getElementById('quiz-question-counter').innerText = `Question ${index + 1} of ${currentQuestions.length}`;
  document.getElementById('quiz-question-text').innerText = `${q.number}: ${q.question}`;
  
  const list = document.getElementById('quiz-options-list');
  list.innerHTML = '';
  
  if (q.type === 'single' || q.type === 'multiple') {
    const shuffledOpts = [...q.options].sort(() => Math.random() - 0.5);
    shuffledOpts.forEach(opt => {
      const card = document.createElement('div');
      card.className = 'option-card glass glass-hover';
      card.setAttribute('onclick', `selectOption('${opt.value}')`);
      card.id = `opt-${opt.value}`;
      
      const indicator = document.createElement('div');
      indicator.className = q.type === 'single' ? 'option-radio' : 'option-checkbox';
      
      const text = document.createElement('span');
      text.innerText = opt.label;
      
      card.appendChild(indicator);
      card.appendChild(text);
      list.appendChild(card);
    });
    
    document.getElementById('btn-quiz-action').innerText = "Check Answer";
    document.getElementById('btn-quiz-retry').style.display = 'none';
    document.getElementById('btn-quiz-skip').style.display = 'inline-flex';
    document.getElementById('btn-quiz-prev').disabled = index === 0;
    document.getElementById('quiz-explanation-card').style.display = 'none';
  } else if (q.type === 'matching') {
    renderMatchingInputs(q);
  } else if (q.type.startsWith('calculation')) {
    renderCalculationInputs(q);
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
  
  // Shuffled list of all correct values or custom option pool (distractors)
  const allValues = q.options ? q.options : Object.values(q.pairs);
  const shuffledValues = [...allValues].sort(() => Math.random() - 0.5);
  
  // Shuffled list of all keys (shuffled unless keepKeysOrder flag is true)
  const allKeys = Object.keys(q.pairs);
  const shuffledKeys = q.keepKeysOrder ? allKeys : [...allKeys].sort(() => Math.random() - 0.5);
  
  shuffledKeys.forEach(key => {
    // Left side: formula / symbol / step
    const label = document.createElement('div');
    label.style.fontWeight = '600';
    label.style.fontSize = '16px';
    label.innerText = key;
    
    // Right side: dropdown select
    const select = document.createElement('select');
    select.className = 'input-field';
    select.id = `match-select-${key}`;
    select.style.width = '100%';
    
    // Add default empty option
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
    
    const isString = typeof q.answer[key] === 'string';
    group.innerHTML = `
      <label class="input-label" for="calc-ans-${key}">${labelText}</label>
      <input type="${isString ? 'text' : 'number'}" ${isString ? '' : 'step="0.0001"'} id="calc-ans-${key}" class="input-field" placeholder="${isString ? 'e.g. Lime' : 'Enter calculated value...'}">
    `;
    inputGrid.appendChild(group);
  });
  
  container.appendChild(inputGrid);
  list.appendChild(container);
  
  document.getElementById('btn-quiz-action').innerText = "Check Answer";
  document.getElementById('btn-quiz-retry').style.display = 'none';
  document.getElementById('btn-quiz-skip').style.display = 'inline-flex';
  document.getElementById('btn-quiz-prev').disabled = currentQuestionIndex === 0;
  document.getElementById('quiz-explanation-card').style.display = 'none';
}

function selectOption(val) {
  if (hasCheckedAnswer) return;
  const q = currentQuestions[currentQuestionIndex];
  
  if (q.type === 'single') {
    selectedOptions = [val];
    document.querySelectorAll('.option-card').forEach(el => el.classList.remove('selected'));
    document.getElementById(`opt-${val}`).classList.add('selected');
  } else if (q.type === 'multiple') {
    const idx = selectedOptions.indexOf(val);
    if (idx > -1) {
      selectedOptions.splice(idx, 1);
      document.getElementById(`opt-${val}`).classList.remove('selected');
    } else {
      selectedOptions.push(val);
      document.getElementById(`opt-${val}`).classList.add('selected');
    }
  }
}

function quizActionSubmit() {
  const q = currentQuestions[currentQuestionIndex];
  
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
        if (selectEl.value !== '') selectedCount++;
      });
      
      if (selectedCount < Object.keys(q.pairs).length) {
        return alert("Please select a match for all items.");
      }
      
      Object.keys(q.pairs).forEach(key => {
        const selectEl = document.getElementById(`match-select-${key}`);
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
    
    stats.totalAnswered += 1;
    if (isCorrect) {
      stats.correctCount += 1;
      sessionCorrectCount += 1;
    }
    saveStats();
    
    document.getElementById('quiz-explanation-text').innerText = q.explanation;
    document.getElementById('quiz-explanation-card').style.display = 'block';
    
    document.getElementById('btn-quiz-action').innerText = currentQuestionIndex === currentQuestions.length - 1 ? "View Results" : "Next Question";
    document.getElementById('btn-quiz-retry').style.display = isCorrect ? 'none' : 'inline-flex';
    document.getElementById('btn-quiz-skip').style.display = 'none';
    hasCheckedAnswer = true;
    
  } else {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      showQuestion(currentQuestionIndex + 1);
    } else {
      showQuizResults();
    }
  }
}

function quizPrevQuestion() {
  if (currentQuestionIndex > 0) {
    showQuestion(currentQuestionIndex - 1);
  }
}

function quizRetryQuestion() {
  showQuestion(currentQuestionIndex);
}

function quizSkipQuestion() {
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
  
  document.getElementById('quiz-results-summary').innerText = `You answered ${sessionCorrectCount} out of ${currentQuestions.length} questions correctly.`;
  document.getElementById('quiz-results-score').innerText = `${scorePercent}%`;
  
  if (currentQuizId === 'homework_8') {
    if (stats.hw8_highScore === null || scorePercent > stats.hw8_highScore) stats.hw8_highScore = scorePercent;
  } else if (currentQuizId === 'homework_9') {
    if (stats.hw9_highScore === null || scorePercent > stats.hw9_highScore) stats.hw9_highScore = scorePercent;
  } else if (currentQuizId === 'business_processes') {
    if (stats.bp_highScore === null || scorePercent > stats.bp_highScore) stats.bp_highScore = scorePercent;
  } else if (currentQuizId === 'homework_11') {
    if (stats.hw11_highScore === null || scorePercent > stats.hw11_highScore) stats.hw11_highScore = scorePercent;
  } else if (currentQuizId === 'homework_12') {
    if (stats.hw12_highScore === null || scorePercent > stats.hw12_highScore) stats.hw12_highScore = scorePercent;
  }
  saveStats();
}

function restartCurrentQuiz() {
  startQuiz(currentQuizId);
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
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks...">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-dump">Volume of mud to dump (bbl)</label>
        <input type="number" step="0.01" id="input-mb-dump" class="input-field" placeholder="bbl...">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-keep">Original volume to keep (bbl)</label>
        <input type="number" step="0.01" id="input-mb-keep" class="input-field" placeholder="bbl...">
      </div>
    `;
  } else if (caseType === 'weight_up_only') {
    inputsHTML = `
      <div class="input-group">
        <label class="input-label" for="input-mb-sacks">Sacks of Barite (100 lb/sk)</label>
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks...">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-vfinal">Final Volume obtained (bbl)</label>
        <input type="number" step="0.01" id="input-mb-vfinal" class="input-field" placeholder="bbl...">
      </div>
    `;
  } else if (caseType === 'build_from_scratch_baracarb') {
    inputsHTML = `
      <div class="input-group">
        <label class="input-label" for="input-mb-water">Volume of fresh water needed (bbl)</label>
        <input type="number" step="0.01" id="input-mb-water" class="input-field" placeholder="bbl...">
      </div>
      <div class="input-group">
        <label class="input-label" for="input-mb-sacks">Sacks of BARACARB (50 lb/sk)</label>
        <input type="number" id="input-mb-sacks" class="input-field" placeholder="Sacks...">
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

  if (allCorrect) {
    expTitleEl.innerText = `Correct! Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--success)';
  } else {
    expTitleEl.innerText = `Incorrect. Solution & Chemistry (This was ${entry.name}):`;
    expTitleEl.style.color = 'var(--error)';
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
