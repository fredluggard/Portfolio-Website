import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Freelance from "./components/Freelance";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
// import Services from "./components/Services";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Resume />
      {/* <Services /> */}
      <Skills />
      <Projects />
      <Freelance />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
