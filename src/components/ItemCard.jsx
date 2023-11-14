import React from "react";
import { useContext } from "react";
import { itemContext } from "../contexts/itemContext";
import { totalContext } from "../contexts/totalContext";
import styles from "../styles/ItemCard.module.css";

function ItemCard({ name, price }) {
  let {item, setItem}=useContext(itemContext);
  let {total, setTotal }=useContext(totalContext);

  const handleAdd = () => {
    setTotal(total+price);
    setItem(item+1);
  };
  const handleRemove = () => {
    if(item>0){
      setTotal(total-price);
      setItem(item-1);
    }

  };

  return (
    <div className={styles.itemCard}>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.itemPrice}>&#x20B9; {price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => handleAdd()}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
