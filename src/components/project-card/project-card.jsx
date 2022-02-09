import { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";
import Modal from "../modal/modal.jsx";
import ProjectModal from "../project-modal/project-modal.jsx";

const ProjectCard = ({ project, project: { images, title, desc, tags } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <Card onClick={toggleModal}>
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
      {isModalOpen ? (
        <Modal>
          <ProjectModal project={project} toggleModal={toggleModal} />
        </Modal>
      ) : null}
    </Card>
  );
};

const Card = tw.div`
  flex
  flex-col
  relative
  
  h-96
  overflow-hidden

  cursor-pointer

  rounded-lg
  shadow-lg
  
  hover:shadow-2xl
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
