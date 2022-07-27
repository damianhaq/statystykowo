import React from "react";
import styles from "./checkButton.module.css";

const CheckButton = ({ name, onClick, isChecked }) => {
  return (
    <div onClick={onClick} className={isChecked == true ? styles.checked : styles.unchecked}>
      {name}
    </div>
  );
};

export default CheckButton;
