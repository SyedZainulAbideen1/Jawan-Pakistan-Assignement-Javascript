let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
  if (timerInterval) return;

  startTime = Date.now() - elapsedTime;

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
}

function updateDisplay() {
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

  document.getElementById("display").innerText =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0");
}