import './styles.css';

const NewTask = ({ newTaskWindowHandler, addTask, userList }) => {
  console.log(userList);
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
          <select className='assign-to'>
            <option value='' disabled selected>
              Assign to
            </option>
            {userList?.map((user) => {
              return (
                <option value={user?.name} key={user?.id}>
                  {user?.name}
                </option>
              );
            })}
          </select>

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
