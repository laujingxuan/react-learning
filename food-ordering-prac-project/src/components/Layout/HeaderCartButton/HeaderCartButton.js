import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import CartContext from "../../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = ctx;

  //0 is the starting value
  //curNumber is the sum which will be carried forward and return
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onCartClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
