import React from "react";
import styles from "../styles/CartModal.module.css";
import {useValue} from '../contexts/itemContext'

function CartModal() {
    let { cart, total, handleResetCart, toggleShowCart}=useValue();
    console.log(cart)
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={toggleShowCart}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleResetCart}>
        Clear
      </div>
      <div className={styles.itemContainer}>
        {cart.map(item=>
            (
                <div className={styles.cartCard} key={item.name}>
                    <div>{item.name}</div>
                    <div>{item.qty}x &#x20B9;{item.price}</div>
                    <div>&#x20B9; {parseInt(item.qty*item.price)}</div>
                </div>
            ))}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>&#x20B9;{total}</div>
      </div>
    </div>
  );
}

export default CartModal;
