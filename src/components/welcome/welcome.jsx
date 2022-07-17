import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { keyframes } from "styled-components";

const Welcome = () => {
  const [clientHeight] = useState(document.documentElement.clientHeight);

  useEffect(() => {
    const scrollBtn = document.getElementById(`scroll-btn`);
    const skills = document.getElementById(`skills`);

    scrollBtn.addEventListener(`click`, () => skills.scrollIntoView());
  }, []);

  return (
    <WelcomeSection>
      <h1 tw="sr-only">Дмитрий Неклюдов — front-end разработчик</h1>
      <Greeting>
        Привет!
        <br />Я — Митя 👋
      </Greeting>
      <AboutMe>
        Front-end разработчик с&nbsp;небольшим коммерческим опытом
        и&nbsp;здоровыми амбициями
      </AboutMe>
      <Goal>Ищу команду, чтобы сделать веб лучше</Goal>
      <ContactButton href="#contacts">Предложить работу</ContactButton>
      <ScrollDownButton id="scroll-btn"></ScrollDownButton>
    </WelcomeSection>
  );
};

const WelcomeSection = tw.section`
  relative
  flex
  flex-col
  justify-center
  h-[calc(100vh - 1rem)]
  md:h-[calc(100vh - 5rem)]
`;

const Greeting = tw.p`
  mb-8
  md:mb-12
  text-[#333333]
  font-bold
  sm:text-5xl
  lg:text-6xl
  text-4xl
`;

const AboutMe = tw.p`
  max-w-[800px]
  md:mb-10
  mb-6
  sm:text-2xl
  lg:text-3xl
  text-xl
`;

const Goal = tw.p`
  sm:text-xl
  lg:text-2xl
  text-lg
  font-bold
  mb-8
`;

const ContactButton = styled.a`
  ${tw`
    max-w-max
    p-4
    px-10
    bg-amber-400
    text-[#333333]
    text-sm
    sm:text-base
    rounded-lg
    font-bold
    uppercase
    tracking-wider
    transition
    duration-300
    outline-none

    hocus:scale-110
    hocus:opacity-80
  `}

  font-variant: small-caps;
`;

const scrollAnimation = keyframes`
	0% {
		transform: translateY(0);
	}
	30% {
		transform: translateY(60px);
	}
`;

const SvgIcon = styled.svg`
  ${tw`
    absolute
    bottom-12
    left-1/2
    -translate-x-1/2
    transition
    duration-1000
  `}

  #wheel {
    animation: ${scrollAnimation} ease 2s infinite;
  }
`;

const ScrollDownButton = styled.button`
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

export default Welcome;
