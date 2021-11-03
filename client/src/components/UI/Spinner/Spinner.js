import "./Spinner.css";

function Spinner(props) {
  return (
    <div class="loading-container">
      <div class="spinner"></div>
      <div class="spinner-center"></div>
      <div class="loading-text">{props.children}</div>
    </div>
  );
}

export default Spinner;
