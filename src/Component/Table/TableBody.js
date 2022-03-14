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
  setTaskId,
  showDelete,
  setShowDelete,
}) => {
  const [showEdit, setShowEdit] = useState(false);

  const showPriority = (priority) => {
    const currentPriority = priorityTypes[priority];
    const { color, text } = currentPriority || {};
    return <Pill text={text} color={color} />;
  };

  const handleEdit = () => {};

  return (
    <>
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
              <td className='actions'>
                <button className='btn btn-edit' onClick={handleEdit}>
                  Edit
                </button>
                <button
                  className='btn btn-delete'
                  onClick={() => {
                    setTaskId(id);
                    setShowDelete(!showDelete);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
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
