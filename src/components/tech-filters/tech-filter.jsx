import tw, { styled } from "twin.macro";
import { Fragment } from "react";
import { Title } from "../../styles/components";
import { defaultTheme } from "../../styles/theme";
import { FilterTech } from "../../const";

const TechFilters = ({ checkedFilters, onFilterChange }) => {
  const changeHandler = (filter, isChecked) => {
    if (isChecked) {
      onFilterChange(
        checkedFilters.filter(
          (checkedFilter) => checkedFilter.tech !== filter.tech
        )
      );

      return;
    }

    onFilterChange([...checkedFilters, filter]);
  };

  return (
    <>
      <Title>Тип проекта</Title>
      {Object.values(FilterTech).map((filter) => {
        const { tech, caption } = filter;
        const isChecked = checkedFilters.some((filter) => filter.tech === tech);

        return (
          <Fragment key={tech}>
            <CheckBoxInput
              className="visually-hidden"
              type="checkbox"
              name={tech}
              id={tech}
              onChange={() => changeHandler(filter, isChecked)}
              checked={isChecked}
            />
            <Label htmlFor={tech}>{caption}</Label>
          </Fragment>
        );
      })}
    </>
  );
};

const CheckBoxInput = styled.input`
  & + label {
    &:after {
      ${tw`
        content-['']
        absolute
        left-1
        top-1/2
        
        block
        w-[20px]
        h-[12px]
        border-4
        border-t-0
        border-r-0
        border-black
        opacity-0
        translate-y-[-80%]
        -rotate-45
        transition-opacity
        duration-300
      `}
    }
  }

  &:checked + label {
    &:after {
      ${tw`opacity-100`}
    }
  }
`;

const Label = tw.label`
  relative
  sm:block
  inline-block
  pl-7

  mr-5
  sm:mr-0
  mb-2

  before:absolute
  before:left-0
  before:top-1/2
  before:block
  before:w-5
  before:h-5
  before:border-2
  before:border-black
  before:-translate-y-1/2
`;

export default TechFilters;
