import { useState } from 'react';

import './styles.css';

// Import Components
import Pill from '../Pill';
import Modal from '../../Portal';
import DeleteTask from '../Task/DeleteTask';
// import EditIcon from './assets/edit.svg';
// import DeleteIcon from './assets/delete.svg';

// Import Utils
import { priorityTypes } from '../../utils/consts';

const TableBody = ({
  slicedTaskList,
  handleDelete,
  setTask,
  showDelete,
  setShowDelete,
  setIsOpen,
}) => {
  const [showEdit, setShowEdit] = useState(false);

  const showPriority = (priority) => {
    const currentPriority = priorityTypes[priority];
    const { color, text } = currentPriority || {};
    return <Pill text={text} color={color} />;
  };

  return (
    <>
      <div className='task__list-body'>
        {(slicedTaskList || []).map((task) => {
          const { id, assigned_name, message, created_on, due_date, priority } =
            task || {};
          return (
            <div className='task-container' key={id}>
              <div className='task-name'>{message}</div>
              <div className='task-assigned'>{assigned_name || 'N/A'}</div>
              <div className='task-created'>{created_on}</div>
              <div className='task-due_date'>{due_date || 'N/A'}</div>
              <div className='task-priority'>{showPriority(priority)}</div>
              <div className='task-manage'>
                <button
                  className='btn btn-edit'
                  onClick={() => {
                    setIsOpen(true);
                    setTask(task);
                  }}
                >
                  Edit
                </button>
                <button
                  className='btn btn-delete'
                  onClick={() => {
                    setTask(task);
                    setShowDelete(!showDelete);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {showDelete && (
        <Modal isOpen={showDelete} toggle={() => setShowDelete(!showDelete)}>
          <DeleteTask
            setShowDelete={setShowDelete}
            handleDelete={handleDelete}
          />
        </Modal>
      )}
    </>
  );
};
export default TableBody;
