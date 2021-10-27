import classes from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
