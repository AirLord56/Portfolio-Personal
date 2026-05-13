const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

function setTheme(theme) {
  if (theme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    themeIcon.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  setTheme('light');
}

themeToggle.addEventListener('click', function() {
  if (body.classList.contains('light-mode')) {
    setTheme('dark');
  } else {
    setTheme('light');
  }
});