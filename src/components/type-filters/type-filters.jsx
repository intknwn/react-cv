import {FilterType} from "../../const";

const TypeFilters = ({activeFilter, onFilterChange}) => {
  return (
    <>
      <p>Тип:</p>
      {
        Object.values(FilterType).map(({type, caption}) => {
          const filterType = type.toLowerCase();
          const filterName = caption.toUpperCase();

          return (
            <div key={filterType}>
              <input class="visually-hidden" type="radio" name="type" id={filterType} value={filterType} onChange={() => onFilterChange(filterType)} checked={activeFilter === filterType} />
              <label htmlFor={filterType}>{filterName}</label>
            </div>
          );
        })
      }
    </>
  );
};

export default TypeFilters;