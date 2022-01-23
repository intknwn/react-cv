import styled from "styled-components";
import { defaultTheme } from "./theme";

export const Container = styled.div`
  max-width: ${defaultTheme.sizes.container.maxWidth + "px"};
  margin: 0 auto;
`;

export const H2 = styled.h2`
  margin-bottom: 50px;
  font-size: 20px;
  font-variant: small-caps;
  line-height: 1.5;
  letter-spacing: 1px;
  color: ${defaultTheme.color.titleSecondary};
  text-transform: uppercase;
`;
