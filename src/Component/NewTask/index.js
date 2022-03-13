// Import components
import Input from './inputs';
import Select from '../Select';

import './styles.css';
import { useState } from 'react';
import { fetchApi } from '../../utils';

const NewTask = ({ userList, fetchTaskList, isOpen }) => {
  const [task, setTask] = useState({
    taskName: '',
    createdOn: '',
    dueDate: '',
    priority: '',
    assignedTo: '',
  });
  // Select Component Data

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);

    fetchApi({ url: 'update', method: 'POST', reqObj: task }).then((res) => {
      fetchTaskList();
    });
  };

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
      id: '3',
      name: 'low',
    },
  };

  return (
    <div className='newTask-container'>
      <form className='container-form' onSubmit={handleSubmit}>
        <Input
          className='task'
          value={task.name}
          name='taskName'
          type='text'
          handleChange={handleChange}
          label='Add Task'
        />

        <Input
          className='created-on'
          name='createdOn'
          value={task.createdOn}
          handleChange={handleChange}
          type='date'
          label='Created On:'
        />

        <Input
          className='due-date'
          name='dueDate'
          value={task.dueDate}
          handleChange={handleChange}
          type='date'
          label='Due Date:'
        />

        <Select
          options={userList}
          name='assignedTo'
          value={task.assignedTo}
          label='Assigned To'
          handleChange={handleChange}
        />

        <Select
          options={Object.values(priorityData)}
          name='priority'
          value={task.priority}
          handleChange={handleChange}
          label='Priority'
        />

        <div className='submit-btn-container'>
          <button onClick={handleSubmit} type='submit' className='submit-btn'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default NewTask;
