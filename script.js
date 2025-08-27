// ==========================
// Part 1: Variables & Conditionals
// ==========================

// Variable declarations
let userName = "Mohammed";
let age = 25;

// Conditional example
if (age >= 18) {
    console.log(userName + " is an adult.");
} else {
    console.log(userName + " is a minor.");
}

// Another conditional
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Greeting function
function greet(name) {
    return "Hello, " + name + "! Welcome to JavaScript.";
}

// Function 2: Sum two numbers
function sum(a, b) {
    return a + b;
}

// Event listener for greeting button
document.getElementById("greetButton").addEventListener("click", function() {
    let output = greet(userName);
    document.getElementById("greetOutput").textContent = output;
    console.log(output);
});

// ==========================
// Part 3: Loops
// ==========================

// Loop 1: for loop
let loopList = document.getElementById("loopList");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Item " + i;
    loopList.appendChild(li);
}

// Loop 2: while loop
let j = 1;
while (j <= 3) {
    console.log("While loop iteration: " + j);
    j++;
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// DOM Interaction 1: Toggle class
document.getElementById("toggleButton").addEventListener("click", function() {
    document.getElementById("toggleText").classList.toggle("highlight");
});

// DOM Interaction 2: Display user input
document.getElementById("displayButton").addEventListener("click", function() {
    let input = document.getElementById("userInput").value;
    document.getElementById("displayOutput").textContent = "You typed: " + input;
});

// DOM Interaction 3: Create and append new element
let newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically with JavaScript!";
document.getElementById("part4").appendChild(newPara);
