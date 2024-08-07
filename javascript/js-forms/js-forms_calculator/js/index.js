console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = parseInt(event.target.numberA.value); 
  const numberB = parseInt(event.target.numberB.value);

  const operator = event.target.operator.value;

  switch (operator) {
    case "addition" : result = add (numberA, numberB); break;
    case "subtraction" : result = subtract (numberA, numberB); break;
    case "multiplication" : result = multiply (numberA, numberB); break;
    case "division" : result = divide (numberA, numberB); break;
    default : result = "Invalid operation!";
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result !== undefined ? `${result}` : "Invalid operation!";
});
