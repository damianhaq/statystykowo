import React, { useState, useEffect } from "react";
import { deleteTemplate } from "../../../functions/deleteTemplate";
import { editTemplate } from "../../../functions/editTemplate";
import styles from "./itemTemplates.module.css";

const ItemTemplates = ({ template, done }) => {
  const [dataForEdit, setDataForEdit] = useState(template.event);

  // useEffect(() => {
  //   console.log(dataForEdit);
  // }, [dataForEdit]);

  function handleClickDelete() {
    deleteTemplate("event", template.id, done);
  }

  function handleClickEdit() {
    editTemplate("event", template.id, dataForEdit);
  }

  return (
    <div className={styles.itemTemplates}>
      <p>
        Nazwa:
        <input className={styles.editText} type={"text"} onChange={(ev) => setDataForEdit((prev) => ({ ...prev, name: ev.target.value }))} value={dataForEdit.name} />
      </p>
      <p>
        Opis: <textarea className={styles.editTextarea} onChange={(ev) => setDataForEdit((prev) => ({ ...prev, description: ev.target.value }))} value={dataForEdit.description} />
      </p>

      <p>
        Powtarzalność: <span className={styles.spanItemTemplate}>{template.event.repeat}</span>
      </p>
      <p>
        Typ: <span className={styles.spanItemTemplate}>{template.event.type}</span>
      </p>
      <div className={styles.buttonsWrapper}>
        <button onClick={handleClickEdit} className={styles.button}>
          Edytuj
        </button>
        <button onClick={handleClickDelete} className={styles.button}>
          Usuń
        </button>
      </div>
    </div>
  );
};

export default ItemTemplates;
