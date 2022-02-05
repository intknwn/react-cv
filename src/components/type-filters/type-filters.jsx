import { Fragment } from "react";
import tw, { styled } from 'twin.macro';
import { Title } from "../../styles/components"
import { defaultTheme } from "../../styles/theme";
import {FilterType} from "../../const";

const TypeFilters = ({activeFilter, onFilterChange}) => {
  return (
    <>
      <Title>Проекты</Title>
      <InputsWrapper>
      {
        Object.values(FilterType).map(({type, caption}) => {
          const filterType = type.toLowerCase();

          return (
            <Fragment key={filterType}>
              <RadioInput className="visually-hidden" type="radio" name="type" id={filterType} value={filterType} onChange={() => onFilterChange(filterType)} checked={activeFilter === filterType} />
              <Label htmlFor={filterType}>{caption}</Label>
            </Fragment>
          );
        })
      }
      </InputsWrapper>
    </>
  );
};

const InputsWrapper = styled.div`
  margin-bottom: 25px;
`

const RadioInput = styled.input`
  & + label {
    &:after {
      content: "";
      position: absolute;
      left: 4px;
      top: 50%;

      display: block;
      width: 12px;
      height: 12px;

      background-color: ${defaultTheme.color.titleSecondary};
      border-radius: 50%;

      opacity: 0;
      transform: translateY(-50%);

      transition: opacity 300ms;
    }
  }

  &:checked + label {
    &:after {
      opacity: 1;
    }
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  padding-left: 30px;
  margin-bottom: 8px;

  font-size: 18px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;

    display: block;
    width: 20px;
    height: 20px;

    border: 2px solid ${defaultTheme.color.titleSecondary};
    border-radius: 50%;

    transform: translateY(-50%);
  }
`

export default TypeFilters;