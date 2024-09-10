import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  const counterIncrement = () => setPeople(people + 1);

  const counterDecrement = () => setPeople((people > 0) ? people - 1 : 0);

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter 
        onIncrement = {counterIncrement}
        onDecrement = {counterDecrement}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
