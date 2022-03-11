// Import components
import Input from './inputs';

import './styles.css';

const NewTask = ({ userList }) => {
  return (
    <div className='newTask-container'>
      <form className='container-form'>
        <Input
          className={'task'}
          name={'task'}
          typeOfInput={'text'}
          label={'Add Task'}
        />
        <div className='assign-date-container'>
          <select className='assign-to'>
            {userList?.map((user) => {
              return (
                <option value={user?.id} key={user?.id}>
                  {user?.name}
                </option>
              );
            })}
          </select>

          <input className='created-on' type='date' />
          <input className='due-date' type='date' />

          <select className='priority' type='text'>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
        </div>
        <div className='submit-btn-container'>
          <button type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewTask;
