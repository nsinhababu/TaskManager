// Import hooks
import { useState } from 'react';

// Import Components
// import TableHead from './TableHead';
import TableBody from './TableBody';
import Modal from '../../Portal';
import NewTask from '../NewTask';

//Import styles
import './styles.css';

// Table component
const Table = ({
  taskList,
  userList,
  fetchTaskList,
  handleDelete,
  showDelete,
  setShowDelete,
  setTask,
  task,
}) => {
  const slicedTaskList = taskList?.slice(0, 10);

  const [isOpen, setIsOpen] = useState(false);

  // Modal Open function
  const modalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='add-btn-container'>
        <button className='add-btn' onClick={modalToggle} type='button'>
          Add Task
        </button>
      </div>

      <div className='table-wrapper'>
        {/* <TableHead /> */}
        <TableBody
          slicedTaskList={slicedTaskList}
          handleDelete={handleDelete}
          task={task}
          setTask={setTask}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
          setIsOpen={setIsOpen}
        />

        {isOpen && (
          <Modal
            fetchTaskList={fetchTaskList}
            isOpen={isOpen}
            toggle={modalToggle}
            userList={userList}
          >
            <NewTask
              fetchTaskList={fetchTaskList}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              userList={userList}
              task={task}
              setTask={setTask}
            />
          </Modal>
        )}
      </div>
    </>
  );
};
export default Table;
