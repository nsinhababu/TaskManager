const Input = ({ className, name, typeOfInput, label }) => {
  return (
    <div className='input-container'>
      <label htmlFor={name}>{label}</label>
      <input className={className} name={name} type={typeOfInput} />
    </div>
  );
};
export default Input;
