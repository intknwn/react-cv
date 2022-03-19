import { StrictMode } from "react";
import Navigation from "../navigation/navigation.jsx";
import Header from "../header/header.jsx";
import Skills from "../skills/skills.jsx";
import Projects from "../projects/projects.jsx";
import ContactMe from "../contact-me/contact-me.jsx";
import Burger from "../burger/burger.jsx";
import { Container } from "../../styles/components";

const App = () => {
  return (
    <StrictMode>
      <Container>
        <Navigation />
        <Header />
        <Skills />
        <Projects />
        <ContactMe />
      </Container>
    </StrictMode>
  );
};

export default App;
