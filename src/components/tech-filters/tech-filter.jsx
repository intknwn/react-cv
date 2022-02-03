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
      <p>Вид проекта:</p>
      {
        Object.values(FilterTech).map((filter) => {
          const {tech, caption} = filter;
          const isChecked = checkedFilters.some((filter) => filter.tech === tech);

          return (
            <div key={tech}>
              <input class="visually-hidden" type="checkbox" name={tech} id={tech} onChange={() => changeHandler(filter, isChecked)} checked={isChecked}/>
              <label htmlFor={tech}>{caption.toUpperCase()}</label>
            </div>
          );
        })
      }
    </>
  );
};

export default TechFilters;