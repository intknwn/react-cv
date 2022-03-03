import React, { useState, useEffect } from "react";
import tw, { styled, css } from "twin.macro";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TypeFilters from "../type-filters/type-filters.jsx";
import TechFilters from "../tech-filters/tech-filter.jsx";
import ProjectCard from "../project-card/project-card.jsx";
import Slider from "../slider/slider.jsx";
import { defaultTheme } from "../../styles/theme";
import { H2, Section } from "../../styles/components";
import { FilterType, FilterTech, Labels } from "../../const";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [typeFilter, setTypeFilter] = useState(FilterType.ALL.type);
  const [techFilters, setTechFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [mediaQueryList] = useState(window.matchMedia("(max-width: 640px)"));
  const [isMobile, setMobile] = useState(mediaQueryList.mathes);

  async function getProjects() {
    const res = await fetch("/api/projects");
    const json = await res.json();

    setProjects(json.projects);
  }

  const filterProjects = () => {
    const isAll = typeFilter === FilterType.ALL.type;

    const filtered = projects.filter(({ type, tags }) => {
      const isSameType = type === typeFilter;
      const isSameTech = techFilters
        .map(({ tech }) => tags.includes(tech))
        .every(Boolean);

      return (isAll || isSameType) && isSameTech;
    });

    setFilteredProjects(filtered);
  };

  const getProjectsByCond = () => {
    return typeFilter === FilterType.ALL.type &&
      techFilters.length === Object.keys(FilterTech).length
      ? projects
      : filteredProjects;
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, typeFilter, techFilters]);

  useEffect(() => {
    const mediaChangeHandler = () => setMobile(mediaQueryList.matches);
    mediaQueryList.addEventListener(`change`, mediaChangeHandler);

    mediaChangeHandler();

    return () =>
      mediaQueryList.removeEventListener(`change`, mediaChangeHandler);
  }, []);

  return (
    <Section>
      <H2>Что делал</H2>
      <ProjectsWrapper>
        <FiltersWrapper>
          <Filters>
            <TypeFilters
              activeFilter={typeFilter}
              onFilterChange={setTypeFilter}
            />
            <TechFilters
              checkedFilters={techFilters}
              onFilterChange={setTechFilters}
            />
          </Filters>
        </FiltersWrapper>
        {isMobile ? (
          <Slider>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Slider>
        ) : (
          <TransitionGroup component={List}>
            {filteredProjects.map((project) => (
              <CSSTransition key={project.id} timeout={500} classNames="item">
                <ListItem>
                  <Label
                    {...{
                      isCommercial: project.type === FilterType.COMMERCIAL.type,
                      isPractice: project.type === FilterType.PRACTICE.type,
                    }}
                  >
                    {Labels[project.type.toUpperCase()].caption}
                  </Label>
                  <ProjectCard project={project} />
                </ListItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ProjectsWrapper>
    </Section>
  );
};

const FiltersWrapper = tw.div`
  xl:col-span-2
  lg:col-span-3
  md:col-span-4
  col-span-12
`;

const ProjectsWrapper = tw.div`
  grid
  grid-flow-col
  grid-cols-12
  md:gap-7
  gap-0
  gap-y-7
  grid-rows-[auto auto]
  md:grid-rows-none
`;

const Filters = tw.div`
  sticky
  top-0
`;

const List = tw.ul`
  grid
  grid-flow-row
  grid-cols-12
  gap-7
  xl:col-span-10
  lg:col-span-9
  md:col-span-8
  col-span-12
`;

const ListItem = styled.li`
  ${tw`
    xl:col-span-3
    lg:col-span-4
    md:col-span-6
    col-span-4
    relative
    list-none
  `}

  &.item-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.item-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms ease-in;
  }
  &.item-exit {
    opacity: 1;
  }
  &.item-exit-active {
    opacity: 0;
    transition: all 500ms ease-in;
    transform: scale(0.95);
  }
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

export default Projects;
