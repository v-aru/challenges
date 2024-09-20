import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "../src/utils";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {defaultValue: []});

  const handleRoll = () => {
    const newRoll = { value: getD6Roll(), time: Date.now() };
    setRolls([newRoll, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
