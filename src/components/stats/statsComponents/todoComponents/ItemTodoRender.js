import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import CheckButton from "../../../CheckButton";
import styles from "./itemTodoRender.module.css";
import { addData } from "../../../../functions/addData";

const checkButtonsData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const checkButtonsDataYN = ["Tak", "Nie"];

const initialData = {
  date: Timestamp.fromDate(new Date()),
  idTemplate: "",
  type: "",
  value: "",
};

const ItemTodoRender = ({ event }) => {
  const [data, setData] = useState(initialData);
  // this number is for which one button is selected
  const [isCheckedYN, setIsCheckedYN] = useState(0);
  const [isChecked10, setIsChecked10] = useState(0);

  function onClickHandlerYN(el, index) {
    if (el == "Tak") {
      setData({
        date: Timestamp.fromDate(new Date()),
        idTemplate: event.id,
        type: event.event.type,
        value: "Tak",
      });
    } else if (el == "Nie") {
      setData({
        date: Timestamp.fromDate(new Date()),
        idTemplate: event.id,
        type: event.event.type,
        value: "Nie",
      });
    }

    setIsCheckedYN(index + 1);
  }

  function onClickHandler10(el, index) {
    setData({
      date: Timestamp.fromDate(new Date()),
      idTemplate: event.id,
      type: event.event.type,
      value: index,
    });
    setIsChecked10(index + 1);
  }

  function onClickHandlerSave() {
    console.log(data);
    addData("done", data);
  }

  switch (event.event.type) {
    case "Tak / Nie":
      return (
        <>
          <div className={styles.buttonsYNWrapper}>
            {checkButtonsDataYN.map((el, index) => (
              <CheckButton key={index} name={el} onClick={() => onClickHandlerYN(el, index)} isChecked={isCheckedYN == index + 1 ? true : false} />
            ))}
          </div>
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    case "Liczba":
      return (
        <>
          <input
            value={data.value}
            onChange={(ev) =>
              setData({
                date: Timestamp.fromDate(new Date()),
                idTemplate: event.id,
                type: event.event.type,
                value: ev.target.value,
              })
            }
            className={styles.inputNumber}
            type="number"
          />
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    case "Skala od-do":
      return (
        <>
          <div className={styles.buttonsYNWrapper}>
            {checkButtonsData.map((el, index) => (
              <CheckButton key={el} name={el} onClick={() => onClickHandler10(el, index)} isChecked={isChecked10 == index + 1 ? true : false} />
            ))}
          </div>
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    case "Tekst":
      return (
        <>
          <textarea
            value={data.value}
            onChange={(ev) =>
              setData({
                date: Timestamp.fromDate(new Date()),
                idTemplate: event.id,
                type: event.event.type,
                value: ev.target.value,
              })
            }
            className={styles.textarea}
          />
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    case "Lista":
      return (
        <>
          <div>TODO: LISTA</div>
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    default:
      break;
  }
};

export default ItemTodoRender;
