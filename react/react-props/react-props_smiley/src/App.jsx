import "./App.css";

export default function App() {
  return <Smiley isHappy = {false}/>;
}

const Smiley = ({ isHappy }) => {
  return (isHappy ? "😄" : "😔");
};