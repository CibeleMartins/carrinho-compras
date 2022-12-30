import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

import { useState } from 'react';

const ModalOverlay = props => {
  const [isClose, setIsClose] = useState(false);

  // console.log(isClose)
   
  return (
    <>
      <div
        className={isClose ? classes.closeModal : classes.backdrop}
        onClick={() => {setIsClose(true)}}
      ></div>
      <div className={isClose ? classes.closeModal : classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
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
