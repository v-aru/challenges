import { getRandomColor } from "../../utils/randomColor.js";

export function Circle() {
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    console.log('Reached circle function');

    circleElement.addEventListener("click", () => {
        circleElement.style.backgroundColor = getRandomColor();
    });
    return circleElement;
}