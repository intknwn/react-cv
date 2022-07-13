import tw, { styled } from "twin.macro";

const AccordionJobTitle = ({
  data: {
    jobData: {
      logo: { url, width, height },
      company,
      role,
      date,
    },
  },
  onClickHandler,
  isOpen,
}) => {
  return (
    <Button type="button" onClick={onClickHandler} isOpen={isOpen}>
      <LogoWrapper>
        <Logo src={url} width={width} height={height} alt={company} />
      </LogoWrapper>
      <Title>
        <Role tw="font-bold">{role}</Role>
        <Duration>
          {new Date(date.start).toLocaleDateString("ru-RU", {
            year: "numeric",
            month: "long",
          })}
          {" — "}
          {date.end
            ? new Date(date.end).toLocaleDateString("ru-RU", {
                year: "numeric",
                month: "long",
              })
            : "по настоящее время"}
        </Duration>
      </Title>
    </Button>
  );
};

export default AccordionJobTitle;

const Button = styled.button`
  ${tw`
    appearance-none
    relative
    flex
    md:flex-row
    flex-col
    md:items-center
    w-full
    p-3
    pr-12
    sm:p-4
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

const LogoWrapper = tw.div`
  flex
  md:justify-center
  h-12
  w-32
  mr-8
`;

const Logo = tw.img`
  md:mb-0
  sm:mb-2
  mb-1
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
  max-w-md
`;

const Duration = tw.p`
  md:text-lg
  text-base
`;
