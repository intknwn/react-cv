import tw, { styled } from "twin.macro";

const Menu = () => {
  return (
    <LinksList>
      <LinkItem>
        <Link href="#">Обо мне</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#skills">Навыки</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#projects">Проекты</Link>
      </LinkItem>
      <LinkItem>
        <Link href="#contacts">Контакты</Link>
      </LinkItem>
    </LinksList>
  );
};

const LinksList = tw.ul`
  flex
  md:flex-row
  flex-col

`;

const LinkItem = tw.li`
  md:mr-12
  md:mb-0
  mb-6
`;

const Link = styled.a`
  ${tw`
    inline-block
    text-3xl
    md:text-[#555555]
    text-[#333333]
    relative
    outline-none
  `}

  &:before {
    ${tw`
      content-['']
      absolute
      -bottom-1
      h-1
      w-0
      bg-amber-400
      transition-all
      duration-300
    `}
  }

  &:focus:before,
  &:hover:before {
    ${tw`
      w-full
    `}
  }
`;

export default Menu;
