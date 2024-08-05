console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let bookDetails = [
  {
    bookTitle: "The Lord of the JavaScript",
    bookAuthor: "Mario",
    bookRating: 4.2,
    bookSales: 120
  }
]
//console.log(bookDetails);
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
//Output in the form deisred
//console.log(` Title: ${bookDetails[0].bookTitle} \n Author: ${bookDetails[0].bookAuthor} \n Rating: ${bookDetails[0].bookRating} \n Sales: ${bookDetails[0].bookSales}`);
logBookData();

//Changing rating and sales
bookDetails[0].bookRating = 4.3;
bookDetails[0].bookSales = 500;

logBookData();
//console.log(` Title: ${bookDetails[0].bookTitle} \n Author: ${bookDetails[0].bookAuthor} \n Rating: ${bookDetails[0].bookRating} \n Sales: ${bookDetails[0].bookSales}`);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData () {
  console.log(` Title: ${bookDetails[0].bookTitle} \n Author: ${bookDetails[0].bookAuthor} \n Rating: ${bookDetails[0].bookRating} \n Sales: ${bookDetails[0].bookSales}`);
}

bookDetails[0].bookSales = 600;
logBookData();

bookDetails[0].bookSales = 700;
logBookData();

// --^-- write your code here --^--
