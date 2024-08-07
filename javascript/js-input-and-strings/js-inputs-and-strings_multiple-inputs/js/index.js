/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

//Functionality 1: Copy text from field 1 to 2
// button.addEventListener('click', () => {
//     secondInput.value = firstInput.value;
// })

//Functionality 2: Value from field 1 is copied to field 2 in uppercase
// button.addEventListener('click', () => {
//     secondInput.value = firstInput.value.toUpperCase();
// })

//Functionality 3: Toggle field text betweens fields 1 & 2
button.addEventListener('click', () => {
    [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value];
})