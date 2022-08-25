import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./showPast.module.css";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

const ShowPast = ({ done, events }) => {
  const [doneFilteredByMonth, setDoneFilteredByMonth] = useState([]);
  const [pickMonth, setPickMonth] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });

  useEffect(() => {
    // Get only current/picked month from "done"
    const tempArr = done.filter((el) => new Date(el.done.date.seconds * 1000).getMonth() == pickMonth.month);
    setDoneFilteredByMonth(tempArr);
    console.log(pickMonth);
  }, []);

  return (
    <div className={styles.showPast}>
      <h2>Statystyki</h2>
      <div className={styles.monthWrapper}>
        {/* TODO: its not refreshing after click */}
        <button onClick={() => setPickMonth((prev) => ({ ...prev, month: 2 }))}>pop</button>
        {/* Show name of month */}
        {doneFilteredByMonth.length > 0 && <h3>{months[new Date(doneFilteredByMonth[1].done.date.seconds * 1000).getMonth()]}</h3>}
        <button>nas</button>
      </div>
      {doneFilteredByMonth.map((el) => (
        <div className={styles.item} key={el.id}>
          <p className={styles.name}>{events.filter((event) => event.id == el.done.idTemplate)[0].event.name}</p>
          {/* <p>{events.filter((event) => event.id == el.done.idTemplate)[0].event.description}</p> */}
          <p className={styles.value}>{el.done.value}</p>
          <p>data: {new Date(el.done.date.seconds * 1000).toLocaleString().slice(0, 17)}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowPast;
