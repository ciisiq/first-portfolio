import TopBar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro.jsx";
import About from "./components/about/About";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar open={menuOpen} setOpen={setMenuOpen} />
      <Menu open={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
