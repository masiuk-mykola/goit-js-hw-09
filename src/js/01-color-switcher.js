function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// ==========refs======

const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

const startBtnClickHandler = e => {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stoptBtnClickHandler = e => {
  clearInterval(timerId);
  refs.body.style.backgroundColor = 'transparent';
};

// ==========EventListeners======
refs.start.addEventListener('click', startBtnClickHandler);
refs.stop.addEventListener('click', stoptBtnClickHandler);
