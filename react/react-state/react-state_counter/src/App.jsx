import "./App.css";
import { useState } from "react";

export default function App() {
  let [count, setCounter] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            setCounter(count--);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setCounter(count++);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
