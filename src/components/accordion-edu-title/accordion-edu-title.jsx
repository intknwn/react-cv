import tw, { styled } from "twin.macro";

const AccordionEduTitle = ({
  data: {
    provider: {
      logo: { url },
      companyName,
      description,
    },
  },
  onClickHandler,
  isOpen,
}) => {
  return (
    <Button type="button" onClick={onClickHandler} isOpen={isOpen}>
      <LogoWrapper>
        <Logo src={url} alt={companyName} />
      </LogoWrapper>
      <Title>
        <Role tw="font-bold">{companyName}</Role>
        <Description>{description}</Description>
      </Title>
    </Button>
  );
};

export default AccordionEduTitle;

const Button = styled.button`
  ${tw`
    appearance-none
    relative
    flex
    md:flex-row
    flex-col
    md:items-center
    w-full
    p-4
  `}

  &:before {
    ${tw`
      content-['']
      absolute
      md:right-8
      right-4
      top-1/2
      md:w-4
      w-3
      md:h-4
      h-3
      border-solid
      border-t-0
      border-r-0
      md:border-b-4
      border-b-[3px]
      md:border-l-4
      border-l-[3px]
      border-[#647c72]

      transition
      duration-1000
      -translate-y-1/2
    `}

    ${({ isOpen }) => (isOpen ? tw`rotate-[135deg]` : tw`-rotate-45`)}
  }
`;

const LogoWrapper = tw.p`
  flex
  md:justify-center
  h-12
  w-32
  md:mr-8
`;

const Logo = tw.img`
  md:mb-0
  mb-2
  w-full
  h-auto
  object-contain
`;

const Title = tw.div`
  text-xl
  text-left
`;

const Role = tw.p`
  hidden
  md:block
`;

const Description = tw.p`
  text-base
`;
