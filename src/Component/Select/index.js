const Select = ({ options, selectName, label }) => {
  return (
    <div>
      <label htmlFor={selectName}>{label}</label>
      <select name={selectName}>
        {options?.map((option) => {
          return (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
