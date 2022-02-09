import React, { useState, useEffect } from "react";
import tw, { styled, css } from 'twin.macro';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TypeFilters from "../type-filters/type-filters.jsx";
import TechFilters from "../tech-filters/tech-filter.jsx";
import ProjectCard from "../project-card/project-card.jsx";
import { defaultTheme } from "../../styles/theme"
import {H2} from "../../styles/components";
import {FilterType, FilterTech, Labels} from "../../const";



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [typeFilter, setTypeFilter] = useState(FilterType.ALL.type);
  const [techFilters, setTechFilters] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  async function getProjects() {
    const res = await fetch("/api/projects");
    const json = await res.json();

    setProjects(json.projects);
  }

  const filterProjects = () => {
    const isAll = typeFilter === FilterType.ALL.type;
    
    const filtered = projects.filter(({type, tags}) => {
      const isSameType = type === typeFilter;
      const isSameTech = techFilters.map(({tech}) => tags.includes(tech)).every(Boolean);
      
      return (isAll || isSameType) && isSameTech;
    });

    setFilteredProjects(filtered);
  };

  const getProjectsByCond = () => {
    return (typeFilter === FilterType.ALL.type) && (techFilters.length === Object.keys(FilterTech).length) ? projects : filteredProjects;
  };

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, typeFilter, techFilters]);

  return (
    <section>
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
        <TransitionGroup component={List}>
        {
          filteredProjects
            .map((project) => 
              <CSSTransition
                key={project.id}
                timeout={500}
                classNames="item"
              >
                <ListItem>
                  <Label
                    {...{
                      isCommercial: project.type === FilterType.COMMERCIAL.type,
                      isPractice: project.type === FilterType.PRACTICE.type,
                    }}
                  >
                    {Labels[project.type.toUpperCase()].caption}
                  </Label>
                  <ProjectCard project={project}/>
                </ListItem>
              </CSSTransition>
            )
        }
        </TransitionGroup>
      </ProjectsWrapper>
    </section>
  );
};

const FiltersWrapper = styled.div`
  ${tw`col-span-2`}
  color: ${defaultTheme.color.primary}
`

const ProjectsWrapper = styled.div`
  ${tw`grid grid-flow-col grid-cols-12 gap-7`}
`

const Filters = styled.div`
  position: sticky;
  top: 0;
`

const List = styled.ul`
  ${tw`grid grid-flow-row grid-cols-12 gap-7 col-span-10`}
`

const ListItem = styled.li`
  ${tw`col-span-3 relative list-none`}

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
`

const Label = styled.div(({isPractice, isCommercial}) => [
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
  isPractice && css`
    background: linear-gradient(108deg,#ffc341 20%,#ffd701 65%);
  `,
  isCommercial && css`
    background: #63a63e;
  `
]);

export default Projects;