import tw, { styled } from "twin.macro";

const AccordionJobContent = ({
  data: {
    jobData: { company, type, location, duties, achievements },
  },
  isOpen,
}) => {
  return (
    <Content className={isOpen ? `opened` : null}>
      <h3>{company}</h3>
      <p>{type}</p>
      <p>{location}</p>

      <ListTitle>Обязанности:</ListTitle>
      <List>
        {duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </List>
      <ListTitle>Достижения:</ListTitle>
      <List>
        {achievements.map(({ achievement, tasks }, index) => (
          <li key={index}>
            {`${achievement}${tasks.length > 0 ? `:` : ``}`}
            <List>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </List>
          </li>
        ))}
      </List>
    </Content>
  );
};

const Content = styled.div`
  ${tw`
    invisible
    opacity-0
    max-h-0
    md:pl-44
    px-4
    pb-8
    -mt-8
    overflow-hidden
    transition-all
    duration-1000
  `}

  &.opened {
    ${tw`
      visible
      opacity-100
      max-h-screen
      mt-0
    `}
  }
`;

const ListTitle = tw.p`
  pt-4
  mb-2
  font-bold
`;

const List = tw.ul`
  list-disc
  pl-4
`;

export default AccordionJobContent;
