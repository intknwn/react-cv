import { StrictMode } from "react";
import Projects from "../projects/projects.jsx";
import { Container } from "../../styles/components";

const App = () => {
  return (
    <StrictMode>
      <Container>
        <Projects />
      </Container>
    </StrictMode>
  );
};

export default App;