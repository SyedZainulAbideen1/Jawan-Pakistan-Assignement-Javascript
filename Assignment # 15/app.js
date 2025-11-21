
//     Q1: Empty array (literal notation)

var studentNames1 = [];



//     Q2: Empty array (object notation)

var studentNames2 = new Array();



//     Q3: Strings array

var stringsArray = ["apple", "banana", "mango"];



//     Q4: Numbers array

var numbersArray = [10, 20, 30, 40];



//     Q5: Boolean array

var booleanArray = [true, false, true];



//     Q6: Mixed array

var mixedArray = ["Ali", 25, true];



//     Q7: Education Qualifications

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

document.write("<h3>Qualifications:</h3>");
for (var i = 0; i < qualifications.length; i++) {
    document.write((i + 1) + ") " + qualifications[i] + "<br>");
}



//     Q8: Student scores and percentage

var students = ["Ali", "Hamza", "Zain"];
var scores = [420, 380, 450];
var totalMarks = 500;

document.write("<h3>Student Scores:</h3>");
for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    document.write("Score of " + students[i] + " is " + scores[i] +
        ". Percentage: " + percentage.toFixed(2) + "%<br>");
}



//     Q9: Color array operations

var colors = ["Red", "Blue", "Green"];
document.write("<h3>Color List:</h3>" + colors + "<br><br>");

// a) Add color at beginning
var addStart = prompt("Enter a color to add at the beginning:");
colors.unshift(addStart);
document.write("After adding at beginning: " + colors + "<br><br>");

// b) Add color at end
var addEnd = prompt("Enter a color to add at the end:");
colors.push(addEnd);
document.write("After adding at end: " + colors + "<br><br>");

// c) Add two colors at beginning
colors.unshift("Pink", "Yellow");
document.write("After adding two colors at beginning: " + colors + "<br><br>");

// d) Delete first color
colors.shift();
document.write("After deleting first color: " + colors + "<br><br>");

// e) Delete last color
colors.pop();
document.write("After deleting last color: " + colors + "<br><br>");

// f) Add color at index
var indexAdd = prompt("At which index do you want to add a color?");
var colorName = prompt("Enter the color name:");
colors.splice(indexAdd, 0, colorName);
document.write("After adding color at index: " + colors + "<br><br>");

// g) Delete colors from index
var indexDel = prompt("At which index do you want to delete color(s)?");
var deleteCount = prompt("How many colors do you want to delete?");
colors.splice(indexDel, deleteCount);
document.write("After deleting color(s): " + colors + "<br><br>");



//     Q10: Sort score array

var studentScores = [320, 230, 480, 120];
studentScores.sort();
document.write("<h3>Sorted Scores:</h3>" + studentScores + "<br><br>");



//     Q11: Copy cities

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(0, 3);

document.write("<h3>Cities List:</h3>" + cities + "<br>");
document.write("<h3>Selected Cities:</h3>" + selectedCities + "<br><br>");



//     Q12: Join array into string

var arr = ["This", " is", " my", " cat"];
var sentence = arr.join("");
document.write("<h3>Joined String:</h3>" + sentence + "<br><br>");



//     Q13: FIFO (Queue)

var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

document.write("<h3>FIFO (Queue):</h3>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br><br>");



//     Q14: LIFO (Stack)

var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");

document.write("<h3>LIFO (Stack):</h3>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br><br>");



//     Q15: Dropdown of manufacturers

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<h3>Phone Manufacturers:</h3>");
document.write("<select>");

for (var i = 0; i < manufacturers.length; i++) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");
