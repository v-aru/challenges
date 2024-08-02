console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const text = "Lorem Ipsum";
const title = "Social Media";
const likeCount = 1000;
const user = "lorem_ipsum";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(text);
console.log(title);
console.log(likeCount);
console.log(user);
console.log(isReported);

//As likeCount is op const stype, this will result in an error. Suggest to change to var/let
likeCount++;
console.log(likeCount);
// --^-- write your code here --^--
