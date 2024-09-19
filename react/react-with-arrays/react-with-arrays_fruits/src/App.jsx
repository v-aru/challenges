import Card from "./components/Card";
import "./App.css";


export default function App() {
  const fruits = [
    {
      id: 1,
      name: '🍌 banana',
      color: 'yellow'
    },
    {
      id: 2,
      name: '🍎 apple',
      color: 'red'
    },
    {
      id: 3,
      name: '🍊 orange',
      color: 'orange'
    },
    {
      id: 4,
      name: '🥝 kiwi',
      color: 'green'
    },
    {
      id: 5,
      name: '🥭 mango',
      color: 'yellow'
    }
  ];

  return (
    <div className="app">
      {
        fruits.map((fruit, id) => (
          <Card key={id} name={fruit.name} color={fruit.color}/>
        ))
      }
      
    </div>
  );
}
