const APP_KEY = 'arabicfast_v1';
let currentTab = 'quran';

function getState() {
  const def = { score: 0, completed: [], quizScores: {} };
  try { const s = JSON.parse(localStorage.getItem(APP_KEY)); return s ? { ...def, ...s } : def; }
  catch { return def; }
}
function saveState(s) { localStorage.setItem(APP_KEY, JSON.stringify(s)); }

// ===== RENDER TREE =====
function renderTree() {
  const state = getState();
  const data = ROADMAPS[currentTab];
  const tree = document.getElementById('tree');
  let html = '';

  data.sections.forEach(sec => {
    // Section header
    html += `<div class="tree-section"><span class="tree-section-label">${sec.title}</span></div>`;

    // Group nodes into rows
    sec.rows.forEach(row => {
      if (row.center) {
        // Center-only node
        const n = row.center;
        const done = state.completed.includes(n.id);
        html += `<div class="tree-center-node">
          <div class="tree-node" onclick="openNode('${n.id}')">
            ${done ? '<span class="n-check done">✓</span>' : '<span class="n-check">▶</span>'}
            <div class="n-title">${n.titleTh}</div>
            <div class="n-ar">${n.titleAr}</div>
          </div>
        </div>`;
      } else {
        // Left / Right row
        html += `<div class="tree-row">`;
        html += `<div class="tree-left">`;
        (row.left || []).forEach(n => {
          const done = state.completed.includes(n.id);
          html += `<div class="tree-node" onclick="openNode('${n.id}')">
            ${done ? '<span class="n-check done">✓</span>' : '<span class="n-check">▶</span>'}
            <div class="n-title">${n.titleTh}</div>
            <div class="n-ar">${n.titleAr}</div>
          </div>`;
        });
        html += `</div><div class="tree-spine"></div><div class="tree-right">`;
        (row.right || []).forEach(n => {
          const done = state.completed.includes(n.id);
          html += `<div class="tree-node" onclick="openNode('${n.id}')">
            ${done ? '<span class="n-check done">✓</span>' : '<span class="n-check">▶</span>'}
            <div class="n-title">${n.titleTh}</div>
            <div class="n-ar">${n.titleAr}</div>
          </div>`;
        });
        html += `</div></div>`;
      }
    });
  });

  tree.innerHTML = html;
  updateStats();
}

function updateStats() {
  const state = getState();
  const data = ROADMAPS[currentTab];
  const allNodes = [];
  data.sections.forEach(s => s.rows.forEach(r => {
    if (r.center) allNodes.push(r.center);
    (r.left || []).forEach(n => allNodes.push(n));
    (r.right || []).forEach(n => allNodes.push(n));
  }));
  const done = allNodes.filter(n => state.completed.includes(n.id)).length;
  document.getElementById('scoreBadge').textContent = state.score + ' คะแนน';
  document.getElementById('progressBadge').textContent = `${done}/${allNodes.length}`;
}

// ===== TABS =====
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  const data = ROADMAPS[tab];
  document.getElementById('roadmapHeading').textContent = data.heading;
  document.getElementById('roadmapDesc').textContent = data.desc;
  renderTree();
}

// ===== MODAL =====
function findNode(id) {
  for (const tab of Object.values(ROADMAPS)) {
    for (const sec of tab.sections) {
      for (const row of sec.rows) {
        if (row.center && row.center.id === id) return { node: row.center, secTitle: sec.title };
        for (const n of (row.left || [])) { if (n.id === id) return { node: n, secTitle: sec.title }; }
        for (const n of (row.right || [])) { if (n.id === id) return { node: n, secTitle: sec.title }; }
      }
    }
  }
  return null;
}

function openNode(id) {
  const found = findNode(id);
  if (!found) return;
  const { node, secTitle } = found;
  const state = getState();

  document.getElementById('modalHead').innerHTML = `
    <div class="mh-tag">${secTitle}</div>
    <div class="mh-ar">${node.titleAr}</div>
    <div class="mh-th">${node.titleTh}</div>
    ${node.desc ? `<div class="mh-desc">${node.desc}</div>` : ''}`;

  document.getElementById('modalBody').innerHTML = node.content;

  // Quiz
  const qz = document.getElementById('modalQuiz');
  if (node.quiz && node.quiz.length > 0) {
    let qhtml = `<div class="quiz-title">แบบทดสอบ — ${node.titleTh}</div>`;
    node.quiz.forEach((q, qi) => {
      qhtml += `<div class="quiz-q" id="qq-${qi}"><div class="qq-text">${qi+1}. ${q.q}</div>`;
      q.choices.forEach((c, ci) => {
        qhtml += `<label><input type="radio" name="q${qi}" value="${ci}"> ${c}</label>`;
      });
      qhtml += `<div class="qq-feedback" id="qf-${qi}"></div></div>`;
    });
    qz.innerHTML = qhtml;
  } else { qz.innerHTML = ''; }

  // Footer
  const done = state.completed.includes(id);
  document.getElementById('modalFoot').innerHTML = done
    ? `<div class="quiz-result show pass"><span class="qr-score">✓ ผ่านแล้ว (${state.quizScores[id]||0}%)</span><span class="qr-msg">ทำ Quiz ใหม่ได้</span></div><button class="quiz-submit-btn" onclick="submitQuiz('${id}')">ตรวจคำตอบใหม่</button>`
    : `<button class="quiz-submit-btn" onclick="submitQuiz('${id}')">ตรวจคำตอบ</button><div class="quiz-result" id="quizResult"></div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modalScroll').scrollTop = 0;
}

function closeModal() { document.getElementById('modalOverlay').classList.remove('open'); }

function submitQuiz(id) {
  const found = findNode(id);
  if (!found) return;
  const node = found.node;
  let correct = 0;

  node.quiz.forEach((q, qi) => {
    const el = document.getElementById(`qq-${qi}`);
    const sel = document.querySelector(`input[name="q${qi}"]:checked`);
    const val = sel ? parseInt(sel.value) : -1;
    document.querySelectorAll(`input[name="q${qi}"]`).forEach(r => r.disabled = true);
    const fb = document.getElementById(`qf-${qi}`);
    if (val === q.answer) {
      correct++; el.classList.add('correct');
      fb.textContent = '✓ ถูกต้อง!';
    } else {
      el.classList.add('incorrect');
      fb.textContent = '✗ คำตอบที่ถูก: ' + q.choices[q.answer];
    }
  });

  const pct = Math.round((correct / node.quiz.length) * 100);
  const passed = pct >= 60;
  const state = getState();
  const wasDone = state.completed.includes(id);

  if (passed && !wasDone) {
    state.completed.push(id);
    state.score += (node.points || 20);
    state.quizScores[id] = pct;
    saveState(state);
    renderTree();
  } else if (passed && wasDone && pct > (state.quizScores[id] || 0)) {
    state.quizScores[id] = pct;
    saveState(state);
  }

  document.getElementById('modalFoot').innerHTML = `<div class="quiz-result show ${passed?'pass':'fail'}">
    <span class="qr-score">${pct}% (${correct}/${node.quiz.length})</span>
    <span class="qr-msg">${passed ? (wasDone ? 'ทำแล้ว' : `ผ่าน! +${node.points||20} คะแนน`) : 'ยังไม่ผ่าน (ต้อง 60%)'}</span>
    ${!passed ? `<br><button class="retry-btn" onclick="openNode('${id}')">ลองอีกครั้ง</button>` : ''}
  </div>`;
  updateStats();
}

// ===== DARK MODE =====
function toggleTheme() {
  const html = document.documentElement;
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('arabicfast_theme', next);
  document.getElementById('themeToggle').textContent = next === 'dark' ? '☀️' : '🌙';
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  const saved = localStorage.getItem('arabicfast_theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('themeToggle').textContent = saved === 'dark' ? '☀️' : '🌙';
  }

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => switchTab(b.dataset.tab)));

  // Modal
  document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target.id === 'modalOverlay') closeModal(); });
  document.getElementById('modalX').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Theme toggle
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  // Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('รีเซ็ตความก้าวหน้าทั้งหมด?')) { localStorage.removeItem(APP_KEY); location.reload(); }
  });

  switchTab('quran');
});
