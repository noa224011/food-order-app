import classes from "./Modal.module.css";

function ModalOverlay(props) {
  return (
    <div
      className={`${classes.modal} ${
        props.onLoading ? classes["modal-expand"] : ""
      }`}
    >
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

export default ModalOverlay;
