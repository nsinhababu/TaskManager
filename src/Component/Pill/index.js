import './styles.css';

const Pill = ({ color, text }) => (
  <span className='pill' style={{ backgroundColor: color }}>
    {text}
  </span>
);

export default Pill;
