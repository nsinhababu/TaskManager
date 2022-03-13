import ReactDOM from 'react-dom';

// import components
import NewTask from '../Component/NewTask';

// import css
import './styles.css';

const Modal = ({ children, isOpen, toggle, userList, fetchTaskList }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
      <div className='modal-card'>
        <div className='new-task-close-btn-container'>
          <h2>Add New Task</h2>
          <button className='close-btn' onClick={() => toggle()}>
            X
          </button>
        </div>
        <NewTask
          fetchTaskList={fetchTaskList}
          isOpen={isOpen}
          userList={userList}
        />
        {children}
      </div>
    </div>,

    document.getElementById('modal-root')
  );
};
export default Modal;
