// ===== STATE =====
const APP_KEY = 'studyarabic_v3';

function getState() {
  const def = { score: 0, completed: [], quizScores: {} };
  try {
    const s = JSON.parse(localStorage.getItem(APP_KEY));
    return s ? { ...def, ...s } : def;
  } catch { return def; }
}
function saveState(s) { localStorage.setItem(APP_KEY, JSON.stringify(s)); }

function getLevel(score) {
  let l = LEVELS[0];
  for (const lv of LEVELS) { if (score >= lv.min) l = lv; }
  return l;
}

// ===== RENDER ROADMAP =====
function renderRoadmap() {
  const state = getState();
  const rm = document.getElementById('roadmap');
  let html = '';

  ROADMAP.forEach((sec, si) => {
    html += `<section class="rm-section">`;
    // connector dot
    html += `<div class="rm-connector"><div class="rm-connector-dot"></div></div>`;
    // section header
    html += `<div class="rm-section-header">
      <span class="rm-section-badge"><span class="sec-num">${si + 1}</span>${sec.title}</span>
    </div>`;
    // nodes
    html += `<div class="rm-nodes">`;
    sec.nodes.forEach(node => {
      const done = state.completed.includes(node.id);
      const unlocked = isUnlocked(node, state);
      const cls = done ? 'completed' : unlocked ? 'available' : '';
      const click = (done || unlocked) ? `onclick="openNode('${node.id}')"` : '';

      html += `<div class="rm-node ${cls}" ${click}>`;
      if (done) {
        html += `<div class="node-status"><span class="node-status-icon">✓</span></div>`;
      } else if (unlocked) {
        html += `<div class="node-status"><span class="node-status-icon">▶</span></div>`;
      }
      html += `<div class="node-ar">${node.titleAr}</div>`;
      html += `<div class="node-th">${node.titleTh}</div>`;
      if (!done && !unlocked) html += `<div class="node-lock">🔒</div>`;
      html += `</div>`;
    });
    html += `</div></section>`;
  });

  rm.innerHTML = html;
  updateStats();
}

function isUnlocked(node, state) {
  if (!node.requires || node.requires.length === 0) return true;
  return node.requires.every(r => state.completed.includes(r));
}

// ===== STATS =====
function updateStats() {
  const state = getState();
  const lv = getLevel(state.score);
  const totalNodes = ROADMAP.reduce((a, s) => a + s.nodes.length, 0);

  document.getElementById('levelValue').textContent = lv.id;
  document.getElementById('levelName').textContent = lv.nameTh;
  document.getElementById('scoreValue').textContent = state.score;
  document.getElementById('progressValue').textContent = `${state.completed.length}/${totalNodes}`;
  document.getElementById('progressBar').style.width = `${(state.completed.length / totalNodes) * 100}%`;
}

// ===== MODAL =====
function openNode(nodeId) {
  const node = findNode(nodeId);
  if (!node) return;
  const state = getState();
  const sec = ROADMAP.find(s => s.nodes.some(n => n.id === nodeId));

  // Header
  document.getElementById('modalHeader').innerHTML = `
    <div class="mh-section">${sec ? sec.title : ''}</div>
    <div class="mh-title-ar">${node.titleAr}</div>
    <div class="mh-title-th">${node.titleTh}</div>
    ${node.desc ? `<div class="mh-desc">${node.desc}</div>` : ''}
  `;

  // Body
  document.getElementById('modalBody').innerHTML = node.content;

  // Quiz
  renderQuiz(node);

  // Footer
  const done = state.completed.includes(nodeId);
  document.getElementById('modalFooter').innerHTML = done
    ? `<div class="quiz-result show pass"><span class="qr-score">✓ ผ่านแล้ว (${state.quizScores[nodeId] || 0}%)</span><span class="qr-msg">คุณเรียนบทนี้แล้ว กดลองทำ Quiz ใหม่ได้</span></div><button class="quiz-submit-btn" onclick="submitQuiz('${nodeId}')">ตรวจคำตอบ</button>`
    : `<button class="quiz-submit-btn" onclick="submitQuiz('${nodeId}')">ตรวจคำตอบ</button><div class="quiz-result" id="quizResult"></div>`;

  // Show
  document.getElementById('modalOverlay').classList.add('open');
  document.getElementById('modalScroll').scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function renderQuiz(node) {
  const qz = document.getElementById('modalQuiz');
  if (!node.quiz || node.quiz.length === 0) { qz.innerHTML = ''; return; }

  let html = `<div class="quiz-title">แบบทดสอบ — ${node.titleTh}</div>`;
  node.quiz.forEach((q, qi) => {
    html += `<div class="quiz-q" id="qq-${qi}">
      <div class="qq-text">${qi + 1}. ${q.q}</div>`;
    q.choices.forEach((c, ci) => {
      html += `<label><input type="radio" name="q${qi}" value="${ci}"> ${c}</label>`;
    });
    html += `<div class="qq-feedback" id="qf-${qi}"></div></div>`;
  });
  qz.innerHTML = html;
}

function submitQuiz(nodeId) {
  const node = findNode(nodeId);
  if (!node || !node.quiz) return;

  let correct = 0;
  node.quiz.forEach((q, qi) => {
    const el = document.getElementById(`qq-${qi}`);
    const sel = document.querySelector(`input[name="q${qi}"]:checked`);
    const userVal = sel ? parseInt(sel.value) : -1;
    const fb = document.getElementById(`qf-${qi}`);

    // Disable radios
    document.querySelectorAll(`input[name="q${qi}"]`).forEach(r => r.disabled = true);

    if (userVal === q.answer) {
      correct++;
      el.classList.add('correct');
      fb.textContent = '✓ ถูกต้อง!' + (q.feedback ? ' ' + q.feedback : '');
    } else {
      el.classList.add('incorrect');
      fb.textContent = '✗ ผิด — คำตอบที่ถูก: ' + q.choices[q.answer] + (q.feedback ? ' — ' + q.feedback : '');
    }
  });

  const pct = Math.round((correct / node.quiz.length) * 100);
  const passed = pct >= 60;
  const state = getState();
  const wasDone = state.completed.includes(nodeId);

  if (passed && !wasDone) {
    state.completed.push(nodeId);
    state.score += (node.points || 20);
    state.quizScores[nodeId] = pct;
    saveState(state);

    const oldLv = getLevel(state.score - (node.points || 20));
    const newLv = getLevel(state.score);
    if (newLv.id > oldLv.id) showBadge(newLv);

    renderRoadmap();
  } else if (passed && wasDone && pct > (state.quizScores[nodeId] || 0)) {
    state.quizScores[nodeId] = pct;
    saveState(state);
  }

  // Show result
  const footer = document.getElementById('modalFooter');
  footer.innerHTML = `<div class="quiz-result show ${passed ? 'pass' : 'fail'}">
    <span class="qr-score">${pct}% (${correct}/${node.quiz.length})</span>
    <span class="qr-msg">${passed ? (wasDone ? 'ทำแล้ว คะแนนไม่เพิ่ม' : `ผ่าน! +${node.points || 20} คะแนน`) : 'ยังไม่ผ่าน (ต้อง 60% ขึ้นไป) อ่านบทเรียนอีกครั้ง'}</span>
    ${!passed ? `<br><button class="retry-btn" onclick="openNode('${nodeId}')">ลองอีกครั้ง</button>` : ''}
  </div>`;

  updateStats();
}

function showBadge(lv) {
  document.getElementById('badgePopupIcon').textContent = lv.badge;
  document.getElementById('badgePopupTitle').textContent = `เลื่อนขั้นเป็น ${lv.nameTh}!`;
  document.getElementById('badgePopupDesc').textContent = lv.desc;
  const el = document.getElementById('badgePopup');
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

function findNode(id) {
  for (const s of ROADMAP) {
    const n = s.nodes.find(n => n.id === id);
    if (n) return n;
  }
  return null;
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap();

  // Close modal: click overlay or X
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);

  // Esc key
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // Reset
  document.getElementById('resetBtn').addEventListener('click', () => {
    if (confirm('รีเซ็ตความก้าวหน้าทั้งหมด?')) {
      localStorage.removeItem(APP_KEY);
      location.reload();
    }
  });
});
