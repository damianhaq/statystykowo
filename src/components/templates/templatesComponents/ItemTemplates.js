import React from "react";
import styles from "./itemTemplates.module.css";

const ItemTemplates = ({ data }) => {
  return (
    <div className={styles.itemTemplates}>
      <h3>{data.value.name}</h3>
      <p>{data.value.description}</p>
      <p>
        Powtarzalność: <span>{data.value.repeat}</span>
      </p>
      <p>
        Typ: <span>{data.value.type}</span>
      </p>
    </div>
  );
};

export default ItemTemplates;
