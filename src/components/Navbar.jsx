import React from "react";
import styles from "../styles/Total.module.css";
import {useValue} from '../contexts/itemContext'

function Navbar() {
  let {total, item}=useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
