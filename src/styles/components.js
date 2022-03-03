import tw, { styled } from "twin.macro";
import { defaultTheme } from "./theme";

export const Container = tw.div`
  container
  mx-auto
  sm:px-10
  px-4
`;

export const H2 = tw.h2`
  md:mb-12
  mb-4
  md:text-2xl
  text-xl
  leading-normal
  uppercase
  tracking-wide
`;

export const Section = tw.section`
  md:mb-32
  mb-12
`;

export const Title = tw.p`
  md:mb-3
  mb-1
  font-bold
  text-lg
  text-[#647c72]
`;
