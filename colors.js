// get the system theme media query and localStorage theme
let systemIsDark = window.matchMedia('(prefers-color-scheme: dark)');
let theme = localStorage.getItem('mbz-color-mode');

// set color model to dark mode
function darkMode() {
  document.documentElement.setAttribute('theme', 'dark');
  localStorage.setItem('mbz-color-mode', 'dark');
}

// set color mode to light mode
function lightMode() {
  document.documentElement.setAttribute('theme', 'light');
  localStorage.setItem('mbz-color-mode', 'light');
}

// default color mode on reload
if (theme === 'dark') {
  darkMode();
} else if (theme === 'light') {
  lightMode();
} else if (systemIsDark.matches) {
  darkMode();
} else {
  lightMode();
}

// toggle the color mode
function toggleColorMode() {
  let theme = localStorage.getItem('mbz-color-mode');

  if (theme === 'dark') {
    lightMode();
  } else if (theme === 'light') {
    darkMode();
  } else if (systemIsDark.matches) {
    lightMode();
  } else {
    darkMode();
  }
}

toggles = document.getElementsByClassName('color-mode-toggle');
for (var i = 0; i < toggles.length; i++) {
  toggles[i].onclick = toggleColorMode;
}
Mousetrap.bind(['c'], toggleColorMode);
