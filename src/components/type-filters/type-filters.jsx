import { Fragment } from "react";
import tw, { styled } from "twin.macro";
import { Title } from "../../styles/components";
import { defaultTheme } from "../../styles/theme";
import { FilterType } from "../../const";

const TypeFilters = ({ activeFilter, onFilterChange }) => {
  return (
    <>
      <Title>Проекты</Title>
      <InputsWrapper>
        {Object.values(FilterType).map(({ type, caption }) => {
          const filterType = type.toLowerCase();

          return (
            <Fragment key={filterType}>
              <RadioInput
                className="visually-hidden"
                type="radio"
                name="type"
                id={filterType}
                value={filterType}
                onChange={() => onFilterChange(filterType)}
                checked={activeFilter === filterType}
              />
              <Label htmlFor={filterType}>{caption}</Label>
            </Fragment>
          );
        })}
      </InputsWrapper>
    </>
  );
};

const InputsWrapper = tw.div`
  mb-6
`;

const RadioInput = styled.input`
  & + label {
    &:after {
      ${tw`
        content-[""]
        absolute
        left-1
        top-1/2
        block
        w-3
        h-3
        bg-black
        rounded-full
        opacity-0
        -translate-y-1/2
        transition
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
  sm:pl-8
  pl-7
  mr-5
  sm:mr-0
  mb-2

  text-lg
  sm:text-base

  before:absolute
  before:left-0
  before:top-1/2
  before:block
  before:w-5
  before:h-5
  before:border-2
  before:border-black
  before:rounded-full
  before:-translate-y-1/2
`;

export default TypeFilters;
