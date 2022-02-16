import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles as TwinGlobalStyles } from "twin.macro";

import App from "./components/app/app.jsx";

import createServer from "./server";
import GlobalStyle from "./styles/global";
import "./assets/styles.css";

createServer();

const root = document.getElementById(`root`);

ReactDOM.render(
  <>
    <GlobalStyle />
    <TwinGlobalStyles />
    <App />
  </>,
  root
);
