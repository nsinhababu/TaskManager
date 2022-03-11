// Import hooks
import { useState } from 'react';

// Import Components
import TableHead from './TableHead';
import TableBody from './TableBody';
import Modal from '../../Portal';

//Import styles
import './styles.css';
import { styleComponents } from './styles';

// Table component
const Table = ({ taskList, userList }) => {
  const slicedTaskList = taskList?.slice(0, 10);

  const [isOpen, setIsOpen] = useState(false);

  // Modal Open function
  const modalToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={styleComponents.table_top_btn_container}>
        <button
          style={styleComponents.table_top_btn}
          onClick={modalToggle}
          type='button'
        >
          Add Task
        </button>

        <Modal isOpen={isOpen} toggle={modalToggle} userList={userList}></Modal>
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
