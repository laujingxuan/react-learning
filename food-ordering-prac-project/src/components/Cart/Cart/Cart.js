import styles from "./Cart.module.css";
import Modal from "../../UI/Modal";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartItem from "../CartItem/CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {/* {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))} */}
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const hasItems = ctx.items.length > 0;

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
