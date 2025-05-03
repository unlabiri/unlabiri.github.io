const toggleBtn = document.getElementById('themeToggle');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
});
