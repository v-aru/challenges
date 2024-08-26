import "./App.css";

export default function App() {
  return <Sum valueA={15} valueB={15}/>;
}

const Sum = ({valueA, valueB}) => {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
};
