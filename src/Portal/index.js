import ReactDOM from 'react-dom';

// import components
import NewTask from '../Component/NewTask';
// import css
import './styles.css';

const Modal = ({ children, isOpen, toggle, userList }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
      <div className='modal-card'>
        <button className='close-btn' onClick={() => toggle()}>
          X
        </button>
        <NewTask userList={userList} />
        {children}
      </div>
    </div>,

    document.getElementById('modal-root')
  );
};
export default Modal;
