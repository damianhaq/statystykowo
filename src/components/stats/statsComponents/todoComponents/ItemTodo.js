import React from "react";
import CheckButton from "../../../CheckButton";
import styles from "./itemTodo.module.css";

const checkButtonsData = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const ItemTodo = ({ event }) => {
  console.log(event);

  function onClickHandlerYN() {
    console.log("onclick");
  }
  function onClickHandler10() {
    console.log("onclick");
  }

  function Render() {
    switch (event.type) {
      case "Tak / Nie":
        return (
          <div className={styles.buttonsYNWrapper}>
            <CheckButton name={"Tak"} onClick={onClickHandlerYN} isChecked={false} />
            <CheckButton name={"Nie"} onClick={onClickHandlerYN} isChecked={false} />
          </div>
        );
      case "Liczba":
        return <input className={styles.inputNumber} type="number" />;
      case "Skala od-do":
        return (
          <div className={styles.buttonsYNWrapper}>
            {checkButtonsData.map((el) => (
              <CheckButton key={el} name={el} onclick={onClickHandler10} isChecked={false} />
            ))}
          </div>
        );
      case "Tekst":
        return <textarea className={styles.textarea} />;
      default:
        break;
    }
  }

  return (
    <div className={styles.itemTodo}>
      <h3>{event.name}</h3>
      <p className={styles.description}>{event.description}</p>
      <Render />
    </div>
  );
};

export default ItemTodo;
