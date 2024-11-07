import "./App.css";
import { Header } from "../src/components/Header/Header";
import { Home } from "./Pages/Home/Home";
import { AboutMe } from "../src/Pages/AboutMe/AboutMe";
import { Skills } from "../src/Pages/Skills/Skills";
import { Portfolio } from "../src/Pages/Portfolio/Portfolio";
import { Testimonials } from "../src/Pages/Testimonials/Testimonials";
import { Contact } from "../src/Pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="sections">
        <Home />
        <AboutMe />
        <Skills />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
