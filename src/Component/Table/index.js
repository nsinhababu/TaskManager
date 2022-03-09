// import { useState } from 'react';
// Import Components
import TableHead from './TableHead';
import TableBody from './TableBody';

// styles
import './styles.css';

const Table = ({ newTaskWindowHandler, addTask }) => {
  //   let [addTask, setAddTask] = useState(true);

  //   const newTaskWindowHandler = () => {
  //     setAddTask(!addTask);
  //     console.log(addTask);
  //   };

  return (
    <div className={`table-wrapper ${addTask === false ? 'show' : 'hide'}`}>
      <button onClick={newTaskWindowHandler} className='add-btn'>
        Add
      </button>
      <table className='custom-table'>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};
export default Table;
