import {FilterType} from "../../const";

const TypeFilters = ({activeFilter, onFilterChange}) => {
  return (
    <>
      <p>Тип:</p>
      {
        Object.values(FilterType).map(({type, text}) => {
          const filterType = type.toLowerCase();
          const filterName = text.toUpperCase();

          return (
            <div key={filterType}>
              <input type="radio" name="type" id={filterType} value={filterType} onChange={() => onFilterChange(filterType)} checked={activeFilter === filterType} />
              <label htmlFor={filterType}>{filterName}</label>
            </div>
          );
        })
      }
    </>
  );
};

export default TypeFilters;