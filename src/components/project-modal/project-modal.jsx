import { useEffect } from "react";
import tw, { styled, css } from "twin.macro";

const ProjectModal = ({
  project,
  project: { title, url, repository, images, features },
  toggleModal,
}) => {
  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === `Escape`) {
        toggleModal();
      }
    };

    window.addEventListener(`keydown`, keyDownHandler);

    return () => window.removeEventListener(`keydown`, keyDownHandler);
  });

  useEffect(() => {
    document.body.style.position = "fixed";
    document.body.style.top = 0;
    document.body.style.right = 0;
    document.body.style.bottom = 0;
    document.body.style.left = 0;

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.right = "";
      document.body.style.bottom = "";
      document.body.style.left = "";
    };
  }, []);

  return (
    <Overlay>
      <ContentArea
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CloseButton type="button" onClick={toggleModal}>
          <span tw="sr-only">Close menu</span>
          <svg
            tw="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </CloseButton>
        <div>
          <ImageLink href={url} target="_blank">
            {images.map(({ src, alt, srcset, sources }, index) => {
              return (
                <Picture key={index}>
                  {sources.map(({ type, srcset }, index) => (
                    <source key={index} type={type} srcSet={srcset} />
                  ))}
                  <Image
                    src={src}
                    srcSet={srcset}
                    width="250"
                    height="333"
                    alt={alt}
                  />
                </Picture>
              );
            })}
          </ImageLink>
        </div>
        <Description>
          <ProjectTitle>{title}</ProjectTitle>
          <Link href={url} target="_blank" title="Демо">
            <span tw="sr-only">Демо</span>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="currentColor"
            >
              <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path>
            </Icon>
          </Link>
          <Link href={repository} target="_blank" title="Репозиторий">
            <span tw="sr-only">Репозиторий</span>
            <Icon
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M17.791 46.836A1.999 1.999 0 0019 45v-5.4c0-.197.016-.402.041-.61A.611.611 0 0119 39h-3.6c-1.5 0-2.8-.6-3.4-1.8-.7-1.3-1-3.5-2.8-4.7-.3-.2-.1-.5.5-.5.6.1 1.9.9 2.7 2 .9 1.1 1.8 2 3.4 2 2.487 0 3.82-.125 4.622-.555C21.356 34.056 22.649 33 24 33v-.025c-5.668-.182-9.289-2.066-10.975-4.975-3.665.042-6.856.405-8.677.707a21.537 21.537 0 01-.151-.987c1.797-.296 4.843-.647 8.345-.714a8.162 8.162 0 01-.291-.849c-3.511-.178-6.541-.039-8.187.097-.02-.332-.047-.663-.051-.999 1.649-.135 4.597-.27 8.018-.111a9.832 9.832 0 01-.13-1.543c0-1.7.6-3.5 1.7-5-.5-1.7-1.2-5.3.2-6.6 2.7 0 4.6 1.3 5.5 2.1C21 13.4 22.9 13 25 13s4 .4 5.6 1.1c.9-.8 2.8-2.1 5.5-2.1 1.5 1.4.7 5 .2 6.6 1.1 1.5 1.7 3.2 1.6 5 0 .484-.045.951-.11 1.409 3.499-.172 6.527-.034 8.204.102-.002.337-.033.666-.051.999-1.671-.138-4.775-.28-8.359-.089a8.272 8.272 0 01-.325.98c3.546.046 6.665.389 8.548.689-.043.332-.093.661-.151.987-1.912-.306-5.171-.664-8.879-.682-1.665 2.878-5.22 4.755-10.777 4.974V33c2.6 0 5 3.9 5 6.6V45c0 .823.498 1.53 1.209 1.836C41.37 43.804 48 35.164 48 25 48 12.318 37.683 2 25 2S2 12.318 2 25c0 10.164 6.63 18.804 15.791 21.836z" />
            </Icon>
          </Link>
          <FeaturesList>
            {features.map((feature, index) => (
              <Feature key={index}>{feature}</Feature>
            ))}
          </FeaturesList>
        </Description>
      </ContentArea>
    </Overlay>
  );
};

const Overlay = tw.div`
  flex
  justify-center
  items-center
  fixed
  top-0
  right-0
  bottom-0
  left-0
  bg-white/75
  z-50
`;

const ContentArea = tw.div`
  flex
  md:flex-row
  flex-col
  md:items-start
  items-center
  relative
  xl:w-2/3
  md:w-4/5
  md:h-auto
  w-full
  h-full
  md:p-16
  p-10
  bg-white
  rounded-xl
  shadow-lg
  overflow-y-auto
`;

const CloseButton = tw.button`
  absolute
  top-2
  right-2
bg-white
  rounded-md
  p-2
  inline-flex
  items-center
  justify-center
  text-gray-400
hover:text-gray-500
hover:bg-gray-100
  focus:outline-none
  focus:ring-2
  focus:ring-inset
focus:ring-gray-700
`;

const ImageLink = styled.a(() => [
  tw`
    block
    lg:w-[250px]
    lg:h-[333px]
    w-[200px]
    h-[266px]
    mb-7
    rounded
    shadow-xl
    overflow-hidden
    transition-transform
    duration-1000
    translate-y-0
  `,
  css`
    & > picture,
    & > picture {
      transform: translateY(0);
      transition: transform 1000ms;
    }

    &:hover > picture,
    &:focus > picture {
      transform: translateY(-100%);
      transition: transform 1000ms;
    }
  `,
]);

const Picture = tw.picture`
  block
`;

const Image = tw.img`
  block
  w-full
  h-auto
`;

const Link = tw.a`
  inline-block
  align-top
  mr-1
  text-sm
  hover:opacity-70
`;

const Icon = tw.svg`
  lg:w-[30px]
  lg:h-[30px]
  w-[25px]
  h-[25px]
`;

const Description = tw.div`
  lg:pl-20
  md:pl-10
`;

const ProjectTitle = tw.h3`
  inline-block
  align-middle
  lg:text-2xl
  md:text-lg
  text-xl
  mr-2
  mb-4
  pl-4
`;

const FeaturesList = tw.ul`
  mb-2
  pl-4
  list-disc
`;

const Feature = tw.li`
  lg:text-lg
  md:text-base
  text-sm
`;

export default ProjectModal;
