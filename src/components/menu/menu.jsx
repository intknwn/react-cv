import { NavLink as NavigationLink, useLocation } from "react-router-dom";
import tw, { css, styled } from "twin.macro";

import { HashLink } from "react-router-hash-link";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <LinksList>
      {pathname !== "/" && (
        <HomeLinkItem>
          <HomeLink to="/">Главная</HomeLink>
        </HomeLinkItem>
      )}
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
        <NavLink to="/about">Обо мне</NavLink>
      </LinkItem>
      <LinkItem>
        <Link as={HashLink} to="#contacts">
          Контакты
        </Link>
      </LinkItem>
    </LinksList>
  );
};

const LinksList = tw.ul`
  flex
  w-full
  lg:flex-row
  lg:justify-end
  flex-col
`;

const LinkItem = tw.li`
  lg:mr-12
  lg:mb-0
  mb-6
`;

const HomeLinkItem = styled(LinkItem)`
  ${tw`mr-auto`}
`;

const linkStyles = css`
  ${tw`
    inline-block
    text-3xl
    lg:text-[#555555]
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

const HomeLink = styled(NavigationLink)`
  ${linkStyles}

  ${tw`self-start`}

  &:after {
    ${tw`
      content-['']
      hidden
      lg:block
      absolute
      top-1/2
      w-3
      h-3
      -left-5
      border-[3px]
      border-[#555555]
      border-t-0
      border-r-0
      -translate-y-1/3
      rotate-45
    `}
  }
`;

export default Menu;
