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
      <Title>Делал на проекте</Title>
      {Object.values(FilterTech).map((filter) => {
        const { tech, caption } = filter;
        const isChecked = checkedFilters.some((filter) => filter.tech === tech);

        return (
          <Fragment key={tech}>
            <CheckBoxInput
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
  ${tw`sr-only`}

  &:focus + label {
    ${tw`text-amber-500`}
    &:before {
      ${tw`rotate-[90deg] transition duration-300`}
    }
  }

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
        border-amber-500
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
  md:block
  inline-block
  pl-7

  mr-5
  md:mr-0
  md:mb-2
  mb-0

  cursor-pointer

  hocus:text-amber-500

  before:absolute
  before:left-0
  before:top-1/2
  before:block
  before:w-5
  before:h-5
  before:border-2
  before:border-[#555555]
  before:-translate-y-1/2
`;

export default TechFilters;
