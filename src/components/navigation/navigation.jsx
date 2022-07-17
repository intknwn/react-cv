import tw, { styled } from "twin.macro";
import { useEffect, useRef, useState } from "react";

import Burger from "../burger/burger.jsx";
import Menu from "../menu/menu.jsx";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const clickHandler = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("click", clickHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [isOpen]);

  return (
    <>
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <div ref={ref}>
        <Nav isOpen={isOpen}>
          <Menu setIsOpen={setIsOpen} />
        </Nav>
      </div>
    </>
  );
};

const Nav = styled.nav(({ isOpen }) => [
  tw`
    fixed
    top-0
    lg:left-0
    right-0
    flex
    lg:w-full
    sm:w-72
    w-60
    lg:h-auto
    h-screen

    lg:pt-4
    pt-16
    sm:pl-12
    pl-8
    lg:pb-6
    lg:bg-[rgba(242, 244, 245, 0.7)]
    bg-white
    backdrop-blur
    z-30
    transition
    duration-300
    lg:translate-x-0
    translate-x-full
    lg:shadow-none
  `,
  isOpen && tw`translate-x-0 shadow-xl`,
]);

export default Navigation;
