import ReactDOM from 'react-dom';

const Modal = ({ children, isOpen, toggle }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='modal-wrapper'>
      <div className='modal-card'>
        <button className='close-btn' onClick={() => toggle()}>
          X
        </button>
        {children}
      </div>
    </div>,

    document.getElementById('modal-root')
  );
};
export default Modal;
