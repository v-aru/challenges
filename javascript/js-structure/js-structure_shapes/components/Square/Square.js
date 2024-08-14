import { getRandomColor } from "../../utils/randomColor.js";

export function Square() {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");
    console.log('Reached square function');

    squareElement.addEventListener("click", () => {
        squareElement.style.backgroundColor = getRandomColor();
    });
    return squareElement;
}