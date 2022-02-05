import tw, { styled } from 'twin.macro';
import { Fragment } from "react";
import { Title } from "../../styles/components"
import { defaultTheme } from "../../styles/theme";
import {FilterTech} from "../../const";

const TechFilters = ({checkedFilters, onFilterChange}) => {
  const changeHandler = (filter, isChecked) => {
    if (isChecked) {
      onFilterChange(checkedFilters.filter((checkedFilter) => checkedFilter.tech !== filter.tech));

      return;
    }

    onFilterChange([...checkedFilters, filter]) 
  };

  return (
    <>
      <Title>Тип проекта</Title>
      {
        Object.values(FilterTech).map((filter) => {
          const {tech, caption} = filter;
          const isChecked = checkedFilters.some((filter) => filter.tech === tech);

          return (
            <Fragment key={tech}>
              <CheckBoxInput className="visually-hidden" type="checkbox" name={tech} id={tech} onChange={() => changeHandler(filter, isChecked)} checked={isChecked}/>
              <Label htmlFor={tech}>{caption}</Label>
            </Fragment>
          );
        })
      }
    </>
  );
};

const CheckBoxInput = styled.input`
  & + label {
    &:after {
      content: "";
      position: absolute;
      left: 4px;
      top: 50%;

      display: block;
      width: 18px;
      height: 12px;

      border: 5px solid ${defaultTheme.color.titleSecondary};
      border-top: none;
      border-right: none;

      opacity: 0;
      transform: translateY(-80%) rotate(-45deg);

      transition: opacity 300ms;
    }
  }

  &:checked + label {
    &:after {
      opacity: 1;
    }
  }
`

const Label = styled.label`
  position: relative;
  display: block;
  padding-left: 30px;
  margin-bottom: 8px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;

    display: block;
    width: 20px;
    height: 20px;

    border: 2px solid ${defaultTheme.color.titleSecondary};

    transform: translateY(-50%);
  }
`

export default TechFilters;