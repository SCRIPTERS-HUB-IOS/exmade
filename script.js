function login() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-app').style.display = 'block';
}

function navigate(page) {
  document.querySelector('main').style.display = 'none';
  document.getElementById(page).classList.remove('hidden');
}

function goBack() {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.querySelector('main').style.display = 'block';
}

function openSettings() {
  document.querySelector('main').style.display = 'none';
  document.getElementById('settings').classList.remove('hidden');
}

function setTheme(theme) {
  document.body.className = theme;
}
