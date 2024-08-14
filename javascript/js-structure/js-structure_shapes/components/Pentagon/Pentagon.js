import { getRandomColor } from "../../utils/randomColor.js";

export function Pentagon() {
    const pentagonElement = document.createElement("div");
    pentagonElement.classList.add("pentagon");
    console.log('Reached pentagon function');

    pentagonElement.addEventListener("click", () => {
        pentagonElement.style.backgroundColor = getRandomColor();
    });
    return pentagonElement;
}