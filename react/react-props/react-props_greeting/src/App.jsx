import "./App.css";

export default function App() {
  //return <Greetings courseName ="Go" />;
  return <Greetings courseName ="JavaScript" />;
}

const Greetings = ({ courseName }) => {
  const syllabus = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.JS"];
  const topicIncluded = syllabus.includes(courseName);
  return <h1>{ topicIncluded ? `We are learning ${courseName} which is in our Spiced Academy syllabus` : `Sorry ${courseName} is not in our curriculum!`}</h1>;
}