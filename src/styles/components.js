import tw, { styled } from "twin.macro";
import { defaultTheme } from "./theme";

export const Container = tw.div`
  container
  mx-auto
  px-10
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

export const Title = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  color: ${defaultTheme.color.titleSecondary};
`;
