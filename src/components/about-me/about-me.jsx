import { H1, H2, Section } from "../../styles/components";
import { getData, getDate } from "../../helpers.js";
import tw, { css, styled } from "twin.macro";
import { useEffect, useState } from "react";

import Accordion from "../accordion/accordion.jsx";
import AccordionEduContent from "../accordion-edu-content/accordion-edu-content.jsx";
import AccordionEduTitle from "../accordion-edu-title/accordion-edu-title.jsx";
import AccordionJobContent from "../accordion-job-content/accordion-job-content.jsx";
import AccordionJobTitle from "../accordion-job-title/accordion-job-title.jsx";
import ContactMe from "../contact-me/contact-me.jsx";

const AboutMe = () => {
  const [contacts, setContacts] = useState([]);
  const [employment, setEmployment] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData("/api/contacts", (json) => setContacts(json.contacts));
  }, []);

  useEffect(() => {
    getData("/api/projects", (json) => setProjects(json.projects));
  }, []);

  useEffect(() => {
    getData("/api/employment", (json) => setEmployment(json.employment));
  }, []);

  useEffect(() => {
    getData("/api/education", (json) => setEducation(json.education));
  }, []);

  return (
    <>
      <AboutMeHeading>Обо мне</AboutMeHeading>
      <AboutMeSection>
        <PhotoWrapper>
          <picture>
            <source
              type="image/webp"
              media="(max-width: 767px)"
              srcSet="img/nemitya-mobile@1x.webp 1x, img/nemitya-mobile@2x.webp 2x"
            />
            <source
              media="(max-width: 767px)"
              srcSet="img/nemitya@1x.png 1x, img/nemitya@2x.png 2x"
            />
            <source
              type="image/webp"
              srcSet="img/nemitya@1x.webp 1x, img/nemitya@2x.webp 2x"
            />
            <Photo
              src="img/nemitya@1x.png"
              srcSet="img/nemitya@2x.png 2x"
              width="250"
              height="250"
              alt="Митя Неклюдов"
            />
          </picture>
          <Location>Санкт-Петербург, Россия</Location>
          <SocialList>
            {contacts.map(({ name, url }) => (
              <ListItem key={name}>
                <SocialLink href={url} aria-labelledby={name}>
                  <span tw="sr-only" aria-labelledby={name}>
                    {name}
                  </span>
                  <svg role="img" width="30" height="30">
                    <use href={`img/sprite_auto.svg#icon-${name}`}></use>
                  </svg>
                </SocialLink>
              </ListItem>
            ))}
          </SocialList>
        </PhotoWrapper>
        <About>
          <Statement>
            Я ❤️ чистый код, удобные интерфейсы, и нетривиальные задачи 👨‍💻
          </Statement>
          <Statement>Хочу развиваться во фронтенд разработке 📈</Statement>
          <Statement>
            Ответственно отношусь к работе, и мне важен качественный результат
            🔥
          </Statement>
          <Statement>Люблю вызовы и не боюсь сложных задач 💪</Statement>
          <Statement>
            Знаю английский язык на уровне upper-intermediate 🇬🇧
          </Statement>
          <Statement>Занимаюсь серфингом 🏄 и йогой 🧘</Statement>
        </About>
      </AboutMeSection>
      <Section id="employment">
        <H2>Где работал</H2>
        <JobsList>
          {employment.map((jobData, index) => (
            <AccordionItem key={index} date={jobData.date}>
              <Accordion
                data={{ jobData }}
                title={AccordionJobTitle}
                content={AccordionJobContent}
              />
            </AccordionItem>
          ))}
        </JobsList>
      </Section>
      <Section>
        <H2>Где учился</H2>
        <ul>
          {education.map((provider, index) => (
            <AccordionItem key={index}>
              <Accordion
                data={{ provider, projects }}
                title={AccordionEduTitle}
                content={AccordionEduContent}
              />
            </AccordionItem>
          ))}
        </ul>
      </Section>
      <ContactMe />
    </>
  );
};

const AboutMeSection = tw.section`
  flex
  md:flex-row
  flex-col
  md:pt-20
  md:mb-20
  mb-10
`;

const PhotoWrapper = tw.div`
  flex
  flex-col
  items-center
  md:max-w-max
  md:mb-0
  mb-10
`;

const Photo = tw.img`
  rounded-full
  mb-5
  w-48
  h-48
  sm:w-64
  sm:h-64
`;

const Location = styled.p`
  ${tw`
    relative
    mb-3
    ml-7
    text-xl
  `}

  &:before {
    ${tw`
      absolute
      content-[url('img/icon-pin.svg')]
      -left-7
      top-1/2
      block
      w-6
      h-6
      -translate-y-1/2
    `}
  }
`;

const SocialList = tw.ul`
  flex
`;

const ListItem = tw.li`
  mr-4
`;

const SocialLink = styled.a`
  span {
    ${tw`sr-only`}
  }
  svg {
    ${tw`
      fill-[#647c72]
      transition
      duration-300
    `}
  }

  &:hover,
  &:focus {
    svg {
      ${tw`scale-125 fill-[#fbbf24]`}
    }
  }
`;

const AboutMeHeading = styled(H1)`
  ${tw`md:hidden`}
`;

const About = tw.div`
  flex
  flex-col
  md:w-1/2
  md:pt-12
  text-xl
  mx-auto
`;

const Statement = tw.p`
  text-xl
  mb-3
`;

const JobsList = tw.ul`
  pl-14
`;

const AccordionItem = styled.li(({ date }) => [
  tw`
  relative
bg-white
  rounded-lg
  shadow-lg
  mb-4
`,
  date &&
    css`
      &:before {
        content: ${getDate(date)};

        ${tw`
          absolute
          top-1/2
          -left-16
          bg-[#d5dbdf]
          text-center
          text-sm
          font-bold
          w-12
          h-12
          rounded-full
          leading-[3rem]
          z-10
          -translate-y-1/2
        `};
      }

      &:after {
        ${tw`
          content-['']
          absolute
          top-1
          -left-10
          w-2
          h-[calc(100% + 1rem)]
          z-0
        `}

        background: linear-gradient(180deg, #d5dbdf, #d5dbdf 70%, transparent 70%, transparent 100%);
        background-size: 2px 8px;
        background-repeat: repeat-y;
      }

      &:last-child {
        &:after {
          ${tw`h-full`}
        }
      }
    `,
]);

export default AboutMe;
