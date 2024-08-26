import "./App.css";

export default function App() {
  return <ArticleComponent/>;
}

function ArticleComponent () {
  return (
    <article className="article">
      <h2 className="article_title">Heading to the REACT component</h2>
      <p>This ........... is ............. the .............. para............. element..............Send............Help!!!</p>
      <label htmlFor="text-input"></label>
      <input id="text-input" type="text"/>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click Here!</a>
    </article>
  )
}