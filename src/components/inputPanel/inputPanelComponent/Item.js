import React, { useEffect, useState } from "react";
import CheckButton from "../../CheckButton";
import styles from "./item.module.css";

const Item = ({ inputData, data, inputHeight, addDataToState }) => {
  const [checked, setChecked] = useState(0);

  function handleClick(el, ev, nameType) {
    setChecked(el);
    addDataToState({ [data.type]: ev.target.innerHTML });
  }

  return (
    <div className={styles.item}>
      <h3>{data.name}</h3>
      <div className={styles.wrapper}>
        {typeof data.pickNames == "object" &&
          data.pickNames.map((el, index) => <CheckButton key={index} name={el} isChecked={checked == index + 1 ? true : false} onClick={(ev) => handleClick(index + 1, ev, el)} />)}
        {typeof data.pickNames == "string" && <textarea onChange={(ev) => addDataToState({ [data.type]: ev.target.value })} value={inputData} style={{ height: inputHeight }} />}
      </div>
    </div>
  );
};

export default Item;
