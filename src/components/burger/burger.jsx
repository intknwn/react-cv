import tw, { styled } from "twin.macro";

const Burger = ({ isOpen, setIsOpen }) => {
  return (
    <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <div />
      <div />
      <div />
    </BurgerButton>
  );
};

const BurgerButton = styled.button`
  ${tw`
    lg:hidden
    fixed
    top-0
    right-0
    flex
    flex-col
    justify-around
    w-20
    h-20
    bg-transparent
    border-none
    cursor-pointer
    p-4
    pb-8
    pl-8
    z-40
    rounded-bl-full

    bg-amber-400

    hocus:outline-none
  `}

  div {
    ${tw`
      relative
      w-full
      h-1
      bg-[#333333]
      transition
      duration-300
      origin-[1px]
    `}

    &:nth-child(1) {
      ${({ isOpen }) => isOpen && tw`rotate-45 translate-x-[5px]`}
    }

    &:nth-child(2) {
      ${({ isOpen }) => isOpen && tw`opacity-0`}
    }

    &:nth-child(3) {
      ${({ isOpen }) => isOpen && tw`-rotate-45 translate-x-[5px]`}
    }
  }
`;

export default Burger;
