import { useState } from "react";

const Accordion = ({ data, title: Title, content: Content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Title
        data={data}
        onClickHandler={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      />
      <Content data={data} isOpen={isOpen} />
    </>
  );
};

export default Accordion;
