// Import Components
import TableHead from './TableHead';
import TableBody from './TableBody';

// styles
import './styles.css';
const Table = ({ taskList }) => {
  let slicedTaskList = taskList?.slice(0, 10);

  return (
    <div className='table-wrapper'>
      <table className='custom-table'>
        <TableHead />
        <TableBody slicedTaskList={slicedTaskList} />
      </table>
    </div>
  );
};
export default Table;
