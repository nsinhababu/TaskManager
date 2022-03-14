// Import hooks
import { useState } from 'react';

// Import Components
import TableHead from './TableHead';
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
  setTaskId,
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

        <Modal
          fetchTaskList={fetchTaskList}
          isOpen={isOpen}
          toggle={modalToggle}
          userList={userList}
        >
          <NewTask
            fetchTaskList={fetchTaskList}
            isOpen={isOpen}
            userList={userList}
          />
        </Modal>
      </div>

      <div className='table-wrapper'>
        <table className='custom-table'>
          <TableHead />
          <TableBody
            slicedTaskList={slicedTaskList}
            handleDelete={handleDelete}
            setTaskId={setTaskId}
            showDelete={showDelete}
            setShowDelete={setShowDelete}
          />
        </table>
      </div>
    </>
  );
};
export default Table;
