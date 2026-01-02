// Assignment 38–42 (Functions)

// Q1: Power function
function power(a, b) {
  return Math.pow(a, b);
}
document.write("<b>Q1</b><br>2^3 = " + power(2, 3) + "<hr>");

// Q2: Leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
document.write("<b>Q2</b><br>2024 Leap Year: " + isLeapYear(2024) + "<hr>");

// Q3: Area of triangle
function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
  let s = semiPerimeter(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
document.write("<b>Q3</b><br>Area: " + triangleArea(5, 6, 7) + "<hr>");

// Q4: Average & Percentage
function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}
document.write("<b>Q4</b><br>");
document.write("Average: " + average(80, 70, 90) + "<br>");
document.write("Percentage: " + percentage(80, 70, 90) + "%<hr>");

// Q5: Custom indexOf
function customIndexOf(str, ch) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) return i;
  }
  return -1;
}
document.write("<b>Q5</b><br>Index: " + customIndexOf("JavaScript", "S") + "<hr>");

// Q6: Remove vowels
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}
document.write("<b>Q6</b><br>" + removeVowels("Javascript Assignment") + "<hr>");

// Q7: Double vowels count
function countDoubleVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let pair = str[i] + str[i + 1];
    if (pair === "ea" || pair === "ui") {
      count++;
    }
  }
  return count;
}
document.write("<b>Q7</b><br>" + countDoubleVowels("Pleases read this application") + "<hr>");

// Q8: Distance conversion
function meters(km) { return km * 1000; }
function feet(km) { return km * 3280.84; }
function inches(km) { return km * 39370.1; }
function cm(km) { return km * 100000; }

document.write("<b>Q8</b><br>");
document.write("Meters: " + meters(2) + "<br>");
document.write("Feet: " + feet(2) + "<br>");
document.write("Inches: " + inches(2) + "<br>");
document.write("CM: " + cm(2) + "<hr>");

// Q9: Overtime pay
function overtimePay(hours) {
  if (hours > 40) return (hours - 40) * 12;
  return 0;
}
document.write("<b>Q9</b><br>Overtime Pay: Rs " + overtimePay(45) + "<hr>");

// Q10: Currency notes
function currencyNotes(amount) {
  let hundreds = Math.floor(amount / 100);
  amount %= 100;
  let fifties = Math.floor(amount / 50);
  amount %= 50;
  let tens = Math.floor(amount / 10);

  document.write("<b>Q10</b><br>");
  document.write("100s: " + hundreds + "<br>");
  document.write("50s: " + fifties + "<br>");
  document.write("10s: " + tens + "<hr>");
}
currencyNotes(380);




// Assignment 43–48 (Events)

// Q1: Alert on link click
function showAlert() {
  alert("Link clicked");
}

// Q2: Image alert
function imageAlert() {
  alert("Mobile clicked");
}

// Q4: Image hover
function changeImage(img) {
  img.src = "https://via.placeholder.com/150/0000FF";
}
function resetImage(img) {
  img.src = "https://via.placeholder.com/150";
}

// Q5: Counter
let counter = 0;
function increase() {
  counter++;
  document.getElementById("count").innerText = counter;
}
function decrease() {
  counter--;
  document.getElementById("count").innerText = counter;
}
