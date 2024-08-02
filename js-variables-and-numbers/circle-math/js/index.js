/*
Calculate Circle Area and Circumference 🌶️🌶️🌶️
----------------------------------------------------
Steps
Create a new JavaScript file in your preferred code editor (e.g., Visual Studio Code).
Initialize a variable to represent the radius of a circle. For example, you can set radius to a specific value, like 5.
Calculate the area of the circle using the formula Math.PI * Math.pow(radius, 2) and store the result in a variable called circleArea.
Calculate the circumference of the circle using the formula 2 _ Math.PI _ radius and store the result in a variable called circumference.
Display the results by logging them to the console. You can use console.log to print the area and circumference. For example:

For a circle with a radius of 5 units:

- The area is approximately 78.54 square units.
- The circumference is approximately 31.42 units.

Run your JavaScript program to see the calculated area and circumference of the circle with the specified radius.
*/

let radius = 5;

let circleArea = Math.PI * (radius ** 2);

let circleCircumference = 2 * Math.PI * radius;

console.log(`For a circle with radius os 5 units :
    
    - The area is approximately ${circleArea.toFixed(2)} square units.
    - The circumference is approximately ${circleCircumference.toFixed(2)} units`);