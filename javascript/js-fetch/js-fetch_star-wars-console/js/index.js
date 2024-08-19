console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        //Log response to console
        console.log("Data From Console: ", data);

        //Log different values of data object : Luke
        console.log("Data for Luke Skywalker: " , data.results.find((character) => character.name === "Luke Skywalker"));

        //Log different values of data object : Darth Vader
        console.log("Data for Darth Vader: " , data.results.find((character) => character.name === "Darth Vader"));

        //Log different values of data object : R2-D2
        console.log("Data for R2-D2: " , data.results.find((character) => character.name === "R2-D2"));

        //Log eye color of R2-D2
        console.log("R2-D2's eye color is : ", data.results.find((character) => character.name === "R2-D2")?.eye_color || "Not found");

    } catch (error) {
        console.log("Error: ", error);
    }
}

fetchData();
