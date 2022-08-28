import React from "react";
import { useState } from "react";
import { deleteDone } from "../../../../functions/deleteDone";
import { editDocument } from "../../../../functions/editDocument";
import styles from "./showPastItem.module.css";

const ShowPastItem = ({ el, events }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(el.done.value);

  function handleClickDelete() {
    deleteDone(el.id);
  }

  function handleClickEdit() {
    if (isEditMode) editDocument("done", el.id, { ...el.done, value: value });

    setIsEditMode(!isEditMode);
  }
  return (
    <div className={styles.item} key={el.id}>
      <p className={styles.name}>{events.filter((event) => event.id == el.done.idTemplate)[0].event.name}</p>
      <p className={styles.value}>{el.done.value}</p>
      {isEditMode && <input type={"text"} value={value} onChange={(ev) => setValue(ev.target.value)} />}
      <p>data: {new Date(el.done.date.seconds * 1000).toLocaleString().slice(0, 17)}</p>
      <div className={styles.buttonsWrapper}>
        <button onClick={handleClickEdit} className={styles.button}>
          {isEditMode ? "Zapisz" : "Edytuj"}
        </button>
        <button onClick={handleClickDelete} className={styles.button}>
          Usuń
        </button>
      </div>
    </div>
  );
};

export default ShowPastItem;
