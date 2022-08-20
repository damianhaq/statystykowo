import React, { useState, useEffect } from "react";
import { Timestamp } from "firebase/firestore";
import CheckButton from "../../../CheckButton";
import styles from "./itemTodoRender.module.css";
import { addData } from "../../../../functions/addData";

const checkButtonsData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const checkButtonsDataYN = ["Tak", "Nie"];

const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

const ItemTodoRender = ({ event }) => {
  const [data, setData] = useState({
    date: now.toISOString().slice(0, 16),
    idTemplate: event.id,
    type: event.event.type,
    value: "",
  });
  // this number is for which one button is selected
  const [isCheckedYN, setIsCheckedYN] = useState(0);
  const [isChecked10, setIsChecked10] = useState(0);

  useEffect(() => {
    console.log("data", data);
  }, []);

  function onClickHandlerYN(el, index) {
    if (el == "Tak") {
      setData((prev) => ({
        ...prev,
        value: "Tak",
      }));
    } else if (el == "Nie") {
      setData((prev) => ({
        ...prev,
        value: "Nie",
      }));
    }

    setIsCheckedYN(index + 1);
  }

  function onClickHandler10(el, index) {
    setData((prev) => ({
      ...prev,
      value: index,
    }));
    setIsChecked10(index + 1);
  }

  function onClickHandlerSave() {
    // convert date to timestamp
    const dataWithTimestamp = { ...data };
    dataWithTimestamp.date = Timestamp.fromDate(new Date(data.date));
    addData("done", dataWithTimestamp);
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
          <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
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
              setData((prev) => ({
                ...prev,
                value: ev.target.value,
              }))
            }
            className={styles.inputNumber}
            type="number"
          />
          <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
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
          <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
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
              setData((prev) => ({
                ...prev,
                value: ev.target.value,
              }))
            }
            className={styles.textarea}
          />
          <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button>
        </>
      );
    case "Lista":
      return (
        <>
          <div>TODO: LISTA</div>
          {/* <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
          <button onClick={onClickHandlerSave} className={styles.button}>
            Zapisz
          </button> */}
        </>
      );

    case "Godzina":
      return (
        <>
          <input
            value={data.value}
            onChange={(ev) =>
              setData((prev) => ({
                ...prev,
                value: ev.target.value,
              }))
            }
            className={styles.inputTime}
            type="time"
          />
          <input onChange={(ev) => setData((prev) => ({ ...prev, date: ev.target.value }))} value={data.date} className={styles.dataPicker} type="datetime-local" />
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
