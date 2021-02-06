let mode = localStorage.getItem('mbz-view-mode');
md8 = document.querySelectorAll('.col-md-8');

text_mode_button = document.querySelector('#text-mode-toggle');

function setTextMode() {
  text_mode_button.innerHTML = 'Image Mode';
  document.documentElement.setAttribute('mode', 'text');
  localStorage.setItem('mbz-view-mode', 'text');
  for (var i = 0; i < md8.length; i++) {
    md8[i].classList.remove('col-md-8');
  }
}

function setImageMode() {
  text_mode_button.innerHTML = 'Text Mode';
  document.documentElement.setAttribute('mode', 'image');
  localStorage.setItem('mbz-view-mode', 'image');
  for (var i = 0; i < md8.length; i++) {
    md8[i].classList.add('col-md-8');
  }
}

if (mode === 'image') {
  setImageMode();
} else if (mode === 'text') {
  setTextMode();
} else {
  setImageMode();
}

function toggleTextMode() {
  let mode = localStorage.getItem('mbz-view-mode');
  if (mode === 'text') {
    setImageMode();
  } else if (mode === 'image') {
    setTextMode();
  } else {
    setImageMode();
  }
}

text_mode_button.onclick = toggleTextMode;
Mousetrap.bind(['i'], toggleTextMode);
