console.clear();

/*
1: The function calls below do not work properly yet. Make the function
   printSquare log the square of the parameter to the console.
   The formula is: square = number * number
*/

function printSquare(number) {
   console.log(`The formula is: square = ${number} * ${number}`);
   console.log(`Area of Square = ${number * number}`);
}

printSquare(3);
printSquare(5);

/*
2: We want to use a function which accepts the radius of a circle as a parameter and logs
   the circumference to the console. The function does not exist yet.
   The formula is: circumference = 2 * Pi * radius
*/

// Uncomment the following function calls and implement the function printCircumference

function printCircumference (radius) {
   console.log(`The formula is: circumference = 2 * PI * radius`);
   console.log(`Circumference of Circle = ${(2 * Math.PI * radius).toFixed(2)}`);
}
 printCircumference(4);
 printCircumference(6);

/*
3: We want to use a function which accepts the width and length of a rectangle
   and prints the following text to the console: "The area of the rectangle is ?".
   The function should print the correct area instead of the question mark "?".
   The function does not exist yet.
   The formula is: area = width * length
*/

// Uncomment the following function calls and implement the function printRectangleArea

function printRectangleArea (width, length) {
   console.log(`The formula is: area = ${width} * ${length}`);
   console.log(`Area of Rectangle = ${width * length}`);
}

 printRectangleArea(5, 7);
 printRectangleArea(3, 4);
