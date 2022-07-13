import { useState } from "react";
import Modal from "../modal/modal.jsx";
import ProjectModal from "../project-modal/project-modal.jsx";

const ProjectLink = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <a
        href="#"
        tw="underline"
        onClick={(e) => {
          e.preventDefault();
          toggleModal();
        }}
      >
        «{project.title}»
      </a>
      {isModalOpen && (
        <Modal>
          <ProjectModal project={project} toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default ProjectLink;
