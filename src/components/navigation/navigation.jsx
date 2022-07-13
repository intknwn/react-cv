import { useState } from "react";
import tw, { styled } from "twin.macro";
import Burger from "../burger/burger.jsx";
import Menu from "../menu/menu.jsx";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Nav isOpen={isOpen}>
        <Menu />
      </Nav>
    </header>
  );
};

const Nav = styled.nav(({ isOpen }) => [
  tw`
    fixed
    top-0
    md:left-0
    right-0
    flex
    md:justify-end
    md:w-full
    sm:w-72
    w-60
    md:h-auto
    h-screen

    md:pt-4
    pt-16
    sm:pl-12
    pl-8
    md:pb-6
    md:bg-[rgba(242, 244, 245, 0.7)]
    bg-white
    backdrop-blur
    z-10
    transition
    duration-300
    md:translate-x-0
    translate-x-full
    md:shadow-none
  `,
  isOpen && tw`translate-x-0 shadow-xl`,
]);

export default Navigation;
