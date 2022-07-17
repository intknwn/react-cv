import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "../scroll-to-top/scroll-to-top.jsx";
import Layout from "../layout/layout.jsx";
import Main from "../main/main.jsx";
import AboutMe from "../about-me/about-me.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
