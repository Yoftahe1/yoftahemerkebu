import "./App.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Landing from "./pages/Landing/Landing";
import Preloader from "./pages/Preloader/Preloader";
import Process from "./pages/Process/Process";
import Projects from "./pages/Projects/Projects";
import SkillsAndExp from "./pages/SkillsAndExp/SkillsAndExp";


function App() {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Landing/>
      <About/>
      <Process/>
      <SkillsAndExp/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
