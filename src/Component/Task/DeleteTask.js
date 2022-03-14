import '../Table/styles.css';

const DeleteTask = ({ setShowDelete, handleDelete }) => {
  return (
    <div className='delete-wrapper'>
      <h3>Are you sure you want to delete this task?</h3>
      <div className='action-btns'>
        <button className='btn confirm-btn' onClick={handleDelete}>
          Confirm
        </button>
        <button className='btn cancel-btn' onClick={() => setShowDelete()}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteTask;
