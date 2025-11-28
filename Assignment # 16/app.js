// Q1: Empty Multidimensional Array
let matri = [[], [], []];
console.log(matri);


// Q2: Matrix Multidimensional Array
let matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(matrix);


// Q3: Print Counting 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// Q4: Multiplication Table (User Input)
let number = +prompt("Enter number:");
let length = +prompt("Enter table length:");

for (let i = 1; i <= length; i++) {
  console.log(number + " x " + i + " = " + (number * i));
}


// Q5: Print Fruits Array Items
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


// Q6: Series
// a. Counting
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse Counting
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even Numbers
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// d. Odd Numbers
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

// e. Series (k)
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}


// Q7: Search in Array
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let user = prompt("Enter item to search:").toLowerCase();

let found = false;

for (let i = 0; i < A.length; i++) {
  if (A[i] === user) {
    found = true;
    break;
  }
}

if (found) {
  console.log(user + " is available.");
} else {
  console.log("Sorry, " + user + " is not available.");
}


// Q8: Largest Number
let b = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("Largest number is: " + largest);


// Q9: Smallest Number
let a = [24, 53, 78, 91, 12];
let smallest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log("Smallest number is: " + smallest);


// Q10: Multiples of 5 (1 to 100)
for (let i = 5; i <= 100; i += 5) {
  console.log(i);
}





