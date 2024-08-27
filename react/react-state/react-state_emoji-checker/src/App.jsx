import { useState } from "react";
import "./App.css";

export default function App() {
  let [code, setCode] = useState("?");
  //let [validCode, setValidCode] = useState("🐡🐠🐋")
  const validCode = "🐡🐠🐋";

  const handleClick = (emoji) => {
    setCode((prevCode) => {
      return prevCode === "?" ? emoji : `${prevCode}${emoji}`;
    });
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡")
            //console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋")
            //console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
            //console.log("Update Code!");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          setCode("?");
          //console.log("Reset Code!");
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
