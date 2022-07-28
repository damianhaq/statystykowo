import React from "react";
import { addData } from "../../functions/addData";
import Item from "./inputPanelComponent/Item";
import styles from "./inputPanel.module.css";

const data = {
  repeat: {
    name: "Powtażalność",
    pickNames: ["Codziennie", "Co Tydzień", "Co Miesiąc", "Jednorazowa"],
  },
  type: {
    name: "Typ",
    pickNames: ["Skala od-do", "Tak / Nie", "Tekst", "Liczba"],
  },
  name: {
    name: "Podaj nazwę",
    pickNames: "input",
  },
  description: {
    name: "Opis",
    pickNames: "input",
  },
};

const InputPanel = () => {
  // addData();
  return (
    <div className={styles.inputPanel}>
      <h2>Dodaj</h2>
      <Item name={data.repeat.name} data={data.repeat.pickNames} />
      <Item name={data.type.name} data={data.type.pickNames} />
      <Item name={data.name.name} data={data.name.pickNames} inputHeight={30} />
      <Item name={data.description.name} data={data.description.pickNames} inputHeight={70} />
    </div>
  );
};

export default InputPanel;
