import ReactDOM from 'react-dom';

// import components
import NewTask from '../Component/NewTask';

// import css
import './styles.css';

const Modal = ({ children, isOpen, toggle }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
      <div className='modal-card'>
        <div className='new-task-close-btn-container'>
          <button className='close-btn' onClick={() => toggle()}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>,

    document.getElementById('modal-root')
  );
};
export default Modal;
