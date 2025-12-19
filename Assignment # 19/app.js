// chapters 26–30

// Q1: Positive Integer – round, floor, ceil
let posNum = Number(prompt("Enter a positive number"));

document.write("<b>Q1</b><br>");
document.write("Number: " + posNum + "<br>");
document.write("Round off: " + Math.round(posNum) + "<br>");
document.write("Floor value: " + Math.floor(posNum) + "<br>");
document.write("Ceil value: " + Math.ceil(posNum) + "<br><hr>");


// Q2: Negative Floating Number – round, floor, ceil
let negNum = Number(prompt("Enter a negative floating number"));

document.write("<b>Q2</b><br>");
document.write("Number: " + negNum + "<br>");
document.write("Round off: " + Math.round(negNum) + "<br>");
document.write("Floor value: " + Math.floor(negNum) + "<br>");
document.write("Ceil value: " + Math.ceil(negNum) + "<br><hr>");


// Q3: Absolute Value
let absNum = Number(prompt("Enter any number"));

document.write("<b>Q3</b><br>");
document.write("Absolute value: " + Math.abs(absNum) + "<br><hr>");


// Q4: Dice Simulation
let dice = Math.floor(Math.random() * 6) + 1;

document.write("<b>Q4</b><br>");
document.write("Dice value: " + dice + "<br><hr>");


// Q5: Coin Toss
let toss = Math.floor(Math.random() * 2) + 1;

document.write("<b>Q5</b><br>");
if (toss === 1) {
  document.write("Coin Toss: Heads<br><hr>");
} else {
  document.write("Coin Toss: Tails<br><hr>");
}


// Q6: Random Number 1–100
let randomNum = Math.floor(Math.random() * 100) + 1;

document.write("<b>Q6</b><br>");
document.write("Random number: " + randomNum + "<br><hr>");


// Q7: Weight Parse
let weightInput = prompt("Enter your weight");
let parsedWeight = parseFloat(weightInput);

document.write("<b>Q7</b><br>");
document.write("Your weight is: " + parsedWeight + " kgs<br><hr>");


// Q8: Secret Number Game
let secretNum = Math.floor(Math.random() * 10) + 1;
let userGuess = Number(prompt("Guess a number between 1 and 10"));

document.write("<b>Q8</b><br>");
if (userGuess === secretNum) {
  document.write("Congratulations! You guessed the correct number.");
} else {
  document.write("Sorry! Secret number was " + secretNum);
}


// chapters 31–34 (Date Methods)

// Q1: Current date & time
let now = new Date();
document.write("<b>Q1</b><br>");
document.write("Current Date & Time: " + now + "<br><hr>");


// Q2: Current month in words
let months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let currentMonth = months[now.getMonth()];
alert("Current Month: " + currentMonth);


// Q3: First 3 letters of current day
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDay = days[now.getDay()];
alert("Today is: " + currentDay);


// Q4: Fun day (Saturday or Sunday)
let dayNum = now.getDay();
if (dayNum === 0 || dayNum === 6) {
  document.write("<b>Q4</b><br>It's Fun day<br><hr>");
}


// Q5: First or last days of month
let date = now.getDate();
document.write("<b>Q5</b><br>");
if (date < 16) {
  document.write("First fifteen days of the month<br><hr>");
} else {
  document.write("Last days of the month<br><hr>");
}


// Q6: Minutes since Jan 1, 1970
let minutesSince = Math.floor(now.getTime() / (1000 * 60));
document.write("<b>Q6</b><br>");
document.write("Minutes since Jan 1, 1970: " + minutesSince + "<br><hr>");


// Q7: AM or PM
let hours = now.getHours();
alert(hours < 12 ? "Its AM" : "Its PM");


// Q8: Last day of last month of 2020
let laterDate = new Date(2020, 11, 31);
document.write("<b>Q8</b><br>");
document.write("Later Date: " + laterDate + "<br><hr>");


// Q9: Days passed since 1st Ramadan (June 18, 2015)
let ramadanDate = new Date("June 18, 2015");
let diffTime = now.getTime() - ramadanDate.getTime();
let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan 2015");


// Q10: Seconds elapsed between reference date & start of 2015
let refDate = new Date();
let start2015 = new Date("January 1, 2015");
let secondsElapsed = Math.floor((refDate - start2015) / 1000);
document.write("<b>Q10</b><br>");
document.write("Seconds elapsed since start of 2015: " + secondsElapsed + "<br><hr>");


// Q11: Date one hour ahead
let futureDate = new Date();
futureDate.setHours(futureDate.getHours() + 1);
document.write("<b>Q11</b><br>");
document.write("Updated Date & Time: " + futureDate + "<br><hr>");


// Q12: Date 100 years back
let pastDate = new Date();
pastDate.setFullYear(pastDate.getFullYear() - 100);
alert("Date 100 years back: " + pastDate);


// Q13: Birth year from age
let age = Number(prompt("Enter your age"));
let birthYear = now.getFullYear() - age;
document.write("<b>Q13</b><br>");
document.write("Your birth year is: " + birthYear + "<br><hr>");


// Q14: K-Electric Bill
let customerName = "Zain Khan";
let units = 410;
let chargesPerUnit = 16;
let lateCharges = 350;

let netAmount = units * chargesPerUnit;
let grossAmount = netAmount + lateCharges;

document.write("<b>Q14 - K-Electric Bill</b><br><br>");
document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + currentMonth + "<br>");
document.write("Number of units: " + units + "<br>");
document.write("Charges per unit: " + chargesPerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable: " + netAmount.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateCharges.toFixed(2) + "<br>");
document.write("Gross Amount Payable: " + grossAmount.toFixed(2) + "<br>");
