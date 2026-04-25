const VOCAB = [
  { s: 'Czasowniki', en: 'to commit a crime', pl: 'popełnić przestępstwo' },
  { s: 'Czasowniki', en: 'to witness something', pl: 'być świadkiem czegoś' },
  { s: 'Czasowniki', en: 'to acquit somebody', pl: 'uniewinnić kogoś' },
  { s: 'Czasowniki', en: 'to prove', pl: 'udowodnić' },
  { s: 'Czasowniki', en: 'to deliberate', pl: 'obradować' },
  { s: 'Czasowniki', en: 'to be charged with', pl: 'być oskarżonym o' },
  { s: 'Czasowniki', en: 'to be found guilty', pl: 'zostać uznanym za winnego' },
  { s: 'Czasowniki', en: 'to be sentenced to prison', pl: 'zostać skazanym na więzienie' },
  { s: 'Czasowniki', en: 'to carry out an investigation', pl: 'przeprowadzić śledztwo' },
  { s: 'Czasowniki', en: 'to refrain from', pl: 'powstrzymać się od' },

  { s: 'Rzeczowniki', en: 'trial', pl: 'proces' },
  { s: 'Rzeczowniki', en: 'courtroom', pl: 'sala sądowa' },
  { s: 'Rzeczowniki', en: 'testimony', pl: 'zeznanie' },
  { s: 'Rzeczowniki', en: 'evidence', pl: 'dowód' },
  { s: 'Rzeczowniki', en: 'verdict', pl: 'werdykt' },
  { s: 'Rzeczowniki', en: 'prosecution', pl: 'oskarżenie' },
  { s: 'Rzeczowniki', en: 'defendant', pl: 'oskarżony' },
  { s: 'Rzeczowniki', en: 'plaintiff', pl: 'powód' },
  { s: 'Rzeczowniki', en: 'bailiff', pl: 'strażnik sądowy' },
  { s: 'Rzeczowniki', en: 'subpoena', pl: 'wezwanie do stawiennictwa' },
  { s: 'Rzeczowniki', en: 'affidavit', pl: 'oświadczenie pod przysięgą' },

  { s: 'Przestępstwa', en: 'shoplifting', pl: 'kradzież sklepowa' },
  { s: 'Przestępstwa', en: 'smuggling', pl: 'przemyt' },
  { s: 'Przestępstwa', en: 'burglary', pl: 'włamanie' },
  { s: 'Przestępstwa', en: 'kidnapping', pl: 'porwanie' },
  { s: 'Przestępstwa', en: 'assailant', pl: 'napastnik' },
  { s: 'Przestępstwa', en: 'suspect', pl: 'podejrzany' },
  { s: 'Przestępstwa', en: 'inmate', pl: 'więzień' },
  { s: 'Przestępstwa', en: 'thug', pl: 'bandyta' },

  { s: 'Phrasal verbs', en: 'to break into', pl: 'włamać się do' },
  { s: 'Phrasal verbs', en: 'to break out of prison', pl: 'uciec z więzienia' },
  { s: 'Phrasal verbs', en: 'to bring in', pl: 'zatrzymać' },
  { s: 'Phrasal verbs', en: 'to tip off', pl: 'dać cynk' },
  { s: 'Phrasal verbs', en: 'to get mixed up with', pl: 'zadawać się z' },
  { s: 'Phrasal verbs', en: 'to get off', pl: 'ujść na sucho' },
  { s: 'Phrasal verbs', en: 'to do time', pl: 'odsiadywać wyrok' },

  { s: 'Idiomy i legalese', en: 'in cold blood', pl: 'z zimną krwią' },
  { s: 'Idiomy i legalese', en: 'wet behind the ears', pl: 'mieć mleko pod nosem' },
  { s: 'Idiomy i legalese', en: 'beyond a shadow of a doubt', pl: 'ponad wszelką wątpliwość' },
  { s: 'Idiomy i legalese', en: 'to pull the wool over someone\'s eyes', pl: 'mydlić komuś oczy' },
  { s: 'Idiomy i legalese', en: 'to throw the book at someone', pl: 'zasądzić najwyższy wymiar kary' },
  { s: 'Idiomy i legalese', en: 'the long arm of the law', pl: 'długie ramię prawa' },
  { s: 'Idiomy i legalese', en: 'quid pro quo', pl: 'coś za coś' },
  { s: 'Idiomy i legalese', en: 'modus operandi', pl: 'sposób działania' },
  { s: 'Idiomy i legalese', en: 'per capita', pl: 'na głowę mieszkańca' },
  { s: 'Idiomy i legalese', en: 'lucrative', pl: 'lukratywny' },
  { s: 'Idiomy i legalese', en: 'grievance', pl: 'skarga' },
  { s: 'Idiomy i legalese', en: 'lawsuit', pl: 'pozew sądowy' },
  { s: 'Idiomy i legalese', en: 'legalese', pl: 'żargon prawniczy' },
  { s: 'Idiomy i legalese', en: 'habeas corpus', pl: 'ochrona przed bezprawnym aresztowaniem' },
  { s: 'Idiomy i legalese', en: 'pro bono', pl: 'dla dobra publicznego' },
].map((item, index) => ({ ...item, id: `v${index + 1}` }));

const FILL_ITEMS = [
  { s: 'Luki', q: 'Uzupełnij: She pulled the ___ over everyone\'s eyes.', a: 'wool', e: 'Idiom: pull the wool over someone\'s eyes.' },
  { s: 'Luki', q: 'Uzupełnij: No one can escape the long ___ of the law.', a: 'arm', e: 'Idiom: the long arm of the law.' },
  { s: 'Luki', q: 'Uzupełnij: They really threw the ___ at him.', a: 'book', e: 'Idiom: throw the book at someone.' },
  { s: 'Luki', q: 'Uzupełnij: Four inmates broke ___ of prison yesterday.', a: 'out', e: 'Phrasal verb: break out of prison.' },
  { s: 'Luki', q: 'Uzupełnij: Authorities believe a gang broke ___ the jewellery store.', a: 'into', e: 'Phrasal verb: break into.' },
  { s: 'Luki', q: 'Uzupełnij: The police brought ___ two suspects for questioning.', a: 'in', e: 'Phrasal verb: bring in.' },
  { s: 'Luki', q: 'Uzupełnij: The defendant stands charged with two ___ of murder.', a: 'counts', e: 'W prawie: count = zarzut.' },
  { s: 'Luki', q: 'Uzupełnij: The defendant pleaded not ___.', a: 'guilty', e: 'Stałe wyrażenie: plead not guilty.' },
  { s: 'Luki', q: 'Uzupełnij: She has already done ___.', a: 'time', e: 'Idiom: do time.' },
  { s: 'Luki', q: 'Uzupełnij: This prosecutor is a little wet behind the ___.', a: 'ears', e: 'Idiom: wet behind the ears.' },
  { s: 'Luki', q: 'Uzupełnij: Beyond a shadow of a ___.', a: 'doubt', e: 'Idiom: beyond a shadow of a doubt.' },
  { s: 'Luki', q: 'Uzupełnij: The jury reached a ___.', a: 'verdict', e: 'jury reaches a verdict.' },
].map((item, index) => ({ ...item, id: `f${index + 1}`, t: 'fill' }));

const SETTINGS = {
  direction: 'mix',
  exercise: 'mc',
  limit: '40',
};

const STORAGE_KEYS = {
  bestPct: 'courtroom_best_pct_v3',
};

let qs = [];
let cur = 0;
let score = 0;
let wrongs = 0;
let res = [];
let answered = false;

function shuffle(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function sample(list, count) {
  return shuffle(list).slice(0, count);
}

function normalizeText(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function setSetting(btn) {
  const { group, value } = btn.dataset;
  SETTINGS[group] = value;
  document.querySelectorAll(`.chip[data-group='${group}']`).forEach(node => node.classList.remove('sel'));
  btn.classList.add('sel');
  refreshHomeStats();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(node => node.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if (id === 'results') document.getElementById(id).scrollTop = 0;
}

function vocabToQuestion(item, direction) {
  const isEnPl = direction === 'enpl';
  return {
    id: `q-${item.id}-${direction}`,
    s: item.s,
    t: isEnPl ? 'enpl' : 'plen',
    q: isEnPl ? item.en : item.pl,
    a: isEnPl ? item.pl : item.en,
    e: `${item.en} = ${item.pl}`,
  };
}

function buildBaseCards() {
  let cards = [];
  if (SETTINGS.exercise === 'fill') {
    cards = [...FILL_ITEMS];
  } else {
    const directions = SETTINGS.direction === 'mix' ? ['enpl', 'plen'] : [SETTINGS.direction];
    VOCAB.forEach(item => {
      if (SETTINGS.direction === 'mix') {
        const picked = Math.random() < 0.5 ? directions[0] : directions[1];
        cards.push(vocabToQuestion(item, picked));
      } else {
        cards.push(vocabToQuestion(item, directions[0]));
      }
    });

    if (SETTINGS.exercise === 'mix') {
      cards = cards.concat(sample(FILL_ITEMS, Math.max(6, Math.floor(cards.length * 0.2))));
    }
  }
  return shuffle(cards);
}

function buildOptions(correctAnswer, cardType) {
  if (cardType === 'fill') return null;
  const pool = VOCAB.map(item => (cardType === 'enpl' ? item.pl : item.en));
  const unique = [...new Set(pool.filter(option => normalizeText(option) !== normalizeText(correctAnswer)))];
  const distractors = sample(unique, 3);
  return shuffle([correctAnswer, ...distractors]);
}

function buildDeck() {
  let base = buildBaseCards();
  const parsedLimit = SETTINGS.limit === 'all' ? base.length : parseInt(SETTINGS.limit, 10);
  base = base.slice(0, Math.min(parsedLimit, base.length));

  return base.map(card => {
    if (SETTINGS.exercise === 'fill' || card.t === 'fill') {
      return {
        ...card,
        kind: 'fill',
        accept: [normalizeText(card.a)],
        badge: { cls: 'tb-fill', label: 'Uzupełnij lukę' },
      };
    }

    const options = buildOptions(card.a, card.t);
    return {
      ...card,
      kind: 'mc',
      o: options,
      aIndex: options.findIndex(option => normalizeText(option) === normalizeText(card.a)),
      badge: { cls: 'tb-mc', label: card.t === 'enpl' ? 'ABCD · EN → PL' : 'ABCD · PL → EN' },
    };
  });
}

function startQuiz() {
  qs = buildDeck();
  cur = 0;
  score = 0;
  wrongs = 0;
  res = [];
  answered = false;
  showScreen('quiz');
  render();
}

function retry() {
  startQuiz();
}

function goHome() {
  refreshHomeStats();
  showScreen('home');
}

function updateTop() {
  const total = qs.length || 1;
  document.getElementById('prog').style.width = `${(cur / total) * 100}%`;
  document.getElementById('qctr').textContent = `${Math.min(cur + 1, total)}/${total}`;
  document.getElementById('sc').textContent = score;
  document.getElementById('wr').textContent = wrongs;
  document.getElementById('sect-pill').textContent = qs[cur] ? qs[cur].s : '';
}

function refreshHomeStats() {
  const best = localStorage.getItem(STORAGE_KEYS.bestPct);
  document.getElementById('total-items').textContent = VOCAB.length + FILL_ITEMS.length;
  document.getElementById('best-score').textContent = best ? `${best}%` : '—';
  const modeText = SETTINGS.exercise === 'mc' ? 'ABCD' : SETTINGS.exercise === 'fill' ? 'LUKI' : 'MIX';
  document.getElementById('mode-view').textContent = modeText;
  const note = SETTINGS.exercise === 'mc'
    ? 'Tryb ABCD: szybka powtórka słówek i fraz.'
    : SETTINGS.exercise === 'fill'
      ? 'Tryb luki: domykasz kluczowe wyrażenia.'
      : 'Tryb mieszany: głównie ABCD + krótka seria luk.';
  document.getElementById('home-note').textContent = note;
  document.getElementById('start-btn').textContent = 'Rozpocznij sesję →';
}

function render() {
  if (cur >= qs.length) {
    showResults();
    return;
  }

  answered = false;
  updateTop();

  const q = qs[cur];
  const body = document.getElementById('qbody');
  const bottom = document.getElementById('qbottom');

  if (q.kind === 'mc') {
    body.innerHTML = `
      <div class='type-badge ${q.badge.cls}'>${q.badge.label}</div>
      <div class='q-card'><div class='q-text'>${q.q}</div><div class='q-dir'>Wybierz poprawne tłumaczenie:</div></div>
      <div class='opts'>${q.o.map((option, index) => `<button class='opt' onclick='choose(${index})' id='o${index}'>${option}</button>`).join('')}</div>
      <div class='feedback' id='fb'></div>`;
    bottom.innerHTML = `<button class='btn-next' id='nav-btn' onclick='nxt()' style='display:none'>${cur < qs.length - 1 ? 'Następne pytanie →' : 'Zobacz wyniki →'}</button>`;
  } else {
    body.innerHTML = `
      <div class='type-badge tb-fill'>Uzupełnij lukę</div>
      <div class='q-card'><div class='q-text' style='font-weight:500'>${q.q}</div><div class='q-dir'>Wpisz brakujące słowo:</div></div>
      <input type='text' class='fill-input' id='fi' placeholder='Twoja odpowiedź...' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'>
      <div class='feedback' id='fb'></div>`;
    bottom.innerHTML = `<button class='btn-check' id='nav-btn' onclick='chkFill()'>Sprawdź</button>`;

    setTimeout(() => {
      const field = document.getElementById('fi');
      if (field) field.focus();
    }, 100);

    document.getElementById('fi').addEventListener('keydown', event => {
      if (event.key === 'Enter') chkFill();
    });
  }

  body.scrollTop = 0;
}

function showFeedback(ok, answer, explanation) {
  const fb = document.getElementById('fb');
  fb.className = `feedback show ${ok ? 'ok' : 'bad'}`;
  fb.innerHTML = ok
    ? `✓ Poprawnie! ${explanation}`
    : `✗ Błąd. Poprawna odpowiedź: <strong>${answer}</strong>. ${explanation}`;
}

function choose(index) {
  if (answered) return;
  answered = true;

  const q = qs[cur];
  q.o.forEach((option, optionIndex) => {
    const button = document.getElementById(`o${optionIndex}`);
    button.disabled = true;
    if (optionIndex === q.aIndex) button.classList.add('reveal');
    if (optionIndex === index && index !== q.aIndex) button.classList.add('wrong');
    if (optionIndex === index && index === q.aIndex) {
      button.classList.remove('reveal');
      button.classList.add('correct');
    }
  });

  const ok = index === q.aIndex;
  if (ok) score += 1;
  else wrongs += 1;

  res.push({ s: q.s, q: q.q, ok, a: q.a });
  document.getElementById('sc').textContent = score;
  document.getElementById('wr').textContent = wrongs;
  showFeedback(ok, q.a, q.e);
  document.getElementById('nav-btn').style.display = 'block';
}

function chkFill() {
  if (answered) return;
  answered = true;

  const q = qs[cur];
  const input = document.getElementById('fi');
  const value = normalizeText(input.value);
  const ok = q.accept.includes(value);

  input.disabled = true;
  input.classList.add(ok ? 'correct' : 'wrong');

  if (ok) score += 1;
  else wrongs += 1;

  res.push({ s: q.s, q: q.q, ok, a: q.a });
  document.getElementById('sc').textContent = score;
  document.getElementById('wr').textContent = wrongs;
  showFeedback(ok, q.a, q.e);

  const button = document.getElementById('nav-btn');
  button.textContent = cur < qs.length - 1 ? 'Następne pytanie →' : 'Zobacz wyniki →';
  button.className = 'btn-next';
  button.onclick = nxt;
}

function nxt() {
  cur += 1;
  render();
}

function showResults() {
  showScreen('results');
  const pct = Math.round((score / (qs.length || 1)) * 100);

  let grade = '2 — Niedostateczny';
  let cls = 'grade-2';
  let trophy = '💪';

  if (pct >= 90) {
    grade = '5 — Celujący';
    cls = 'grade-5';
    trophy = '🏆';
  } else if (pct >= 80) {
    grade = '4+ — Bardzo dobry';
    cls = 'grade-4';
    trophy = '🥈';
  } else if (pct >= 70) {
    grade = '4 — Dobry';
    cls = 'grade-4';
    trophy = '🎯';
  } else if (pct >= 60) {
    grade = '3 — Dostateczny';
    cls = 'grade-3';
    trophy = '📚';
  }

  document.getElementById('trophy').textContent = trophy;
  document.getElementById('res-score').textContent = `${score}/${qs.length}`;
  document.getElementById('res-pct').textContent = `${pct}% poprawnych`;
  document.getElementById('res-grade').textContent = grade;
  document.getElementById('res-grade').className = `res-grade ${cls}`;

  const best = parseInt(localStorage.getItem(STORAGE_KEYS.bestPct) || '0', 10);
  const badge = document.getElementById('best-badge');
  if (pct > best) {
    localStorage.setItem(STORAGE_KEYS.bestPct, pct);
    badge.style.display = 'inline-block';
    document.getElementById('best-score').textContent = `${pct}%`;
  } else {
    badge.style.display = 'none';
  }

  const bySection = {};
  res.forEach(entry => {
    if (!bySection[entry.s]) bySection[entry.s] = [];
    bySection[entry.s].push(entry);
  });

  let html = '';
  Object.entries(bySection).forEach(([section, entries]) => {
    const sectionScore = entries.filter(entry => entry.ok).length;
    html += `<div class='sect-title'><span>${section}</span><span>${sectionScore}/${entries.length}</span></div>`;
    entries.forEach(entry => {
      const shortQ = entry.q.length > 48 ? `${entry.q.slice(0, 48)}…` : entry.q;
      const shortA = entry.a.length > 28 ? `${entry.a.slice(0, 28)}…` : entry.a;
      html += `<div class='res-row'><span class='res-q'>${shortQ}</span><span class='res-a ${entry.ok ? 'ok' : 'bad'}'>${entry.ok ? '✓' : '✗'} ${shortA}</span></div>`;
    });
  });

  document.getElementById('sect-results').innerHTML = html;
  refreshHomeStats();
}

window.addEventListener('load', () => {
  refreshHomeStats();
});

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredPrompt = event;
  setTimeout(() => {
    if (!localStorage.getItem('install_dismissed')) {
      document.getElementById('install-banner').classList.add('show');
    }
  }, 2000);
});

function installApp() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(() => {
    deferredPrompt = null;
    document.getElementById('install-banner').classList.remove('show');
  });
}

function dismissInstall() {
  document.getElementById('install-banner').classList.remove('show');
  localStorage.setItem('install_dismissed', '1');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(reg => {
    reg.update().catch(() => {});
  }).catch(() => {});
}
