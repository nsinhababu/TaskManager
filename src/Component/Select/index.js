const Select = ({ options, name, label, handleChange }) => {
  return (
    <div>
      {}
      <label htmlFor={name}>{label}</label>
      <select onChange={handleChange} name={name}>
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
