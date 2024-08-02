/*
LogType 🌶️
-----------------------------------------
Create a file named logType.js.
Declare a variable named data.
Write a switch statement that takes the typeof data and logs a different string depending on the type/value of data.
The string it logs should be one of the following:

"undefined!"
"null!"
"number!"
"not a number!"
"string!"
"boolean!"
"bigint!"
"function!"
"object!"
"array!"
"I have no idea!"
💡 you will need to google for object and array.

Development
To run the LogType challenge, there are two main options:

In VSCode, go to Run -> Run Without Debugging
From your terminal. Change to the folder where the file is. Then run the command node fileName.js

*/
let data;

data = undefined;
// data = null;
// data = 10;
// data = "alpha";
// data = true;
// data = 12345678901234567890;
// data = function () {};
// data = {};
// data = [];

//console.log(typeof data);

switch (typeof data) {
    case 'undefined' : console.log('undefined'); break;
    case 'null' : console.log('null!'); break;
    case 'number' : console.log('number!'); break;
    case 'string' : console.log('string!'); break;
    case 'boolean' : console.log('boolean!'); break;
    case 'bigInt' : console.log('bigInt!'); break;
    case 'function':
        console.log("function!");
        break;
    case 'object' : if (data === null) {
                    console.log("null!");
                } else if (Array.isArray(data)) {
                    console.log("array!");
                } else {
                    console.log("object!");
                }
                break;
    case 'array' : console.log('array!'); break;

    default : console.log('I have no idea!'); break;

}
