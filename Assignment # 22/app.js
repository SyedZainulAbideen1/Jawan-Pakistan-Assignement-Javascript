const display = document.getElementById("display");

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function backspace() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else {
    display.value = "-" + display.value;
  }
}

function appendTrig(func) {
  display.value += `Math.${func}(Math.PI/180*`;
}

function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}