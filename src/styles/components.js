import tw, { styled } from "twin.macro";
import { defaultTheme } from "./theme";

export const Container = tw.div`
  container
  mx-auto
  sm:px-10
  px-4
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

export const Title = tw.p`
  md:mb-3
  mb-1
  font-bold
  text-lg
  text-[#647c72]
`;
