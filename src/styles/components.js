import tw, { styled } from "twin.macro";
import { defaultTheme } from "./theme";

export const Container = tw.div`
  relative
  container
  mx-auto
  sm:px-10
  px-4
  md:pt-20
  pt-4
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

export const H1 = styled(H2)``;

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

export const ScrollDownButton = styled.button`
  ${tw`
    appearance-none
    absolute
    left-1/2
    bottom-[5%]
    w-12
    h-12
    border-4
    border-[#555555]
    opacity-70
    rounded-full
    -translate-x-1/2
    transition
    hocus:opacity-50
    animate-bounce
  `}

  &:before {
    ${tw`
      content-['']
      absolute
      top-1/2
      left-1/2
      block
      w-4
      h-4
      bg-transparent
      border-[#555555]
      border-4
      border-t-0
      border-r-0
      -translate-x-1/2
      -translate-y-2/3
      -rotate-45
    `}
  }
`;
