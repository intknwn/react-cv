import { useState, useEffect } from "react";
import {H2} from "../../styles/components";
import TypeFilters from "../type-filters/type-filters.jsx";
import {FilterType} from "../../const";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [typeFilter, setTypeFilter] = useState(FilterType.ALL.type);
  const [filteredProjects, setFilteredProjects] = useState([]);

  async function getProjects() {
    const res = await fetch("/api/projects");
    const json = await res.json();

    setProjects(json.projects);
  }

  const filterProjects = () => {
    if (typeFilter === FilterType.ALL.type) {
      return;
    }

    const filteredProjects = projects.filter((project) => project.type === typeFilter);

    setFilteredProjects(filteredProjects);
  };

  const getProjectsByCond = () => {
    return typeFilter === FilterType.ALL.type ? projects : filteredProjects;
  };


  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [typeFilter]);

  return (
    <section>
      <H2>Что делал</H2>
      <TypeFilters 
        activeFilter={typeFilter}
        onFilterChange={setTypeFilter}
      />
      {
        getProjectsByCond()
          .map((project) => {
            return (
              <div key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {
                    project.features.map((feature, index) => <li key={index}>{feature}</li>)
                  }
                </ul>
              </div>
            );
          })
      }
    </section>
  );
};

export default Projects;