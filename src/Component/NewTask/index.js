// Import components
import Input from './inputs';
import Select from '../Select';

import './styles.css';
import { useState } from 'react';
import { mutateAPI } from '../../utils';

const NewTask = ({
  userList,
  fetchTaskList,
  isOpen,
  setIsOpen,
  task,
  setTask,
}) => {
  console.log('newtask', task);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // SUBMIT FUNCTION
  const handleSubmit = (e) => {
    debugger;

    console.log('submit', task);

    e.preventDefault();
    console.log(task);

    const { message, due_date, priority, assigned_to, taskid } = task || {};

    const formData = new FormData();
    formData.append('message', message);
    formData.append('due_date', due_date);
    formData.append('priority', priority);
    formData.append('assigned_to', assigned_to);

    if (taskid) {
      formData.append('taskid', taskid);
      mutateAPI({ url: 'update', formData }).then((res) => {
        fetchTaskList();
        setIsOpen(!isOpen);
      });
      return;
    }

    mutateAPI({ url: 'create', formData }).then((res) => {
      fetchTaskList();
      setIsOpen(!isOpen);
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
          value={task.message}
          name='message'
          type='text'
          handleChange={handleChange}
          label='Add Task'
        />

        <Input
          className='due_date'
          name='due_date'
          value={task.due_date}
          handleChange={handleChange}
          type='date'
          label='Due Date:'
        />

        <Select
          options={userList}
          name='assigned_to'
          value={task.assigned_to}
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
