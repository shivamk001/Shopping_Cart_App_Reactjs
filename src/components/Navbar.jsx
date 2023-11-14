import { useContext } from "react";
import React from "react";
import styles from "../styles/Total.module.css";
import { itemContext } from "../contexts/itemContext";
import { totalContext } from "../contexts/totalContext";

function Navbar() {
  let {item}=useContext(itemContext);
  let {total}=useContext(totalContext);
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
    </div>
  );
}

export default Navbar;
