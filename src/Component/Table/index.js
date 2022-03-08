// Components

// styles
import './styles.css';

import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = () => {
  return (
    <div className='table-wrapper'>
      <table className='custom-table'>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
};
export default Table;
