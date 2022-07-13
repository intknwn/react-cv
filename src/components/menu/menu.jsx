import tw, { styled, css } from "twin.macro";
import { NavLink as NavigationLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Menu = () => {
  return (
    <LinksList>
      <LinkItem>
        <NavLink to="/about">Обо мне</NavLink>
      </LinkItem>
      <LinkItem>
        <Link as={HashLink} to="/#skills">
          Навыки
        </Link>
      </LinkItem>
      <LinkItem>
        <Link as={HashLink} to="/#projects">
          Проекты
        </Link>
      </LinkItem>
      <LinkItem>
        <Link as={HashLink} to="/#contacts" smooth>
          Контакты
        </Link>
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

const linkStyles = css`
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

  &.active {
    ${tw`
      pointer-events-none
      cursor-default
    `}

    &:before {
      ${tw`
      content-['']
      absolute
      -bottom-1
      h-1
      w-full
      bg-amber-400
      transition-all
      duration-300
    `}
    }
  }
`;

const Link = styled(HashLink)`
  ${linkStyles}
`;

const NavLink = styled(NavigationLink)`
  ${linkStyles}
`;

export default Menu;
