import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const ModalOverlay = props => {
  return (
    <div className={classes.backdrop} onClick={props.onClose}>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
