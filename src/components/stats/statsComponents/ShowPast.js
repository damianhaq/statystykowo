import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./showPast.module.css";

import angleLeft from "../../../icons/angle-left-solid.svg";
import angleRight from "../../../icons/angle-right-solid.svg";
import ShowPastItem from "./showPastComponent/ShowPastItem";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

const ShowPast = ({ done, events }) => {
  const [doneFilteredByMonth, setDoneFilteredByMonth] = useState([]);
  const [pickMonth, setPickMonth] = useState(new Date().getMonth());
  // TODO: pick month like below to include year
  // const [pickMonth, setPickMonth] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });

  useEffect(() => {
    // Get only current/picked month from "done"
    const tempArr = done.filter((el) => new Date(el.done.date.seconds * 1000).getMonth() == pickMonth); // (January gives 0) thats why now its 7
    setDoneFilteredByMonth(tempArr);
  }, [pickMonth]);

  return (
    <div className={styles.showPast}>
      <h2>Statystyki</h2>
      <div className={styles.monthWrapper}>
        {/* TODO: its not refreshing after click */}
        <img src={angleLeft} onClick={() => setPickMonth((prev) => prev - 1)}></img>
        {/* Show name of month */}
        <h3>{months[pickMonth]}</h3>
        <img src={angleRight} onClick={() => setPickMonth((prev) => prev + 1)}></img>
      </div>
      {doneFilteredByMonth.map((el) => (
        <ShowPastItem key={el.id} el={el} events={events} />
      ))}
    </div>
  );
};

export default ShowPast;
