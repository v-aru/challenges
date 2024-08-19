console.clear();

// EXERCISE 1
// Use array destructuring to extract the variables "name", "price", and "quantity".
// Make sure to export your variable as in the example below to make the tests work.

const item = ["Egg", 0.25, 12];
export const [name, price, quantity] = item;
// console.log(`${quantity} ${name}'s is ${price} currency.`);
// example: export const [value1, value2] = array;

// EXERCISE 2
// Use array destructuring to extract the variables "firstNameOfChris", "lastNameOfChris" and "ageOfChris".

const personChris = [12, "Chris", "Owen"];
export const [ageOfChris, firstNameOfChris, lastNameOfChris] = personChris;
// console.log(`${firstNameOfChris} ${lastNameOfChris} is ${ageOfChris} years old`);

// EXERCISE 3
// Use array destructuring to extract the variables "firstNameOfAlex" and "lastNameOfAlex".
// Make sure not to have unused variables.

const personAlex = ["Alex", 12, "Main"];
export const [firstNameOfAlex, , lastNameOfAlex] = personAlex;
// console.log(`${firstNameOfAlex} ${lastNameOfAlex}`);

// EXERCISE 4
// Use array destructuring to extract the last name from the array
// as variable called "lastName".

const students = ["Christina", "Jon", "Alexandare"];
export const [, , lastName] = students;
// console.log("Last Name in Students array is: ", lastName);

// EXERCISE 5
// Use array destructuring to extract all of the names from this nested array.
// Assign the given order of students to variables called "student1" to "student5".

const nestedStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];
export const [student1, [student2, student3], [student4, student5]] = nestedStudents;
// console.log(`
//   Name of Student1: ${student1}, Name of Student2: ${student2}, Name of Student3: ${student3}, Name of Student4: ${student4}, Name of Student5: ${student5}
//   `);

// EXERCISE 6
// Spread the values of the values array into the function call of the add function.
// Keep in mind that you need to export the variable 'result' to make the test work.

const values = [1, 6, 7, 9, 12, 5, 4];

export const result = add(1, 6, 7, 9, 12, 5, 4); // Spread values inside this function call

function add(...values) {
  return values.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
}

// EXERCISE 7
// Write a function reverseArrayWithoutMutating that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. 
// This function should:

// Leave the original array unchanged.
// Contain no loops of any kind. That includes for, for...in, for...of, while, and do...while.
// Not call slice or any other method on the original array.
// Not call push or concat on any array in any way.
// Your task is to implement this function without violating any of the above conditions.
// Keep in mind that you need to export the function 'reverseArrayWithoutMutating' to make the test work.

const arr = [1, 2, 3];
export function reverseArrayWithoutMutating(arr) {
  // write your code here
  if (arr.length === 0) {
    return [];
  }

  const [head, ...tail] = arr;
  const reversedTail = reverseArrayWithoutMutating(tail);
  return [...reversedTail, head];
}
const reverseArr = reverseArrayWithoutMutating(arr);
console.log(reverseArr); // Should log [3, 2, 1] without altering arr
console.log(arr); // Should still log [1, 2, 3]


// EXERCISE 8
// Develop a function mergeAndSortArrays that takes two arrays of numbers as arguments and returns a new array that is the result of merging the two arrays and sorting the elements in ascending order. 
// (Hint: the sort method we've seen the other day comes in handy here)
// The function should:

// Not alter the original arrays.
// Not use loops of any kind.
// Keep in mind that you need to export the function 'mergeAndSortArrays' to make the test work.

const array1 = [3, 6, 1];
const array2 = [8, 5, 2];
export function mergeAndSortArrays(array1, array2) {
  // write your code here
  return [...array1, ...array2].sort((a,b) => a - b);
}
const mergedAndSorted = mergeAndSortArrays(array1, array2);
console.log(mergedAndSorted); // Should log [1, 2, 3, 5, 6, 8]