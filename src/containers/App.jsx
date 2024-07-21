import NavBar from "../components/navBar";
import BodyText from "../components/bodyText";
import Skill from "../components/skill";
import Contact from "../components/contact";

function App() {
  return (
    <div className="w-[100vw]">
      <NavBar />
      <div id="about">
        <BodyText />
      </div>
      <div id="experience">
        <Skill />
      </div>
      <div id="projects">
        <BodyText />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
