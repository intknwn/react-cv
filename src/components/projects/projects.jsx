import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FilterTech, FilterType, Labels } from "../../const";
import React, { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";

import { H2 } from "../../styles/components";
import ProjectCard from "../project-card/project-card.jsx";
import Slider from "../slider/slider.jsx";
import TechFilters from "../tech-filters/tech-filter.jsx";
import TypeFilters from "../type-filters/type-filters.jsx";
import { getData } from "../../helpers";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [typeFilter, setTypeFilter] = useState(FilterType.ALL.type);
  const [techFilters, setTechFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [mediaQueryList] = useState(window.matchMedia("(max-width: 640px)"));
  const [isMobile, setMobile] = useState(mediaQueryList.mathes);

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

  useEffect(() => {
    getData("/api/projects", (json) => setProjects(json.projects));
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
    <ProjectsSection id="projects">
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
                  <ProjectCard project={project} />
                </ListItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ProjectsWrapper>
    </ProjectsSection>
  );
};

const ProjectsSection = tw.section`
  mb-0
  md:mb-32
`;

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
  top-8
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

export default Projects;
