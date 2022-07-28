import React, { useEffect, useState } from "react";
import CheckButton from "../../CheckButton";
import styles from "./item.module.css";

const Item = ({ name, data, inputHeight }) => {
  const [checked, setChecked] = useState(0);

  function handleClick(el) {
    setChecked(el);
  }

  return (
    <div className={styles.item}>
      <h3>{name}</h3>
      <div className={styles.wrapper}>
        {typeof data == "object" &&
          data.map((el, index) => <CheckButton key={index} name={el} isChecked={checked == index + 1 ? true : false} onClick={() => handleClick(index + 1)} />)}
        {typeof data == "string" && <textarea style={{ height: inputHeight }} />}
      </div>
    </div>
  );
};

export default Item;
