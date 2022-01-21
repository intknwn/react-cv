import { css } from "styled-components";

import OpenSansWoff2 from "./open-sans-v18-latin_cyrillic-regular.woff2";
import OpenSansWoff from "./open-sans-v18-latin_cyrillic-regular.woff";
import OpenSansBoldWoff2 from "./open-sans-v18-latin_cyrillic-700.woff2";
import OpenSansBoldWoff from "./open-sans-v18-latin_cyrillic-700.woff";

export const fonts = css`
  @font-face {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    src: url(${OpenSansWoff2}) format("woff2"),
      url(${OpenSansWoff}) format("woff");
    font-display: swap;
  }

  @font-face {
    font-family: "Open Sans Bold";
    font-style: normal;
    font-weight: 700;
    src: url(${OpenSansBoldWoff2}) format("woff2"),
      url(${OpenSansBoldWoff}) format("woff");
    font-display: swap;
  }
`;
