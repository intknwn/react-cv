import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutMe from "../about-me/about-me.jsx";
import Layout from "../layout/layout.jsx";
import Main from "../main/main.jsx";
import ScrollToTop from "../scroll-to-top/scroll-to-top.jsx";

const App = () => {
  return (
    <BrowserRouter basename="/cv">
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
