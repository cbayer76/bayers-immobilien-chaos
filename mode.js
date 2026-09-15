'use strict';
(() => {
  const key = 'bayers-immobilien-ansicht';
  const buttons = document.querySelectorAll('[data-mode]');
  function setMode(mode, announce = false) {
    mode = mode === 'standard' ? 'standard' : 'senior';
    document.documentElement.dataset.mode = mode;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.mode === mode)));
    if (announce) document.getElementById('view-status').textContent = mode === 'standard' ? 'Standard-Version aktiviert.' : 'Senioren-Version aktiviert.';
    try { localStorage.setItem(key, mode); } catch { /* Ansicht bleibt auch ohne Browserspeicher nutzbar. */ }
  }
  let saved = 'senior';
  try { saved = localStorage.getItem(key) || saved; } catch { /* Senioren-Version als Voreinstellung. */ }
  setMode(saved);
  buttons.forEach(button => button.addEventListener('click', () => setMode(button.dataset.mode, true)));
})();
