import { StrictMode } from "react";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects.jsx";
import ContactMe from "../contact-me/contact-me.jsx";
import { Container } from "../../styles/components";

const App = () => {
  return (
    <StrictMode>
      <Container>
        <Skills />
        <Projects />
        <ContactMe />
      </Container>
    </StrictMode>
  );
};

export default App;
