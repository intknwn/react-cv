import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import createServer from "./server";
import GlobalStyle from "./styles/global";

createServer();

const root = document.getElementById(`root`);

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  root
);
