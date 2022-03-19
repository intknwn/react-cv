import { useEffect } from "react";
import tw, { styled } from "twin.macro";
import { keyframes } from "styled-components";
import { HeaderSection } from "../../styles/components";

const Header = () => {
  useEffect(() => {
    const scrollHandler = () => {
      let isFired = false;

      return () => {
        if (isFired) return;

        const animation = document.getElementById(`scroll-animation`);
        animation.style.opacity = 0;
        isFired = true;
      };
    };

    window.addEventListener(`scroll`, scrollHandler());

    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, []);

  return (
    <HeaderSection>
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
      <SvgIcon
        id="scroll-animation"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1.5"
        clipRule="evenodd"
        viewBox="0 0 247 390"
      >
        <path
          id="wheel"
          fill="none"
          stroke="#555555"
          strokeWidth="20"
          d="M123.359 79.775v72.843"
        ></path>
        <path
          fill="none"
          stroke="#555555"
          strokeWidth="20"
          d="M236.717 123.359C236.717 60.794 185.923 10 123.359 10 60.794 10 10 60.794 10 123.359v143.237c0 62.565 50.794 113.359 113.359 113.359 62.564 0 113.358-50.794 113.358-113.359V123.359z"
        ></path>
      </SvgIcon>
    </HeaderSection>
  );
};

const Greeting = tw.p`
  sm:mb-12
  mb-8
  text-[#333333]
  font-bold
  sm:text-6xl
  text-4xl
`;

const AboutMe = tw.p`
  max-w-[800px]
  sm:mb-10
  mb-6
  sm:text-3xl
  text-xl
`;

const Goal = tw.p`
  sm:text-2xl
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
    text-base
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

export default Header;
