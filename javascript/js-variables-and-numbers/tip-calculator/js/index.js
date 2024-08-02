/*
Tip Calculator 🌶️🌶️
-----------------------------
Create a program that calculates the total cost of a meal, including tip, based on the cost of the meal and the percentage of the tip.

Steps
Create a new JavaScript file in VS Code.
Initialize a assign values to 2 variables:
A variable which will hold the value of the meal cost.
A variable which will hold the value of the tip percentage.
Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called tipAmount.
Calculate the total cost of the meal, including tip, by adding the mealCost variable and the tipAmount variable, and store the result in a variable called totalCost.
Log out a message using the console.log() method that should look like this: // The total cost of your bill is: 33 euros

*/

let mealCost = 60;
let percentage = 7;

let tipAmount = mealCost * (percentage/100);

let totalCost = mealCost + tipAmount;

console.log(`The total cost of your bill is: ${totalCost}`);