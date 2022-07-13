import Navigation from "../navigation/navigation.jsx";
import { Outlet } from "react-router-dom";
import { Container } from "../../styles/components";

const Layout = () => {
  return (
    <Container>
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Layout;
