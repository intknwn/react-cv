import { useState, useEffect } from "react";
import { H2 } from "../../styles/components";
import tw from "twin.macro";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  async function getSkills() {
    const res = await fetch("/api/skills");
    const json = await res.json();

    setSkills(json.skills);
  }

  useEffect(() => {
    getSkills();
  }, []);

  return (
    <section>
      <H2>Что умею</H2>
      <SkillsList>
        {skills.map(({ name, logoUrl }) => {
          return (
            <SkillItem key={name}>
              <TechName>{name}</TechName>
              <LogoImg src={logoUrl} width="50" height="50" alt={name} />
            </SkillItem>
          );
        })}
      </SkillsList>
    </section>
  );
};

const SkillsList = tw.ul`
  grid
  grid-flow-row
  grid-cols-12
  gap-2
`;

const SkillItem = tw.li`
  xl:col-span-2
  sm:col-span-3
  col-span-4
  flex
  sm:flex-row
  flex-col
  items-center
  justify-center
  px-3
  md:pl-6
  py-2
  bg-[#f2f4f5]
  transition
  duration-300
  shadow-lg
  hover:shadow-2xl
  hover:scale-110
  rounded-lg
`;

const TechName = tw.span`
  sm:order-none
  order-2
  lg:text-base
  md:text-sm
  text-xs
`;

const LogoImg = tw.img`
  sm:order-none
  order-1
  lg:w-[50px]
  lg:h-[50px]
  md:w-[40px]
  md:h-[40px]
  w-[30px]
  h-[30px]
  sm:mb-auto
  mb-2
  sm:ml-auto
`;

export default Skills;
