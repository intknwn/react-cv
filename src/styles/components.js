import styled from "styled-components";
import { defaultTheme } from "./theme";

export const Container = styled.div`
  max-width: ${defaultTheme.sizes.container.maxWidth + "px"};
  margin: 0 auto;
`;
