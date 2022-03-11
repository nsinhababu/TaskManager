// Import components
import Input from './inputs';
import Select from '../Select';

import './styles.css';

const NewTask = ({ userList }) => {
  console.log(userList);
  // Select Component Data

  const priorityData = {
    high: {
      id: '1',
      name: 'high',
    },
    medium: {
      id: '2',
      name: 'medium',
    },
    low: {
      id: '1',
      name: 'low',
    },
  };

  return (
    <div className='newTask-container'>
      <form className='container-form'>
        <Input
          className={'task'}
          name={'task'}
          typeOfInput={'text'}
          label={'Add Task'}
        />

        <Input
          className={'created-on'}
          name={'createdOn'}
          typeOfInput={'date'}
          label={'Created On:'}
        />

        <Input
          className={'due-date'}
          name={'dueDate'}
          typeOfInput={'date'}
          label={'Due Date:'}
        />

        <Select
          options={userList}
          selectName={'assignTo'}
          label={'Assign to:'}
        />

        <Select
          options={Object.values(priorityData)}
          selectName={'priority'}
          label={'Priority:'}
        />

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
