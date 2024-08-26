import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click Me x1!</Button>
      <Button>Click Me x2!</Button>
      <Button>Click Me x3!</Button>
      <Button>Click Me x4!</Button>
    </main>
  );
}

// eslint-disable-next-line react/prop-types
function Button({ children }) {
  return (
    <button className="button" type="button">
      { children }
    </button>
  );
}
