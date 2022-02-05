import React, { useState, useEffect } from "react";
import tw, { styled, css } from 'twin.macro';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TypeFilters from "../type-filters/type-filters.jsx";
import TechFilters from "../tech-filters/tech-filter.jsx";
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
            .map(({id, type, title, desc, tags, images}) => 
              <CSSTransition
                key={id}
                timeout={500}
                classNames="item"
              >
                <ListItem>
                  <Label
                    {...{
                      isCommercial: type === FilterType.COMMERCIAL.type,
                      isPractice: type === FilterType.PRACTICE.type,
                    }}
                  >
                    {Labels[type.toUpperCase()].caption}
                  </Label>
                  <ProjectCard>
                    <ImageWrapper>
                      {
                        images.map(({src, alt, srcset, sources}, index) => {
                          return (
                            <picture key={index}>
                              {
                                sources.map(({type, srcset}, index) => <source key={index} type={type} srcSet={srcset} />)
                              }
                              <Image src={src} srcSet={srcset} width="157" height="209" alt={alt} />
                            </picture>
                          );
                        })
                      }
                    </ImageWrapper>
                    <DescriptionWrapper>
                      <ProjectTitle>{title}</ProjectTitle>
                      <Description>{desc}</Description>
                      <TagsList>
                        {
                          tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)
                        }
                      </TagsList>
                    </DescriptionWrapper>
                  </ProjectCard>
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
  ${tw`col-span-3`}

  position: relative;
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
    transform: scale(0.95);
  }
`

const ProjectCard = styled.a`
  ${tw`flex flex-col h-96`}

  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.3);
  }
`

const Label = styled.div(({isPractice, isCommercial}) => [
  tw`px-3 py-1 top-3 -right-2 text-sm font-bold`,
  css`
    position: absolute;
    z-index: 1;


    color: #fff;

    border-radius: 5px;

    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    text-shadow: 1px 1px 1px rgb(100, 124, 114);
  `,
  isPractice && css`
    background: linear-gradient(108deg,#ffc341 20%,#ffd701 65%);
  `,
  isCommercial && css`
    background: #63a63e;
  `
]);

const ImageWrapper = styled.div`
  ${tw`h-40 overflow-hidden relative`}
`

const Image = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: auto;
`

const DescriptionWrapper = styled.div`
  ${tw`p-3 flex flex-col flex-grow`}
`

const Description = styled.p`
  ${tw`text-base mb-8 max-h-28 overflow-hidden`}
`

const ProjectTitle = styled.h3`
  ${tw`mb-2 text-base`}
`

const TagsList = styled.li`
  ${tw`flex flex-wrap gap-1 mt-auto`}
`

const Tag = styled.li`
  ${tw`py-1 px-2 font-bold text-xs bg-[#d5dbdf] rounded-lg`}
`

export default Projects;