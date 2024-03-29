import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { defaultTheme } from "./theme";
import { fonts } from "../fonts/fonts";

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    scroll-padding: 80px;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    font-family: "Open Sans", "Verdana", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.5;
    color: ${defaultTheme.color.font};
    background-color: ${defaultTheme.color.bg};
    overflow-x: hidden;
    font-size: 16px;
  }

  html, body, main, #root {
    height: 100%;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  p {
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;

    font-family: "Open Sans Bold", "Arial", sans-serif;
    font-weight: 700;
  }

  h1 {
    color: ${defaultTheme.color.titlePrimary};
  }

  h2 {
    margin-bottom: 50px;

    font-size: 20px;
    font-variant: small-caps;
    line-height: 1.5;
    letter-spacing: 1px;
    color: ${defaultTheme.color.titleSecondary};

    text-transform: uppercase;

    margin-bottom: 40px;
  }

  .icon {
    fill: ${defaultTheme.color.icon};

    &:hover,
    &:focus {
      fill: ${defaultTheme.color.iconHover};
    }
  }
`;
