import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";
import { Fragment } from "react";
import ReactDom from "react-dom";

function Modal(props) {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
