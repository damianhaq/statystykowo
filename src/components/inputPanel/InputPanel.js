import { addData } from "../../functions/addData";
import Item from "./inputPanelComponent/Item";
import styles from "./inputPanel.module.css";
import { useState, useEffect } from "react";

const data = {
  repeat: {
    type: "repeat",
    name: "Powtażalność",
    pickNames: ["Codziennie", "Co Tydzień", "Co Miesiąc", "Jednorazowa"],
  },
  type: {
    type: "type",
    name: "Typ",
    pickNames: ["Skala od-do", "Tak / Nie", "Tekst", "Liczba", "Lista"],
  },
  name: {
    type: "name",
    name: "Podaj nazwę",
    pickNames: "input",
  },
  description: {
    type: "description",
    name: "Opis",
    pickNames: "input",
  },
};

const tempData = {
  repeat: "Codziennie",
  type: "Liczba",
  name: "TestNazwa",
  description: "Opis bla lorem laskdfhnal aflh akfh akf haklfh afhajkldfgbqljfbh ajklfhl",
};

const InputPanel = () => {
  const [inputData, setInputData] = useState({ name: "", description: "" });
  const [showWriteInfo, setShowWriteInfo] = useState("");

  function addDataToState(data) {
    // data need to be "key: value"
    setInputData((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  }

  // DEV
  useEffect(() => {
    console.log(inputData);
  }, [inputData]);

  function handleClick() {
    addData("event", inputData).then((value) => {
      setShowWriteInfo(value);
    });
  }

  return (
    <div className={styles.inputPanel}>
      <h2>Dodaj</h2>
      <Item inputData={inputData} addDataToState={addDataToState} data={data.repeat} />
      <Item inputData={inputData} addDataToState={addDataToState} data={data.type} />

      <Item inputData={inputData.name} addDataToState={addDataToState} data={data.name} inputHeight={30} />
      <Item inputData={inputData.description} addDataToState={addDataToState} data={data.description} inputHeight={70} />
      {showWriteInfo.length > 0 && <p className={styles.writeInfo}>{showWriteInfo}</p>}
      <button className={styles.button} onClick={handleClick}>
        Dodaj
      </button>
    </div>
  );
};

export default InputPanel;
