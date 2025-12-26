// Chapters 35–38 (Functions)

// Q1: Function to display current date & time
function showDateTime() {
  document.write("<b>Q1</b><br>");
  document.write(new Date() + "<br><hr>");
}
showDateTime();


// Q2: Greet user with full name
function greetUser(firstName, lastName) {
  document.write("<b>Q2</b><br>");
  document.write("Hello " + firstName + " " + lastName + "<br><hr>");
}

greetUser("Syed", "ZainulAbideen");



// Q3: Add two numbers
function addNumbers(a, b) {
  return a + b;
}
document.write("<b>Q3</b><br>");
document.write("Sum: " + addNumbers(5, 7) + "<br><hr>");


// Q4: Calculator
function calculator(num1, num2, operator) {
  if (operator === "+") return num1 + num2;
  if (operator === "-") return num1 - num2;
  if (operator === "*") return num1 * num2;
  if (operator === "/") return num1 / num2;
}
document.write("<b>Q4</b><br>");
document.write("Result: " + calculator(10, 2, "*") + "<br><hr>");


// Q5: Square of a number
function square(num) {
  return num * num;
}
document.write("<b>Q5</b><br>");
document.write("Square: " + square(4) + "<br><hr>");


// Q6: Factorial of a number
function factorial(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}
document.write("<b>Q6</b><br>");
document.write("Factorial: " + factorial(5) + "<br><hr>");


// Q7: Counting from start to end
function showCounting(start, end) {
  document.write("<b>Q7</b><br>");
  for (let i = start; i <= end; i++) {
    document.write(i + " ");
  }
  document.write("<br><hr>");
}
showCounting(1, 10);


// Q8: Nested function (Hypotenuse)
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(value) {
    return value * value;
  }
  let hypotenuse = Math.sqrt(
    calculateSquare(base) + calculateSquare(perpendicular)
  );
  return hypotenuse;
}
document.write("<b>Q8</b><br>");
document.write("Hypotenuse: " + calculateHypotenuse(3, 4) + "<br><hr>");


// Q9: Area of rectangle
function rectangleArea(width, height) {
  return width * height;
}
document.write("<b>Q9</b><br>");
document.write("Area (values): " + rectangleArea(5, 10) + "<br>");

let w = 4;
let h = 6;
document.write("Area (variables): " + rectangleArea(w, h) + "<br><hr>");


// Q10: Palindrome check
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
document.write("<b>Q10</b><br>");
document.write("madam is palindrome: " + isPalindrome("madam") + "<br><hr>");


// Q11: Capitalize first letter of each word
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
document.write("<b>Q11</b><br>");
document.write(capitalizeWords("the quick brown fox") + "<br><hr>");


// Q12: Find longest word
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
document.write("<b>Q12</b><br>");
document.write(longestWord("Web Development Tutorial") + "<br><hr>");


// Q13: Count letter occurrences
function countLetter(str, letter) {
  let count = 0;
  for (let char of str) {
    if (char === letter) count++;
  }
  return count;
}
document.write("<b>Q13</b><br>");
document.write(
  countLetter("JSResourceS.com", "o") + "<br><hr>"
);


// Q14: The Geometrizer
function calcCircumference(radius) {
  let result = 2 * Math.PI * radius;
  document.write("Circumference is " + result.toFixed(2) + "<br>");
}

function calcArea(radius) {
  let result = Math.PI * radius * radius;
  document.write("Area is " + result.toFixed(2) + "<br>");
}

document.write("<b>Q14</b><br>");
calcCircumference(5);
calcArea(5);
