import Pill from '../Pill';

import { priorityTypes } from '../../utils/consts';

const TableBody = ({ slicedTaskList }) => {
  console.log(slicedTaskList);

  const showPriority = (priority) => {
    const currentPriority = priorityTypes[priority];
    const { color, text } = currentPriority || {};
    return <Pill text={text} color={color} />;
  };

  return (
    <tbody className='table-body'>
      {(slicedTaskList || []).map((task) => {
        const { id, assigned_name, message, created_on, due_date, priority } =
          task || {};
        return (
          <tr key={id}>
            <td>{message}</td>
            <td>{assigned_name || 'N/A'}</td>
            <td>{created_on}</td>
            <td>{due_date || 'N/A'}</td>
            <td>{showPriority(priority)}</td>
            <td>
              <button className='delete'>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
