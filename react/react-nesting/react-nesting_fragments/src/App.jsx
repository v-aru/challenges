import "./App.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      <ColorBoxes />
    </main>
  );
}

const ColorBoxes = () => {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
};
