import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
import "./Counter.css";


export default function Counter() {

  let [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={()=> { setCounter(counter++)}}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={()=> { setCounter(counter--)}}
        >
          -
        </button>
      </div>
    </div>
  );
}
