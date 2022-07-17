import { Container } from "../../styles/components";
import Navigation from "../navigation/navigation.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
