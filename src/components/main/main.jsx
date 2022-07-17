import ContactMe from "../contact-me/contact-me.jsx";
import Projects from "../projects/projects.jsx";
import Skills from "../skills/skills.jsx";
import Welcome from "../welcome/welcome.jsx";

const Main = () => {
  return (
    <main>
      <Welcome />
      <Skills />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Main;
