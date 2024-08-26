import "./App.css";

export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  }

  return <Button color={"lightblue"} disabled={false} text={"Click Me!"} onClick={handleClick}/>;
}

const Button = ({color, disabled, text, onClick}) => {
  return (
    <button style={{backgroundColor: color}} disabled={disabled} onClick={onClick} >
      {text}
    </button>
  );
};

