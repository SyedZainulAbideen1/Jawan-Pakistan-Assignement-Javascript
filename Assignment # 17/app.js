// Q1

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello " + fullName + "!");


// Q2

let phone = prompt("Enter your favorite mobile phone model:");
alert("Length of input: " + phone.length);


// Q3

let word = "Pakistani";
let indexN = word.indexOf("n");
alert("Index of 'n': " + indexN);


// Q4

let text = "Hello World";
let lastIndex = text.lastIndexOf("l");
alert("Last index of 'l': " + lastIndex);


// Q5

let country = "Pakistani";
alert("Character at index 3: " + country.charAt(3));


// Q6

let fName = prompt("Enter first name:");
let lName = prompt("Enter last name:");
let fullNameConcat = fName.concat(" ", lName);
alert("Hello " + fullNameConcat + "!");


// Q7

let city = "Hyderabad";
let newCity = city.replace("Hyder", "Islam");
alert(newCity);


// Q8

let message = "Ali and Sami are best friends. They play cricket and football together.";
let replacedMsg = message.replaceAll("and", "&");
alert(replacedMsg);


// Q9

let strNum = "472";
let num = Number(strNum);
document.write("Value: " + num + "<br>Type: " + typeof num);


// Q10

let userInput = prompt("Enter any text:");
let upper = userInput.toUpperCase();
alert("Uppercase: " + upper);


// Q11

let input = prompt("Enter text:");
let firstChar = input.slice(0, 1).toUpperCase();
let rest = input.slice(1).toLowerCase();
let titleCase = firstChar + rest;
alert("Title Case: " + titleCase);


// Q12

let num2 = 35.36;
let str = num2.toString().replace(".", "");
alert(str);


// Q13

let username = prompt("Enter username:");
let invalidChars = ["@", ".", ",", "!"];

let isValid = true;

for (let i = 0; i < username.length; i++) {
    if (invalidChars.includes(username[i])) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username!");
} else {
    alert("Username saved: " + username);
}


// Q14

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let searchInput = prompt("Enter item to search:").toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === searchInput) {
        found = true;
        break;
    }
}

if (found) {
    alert(searchInput + " is available.");
} else {
    alert(searchInput + " is not available.");
}


// Q15

let password = prompt("Enter your password:");

function isValidPassword(pass) {
    if (pass.length < 6) return false;                   
    if (!isNaN(pass[0])) return false;                   
    if (!/[A-Za-z]/.test(pass)) return false;            
    if (!/[0-9]/.test(pass)) return false;               

    return true;
}

if (!isValidPassword(password)) {
    alert("Invalid password! Please enter a valid one.");
} else {
    alert("Password accepted.");
}


// Q16

let university = "University of Karachi";
let arr = university.split("");

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}


// Q17

let input2 = prompt("Enter text:");
let lastChar = input2.charAt(input2.length - 1);
alert("Last character: " + lastChar);


// Q18

let sentence = "The quick brown fox jumps over the lazy dog";
let count = sentence.toLowerCase().split("the").length - 1;

alert("Occurrences of 'the': " + count);

