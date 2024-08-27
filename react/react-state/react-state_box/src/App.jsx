import "./App.css";
import { useState } from "react";

export default function App() {
  let [isActive, setActiveState] = useState(false);
  let [buttonText, setButtonText] = useState("Activate");

  function handleClick() {
    setActiveState(!isActive);
    setButtonText(buttonText === "Activate" ? "Deactivate" : "Activate");
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{buttonText}</button>
    </main>
  );
}

/* ## Hacker Bonus

Check the console and pay attention to the logged value of `isActive`. You will notice, that `console.log()` doesn't log the value you set with the `set` function one line before. If you set `true` it will log `false` and vice versa. This is not a bug, but the fundamental way how state in React works.

Can you explain why this happens?

Answer: When you call setActiveState(!isActive), isActive still holds the old value. React prepares the update, but the component doesn’t re-render immediately. Therefore, the console log inside handleClick will print the previous value of isActive rather than the new one. After the re-render, isActive will hold the updated value.
*/