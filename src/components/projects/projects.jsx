import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TypeFilters from "../type-filters/type-filters.jsx";
import TechFilters from "../tech-filters/tech-filter.jsx";
import {H2} from "../../styles/components";
import {FilterType, FilterTech} from "../../const";
import styled from "styled-components";

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
      <TypeFilters 
        activeFilter={typeFilter}
        onFilterChange={setTypeFilter}
      />
      <TechFilters 
        checkedFilters={techFilters}
        onFilterChange={setTechFilters}
      />
      <TransitionGroup component="ul">
      {
        filteredProjects
          .map((project) => 
            <CSSTransition
              key={project.id}
              timeout={500}
              classNames="item"
            >
              <ListItem>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {
                    project.features.map((feature, index) => <li key={index}>{feature}</li>)
                  }
                </ul>
                <ul>
                  {
                    project.tags.map((tag, index) => <li key={index}>{`#` + tag}</li>)
                  }
                </ul>
              </ListItem>
            </CSSTransition>
          )
      }
      </TransitionGroup>
    </section>
  );
};

const ListItem = styled.li`
  list-style: none;

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
    transform: scale(0.9);
  }
`

export default Projects;