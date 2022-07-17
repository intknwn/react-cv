import tw, { styled } from "twin.macro";

import ProjectLink from "../project-link/project-link.jsx";
import { formatDate } from "../../helpers";

const AccordionEduContent = ({
  data: {
    provider: { courses },
    projects,
  },
  isOpen,
}) => {
  return (
    <Content className={isOpen ? `opened` : null}>
      <List>
        {courses.map(
          (
            { name, date, achievements, certificate, project: { id } },
            index
          ) => {
            const project = projects.find((proj) => proj.id === id);

            return (
              <ListItem key={index}>
                <Description>
                  <h4>{name}</h4>
                  <Duration>
                    {formatDate(date.start)}
                    {" — "}
                    {date.end ? formatDate(date.end) : "по настоящее время"}
                  </Duration>

                  <ListTitle>При прохождении курса научился:</ListTitle>
                  <AchievementsList>
                    {achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </AchievementsList>
                </Description>
                <ImageWrapper>
                  <CertificateLink href={certificate.url}>
                    <picture>
                      <source
                        type="image/webp"
                        srcSet={`${certificate.src.webp.x1} 1x, ${certificate.src.webp.x2} 2x`}
                      />
                      <img
                        src={certificate.src.png.x1}
                        srcSet={`${certificate.src.png.x2} 2x`}
                        width="150"
                        height="211"
                        alt={certificate.desc}
                      />
                    </picture>
                  </CertificateLink>
                  <p>
                    Защитил проект <br />
                    <ProjectLink project={project} />
                  </p>
                </ImageWrapper>
              </ListItem>
            );
          }
        )}
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
      max-h-[100%]
      mt-0
    `}
  }
`;

const Description = tw.div`
  sm:w-[60%]
`;

const ListTitle = tw.p`
  pt-4
  mb-2
  font-bold
`;

const List = tw.ul`
  list-none
`;

const ListItem = tw.li`
  flex
  flex-col
  sm:flex-row
  mb-6
  sm:mb-10
  pb-6
  sm:pb-10
  border-b
  border-[#dfe9e4]
  last:border-0
`;

const AchievementsList = tw.ul`
  list-disc
  pl-5
  mb-5
`;

const Duration = tw.p`
  mb-2
`;

const ImageWrapper = tw.div`
  relative
  flex
  flex-col
  flex-grow
  p-5
  items-stretch
  text-center
  overflow-visible
`;

const CertificateLink = tw.a`
  mb-5
  self-center
  transition
  hover:scale-110
`;

export default AccordionEduContent;
