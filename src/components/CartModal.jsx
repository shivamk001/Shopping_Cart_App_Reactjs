import React from "react";
import styles from "../styles/CartModal.module.css";
import {useValue} from '../contexts/itemContext'

function CartModal() {
    let { cart,  handleResetCart, toggleShowCart}=useValue();
    console.log(cart)
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleShowCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleResetCart}>
        Clear
      </div>
      <div className={styles.itemContainer}></div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price</div>
      </div>
    </div>
  );
}

export default CartModal;
