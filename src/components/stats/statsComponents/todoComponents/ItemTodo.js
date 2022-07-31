import React, { useEffect, useState } from "react";
import CheckButton from "../../../CheckButton";
import styles from "./itemTodo.module.css";
import { Timestamp } from "firebase/firestore";

const checkButtonsData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const checkButtonsDataYN = ["Tak", "Nie"];

const initialData = {
  date: Timestamp.fromDate(new Date()),
  idTemplate: "",
  type: "",
  value: "",
};

const ItemTodo = ({ event }) => {
  const [data, setData] = useState(initialData);
  // this number is for which one button is selected
  const [isCheckedYN, setIsCheckedYN] = useState(0);
  const [isChecked10, setIsChecked10] = useState(0);

  useEffect(() => {
    console.log("isChecked10", isChecked10);
  }, [isChecked10]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function onClickHandlerYN(el, index) {
    if (el == "Tak") {
      setData({
        date: Timestamp.fromDate(new Date()),
        idTemplate: event.id,
        type: event.event.type,
        value: true,
      });
    } else if (el == "Nie") {
      setData({
        date: Timestamp.fromDate(new Date()),
        idTemplate: event.id,
        type: event.event.type,
        value: false,
      });
    }

    setIsCheckedYN(index + 1);
  }

  function onClickHandler10(el, index) {
    console.log("onclick");
    setData({
      date: Timestamp.fromDate(new Date()),
      idTemplate: event.id,
      type: event.event.type,
      value: index,
    });
    setIsChecked10(index + 1);
  }
  function onClickHandlerSave() {
    console.log("onclick");
  }

  function Render({ event }) {
    switch (event.event.type) {
      case "Tak / Nie":
        return (
          <div className={styles.buttonsYNWrapper}>
            {checkButtonsDataYN.map((el, index) => (
              <CheckButton key={index} name={el} onClick={() => onClickHandlerYN(el, index)} isChecked={isCheckedYN == index + 1 ? true : false} />
            ))}
          </div>
        );
      case "Liczba":
        return (
          <input
            value={data.value}
            onChange={(ev) => setData({ date: Timestamp.fromDate(new Date()), idTemplate: event.id, type: event.event.type, value: ev.target.value })}
            className={styles.inputNumber}
            type="number"
          />
        );
      case "Skala od-do":
        return (
          <div className={styles.buttonsYNWrapper}>
            {checkButtonsData.map((el, index) => (
              <CheckButton key={el} name={el} onClick={() => onClickHandler10(el, index)} isChecked={isChecked10 == index + 1 ? true : false} />
            ))}
          </div>
        );
      case "Tekst":
        return <textarea className={styles.textarea} />;
      case "Lista":
        return <div>TODO: LISTA</div>;
      default:
        break;
    }
  }

  return (
    <div className={styles.itemTodo}>
      <h3>{event.event.name}</h3>
      <p className={styles.description}>{event.description}</p>
      <Render event={event} />
      <button onClick={onClickHandlerSave} className={styles.button}>
        Zapisz
      </button>
    </div>
  );
};

export default ItemTodo;
