import "./App.css";
import Avatar from "./components/Avatar"
import Header from "./components/Header"
import Link from "./components/Link"
import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

export default function App() {
  return (
    <>
      <Header>
        <Logo/>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
