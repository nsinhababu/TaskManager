import './styles.css';

const NewTask = ({ newTaskWindowHandler, addTask }) => {
  return (
    <div className={addTask === true ? 'show' : 'hide'}>
      <button onClick={newTaskWindowHandler} className='close-window'>
        X
      </button>
      <form className='container-form'>
        <div className='task-container'>
          <input placeholder='Task' className='task' type='text' />
        </div>
        <div className='other-info'>
          <input placeholder='Assign to' className='assign-to' type='text' />
          <input className='date' type='date' />
          <select className='priority' type='text'>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
            <option value='low'>Low</option>
          </select>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewTask;
