import { StrictMode } from "react";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects.jsx";
import { Container } from "../../styles/components";

const App = () => {
  return (
    <StrictMode>
      <Container>
        <Skills />
        <Projects />
      </Container>
    </StrictMode>
  );
};

export default App;
