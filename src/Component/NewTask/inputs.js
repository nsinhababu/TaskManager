const Input = ({ className, name, type, label, handleChange }) => {
  return (
    <div className='input-container'>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        className={className}
        name={name}
        type={type}
      />
    </div>
  );
};
export default Input;
