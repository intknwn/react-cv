import { useState } from "react";
import tw, { styled, css } from "twin.macro";
import Modal from "../modal/modal.jsx";
import ProjectModal from "../project-modal/project-modal.jsx";
import { FilterType, Labels } from "../../const";

const ProjectCard = ({ project, project: { images, title, desc, tags } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <CardWrapper
      href="#"
      onClick={(e) => {
        e.preventDefault();
        toggleModal();
      }}
    >
      <Label
        {...{
          isCommercial: project.type === FilterType.COMMERCIAL.type,
          isPractice: project.type === FilterType.PRACTICE.type,
        }}
      >
        {Labels[project.type.toUpperCase()].caption}
      </Label>
      <Card>
        <ImageWrapper>
          {images.map(({ src, alt, srcset, sources }, index) => {
            return (
              <picture key={index}>
                {sources.map(({ type, srcset }, index) => (
                  <source key={index} type={type} srcSet={srcset} />
                ))}
                <Image
                  src={src}
                  srcSet={srcset}
                  width="157"
                  height="209"
                  alt={alt}
                />
              </picture>
            );
          })}
        </ImageWrapper>
        <DescriptionWrapper>
          <ProjectTitle>{title}</ProjectTitle>
          <Description>{desc}</Description>
          <TagsList>
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsList>
        </DescriptionWrapper>
        {isModalOpen && (
          <Modal>
            <ProjectModal project={project} toggleModal={toggleModal} />
          </Modal>
        )}
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = tw.a`
  block
  relative
  shadow-lg
  rounded-lg
  cursor-pointer
  outline-none
  transition
  duration-300
  
  hocus:shadow-2xl
  hocus:scale-105
`;

const Label = styled.div(({ isPractice, isCommercial }) => [
  tw`
    absolute
    px-3
    py-1
    top-3 
    -right-2 
    text-sm
    text-white
    font-bold
    z-10
    rounded
    shadow-xl
  `,
  css`
    text-shadow: 1px 1px 1px rgb(100, 124, 114);
  `,
  isPractice &&
    tw`
      bg-gradient-to-r from-amber-500 to-yellow-400
    `,
  isCommercial &&
    tw`
      bg-gradient-to-r from-purple-500 to-pink-500
    `,
]);

const Card = tw.div`
  flex
  flex-col
  relative
  
  h-96
  rounded-lg
  overflow-hidden
`;

const ImageWrapper = tw.div`
  h-40
  overflow-hidden
  relative
`;

const Image = tw.img`
  absolute
  top-0
  w-full
  h-auto
`;

const DescriptionWrapper = tw.div`
  p-3
  flex
  flex-col
  flex-grow
`;

const Description = tw.p`
  text-base
  mb-8
  max-h-28
  overflow-hidden
`;

const ProjectTitle = tw.h3`
  mb-2
  text-base
`;

const TagsList = tw.ul`
  flex
  flex-wrap
  gap-1
  mt-auto
`;

const Tag = tw.li`
  py-1
  px-2
  font-bold
  text-xs
  bg-[#d5dbdf]
  rounded-lg
`;

export default ProjectCard;
