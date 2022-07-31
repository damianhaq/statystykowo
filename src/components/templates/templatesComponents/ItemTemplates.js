import React from "react";
import { deleteTemplate } from "../../../functions/deleteTemplate";
import styles from "./itemTemplates.module.css";

const ItemTemplates = ({ data }) => {
  function handleClickDelete() {
    deleteTemplate("event", data.id);
  }

  return (
    <div className={styles.itemTemplates}>
      <h3>{data.event.name}</h3>
      <p>{data.event.description}</p>
      <p>
        Powtarzalność: <span className={styles.spanItemTemplate}>{data.event.repeat}</span>
      </p>
      <p>
        Typ: <span className={styles.spanItemTemplate}>{data.event.type}</span>
      </p>
      <div className={styles.buttonsWrapper}>
        <button onClick={handleClickDelete} className={styles.button}>
          Usuń
        </button>
      </div>
    </div>
  );
};

export default ItemTemplates;
