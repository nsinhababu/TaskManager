// Import hooks
import { useState } from 'react';

// Import Components
import TableHead from './TableHead';
import TableBody from './TableBody';
import Modal from '../../Portal';

//Import styles
import './styles.css';

// Table component
const Table = ({ taskList, userList, fetchTaskList }) => {
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
        ></Modal>
      </div>

      <div className='table-wrapper'>
        <table className='custom-table'>
          <TableHead />
          <TableBody slicedTaskList={slicedTaskList} />
        </table>
      </div>
    </>
  );
};
export default Table;
