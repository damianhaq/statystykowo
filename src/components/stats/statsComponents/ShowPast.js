import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./showPast.module.css";

import angleLeft from "../../../icons/angle-left-solid.svg";
import angleRight from "../../../icons/angle-right-solid.svg";
import ShowPastItem from "./showPastComponent/ShowPastItem";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const weeks = [];

const ShowPast = ({ done, events }) => {
  const [doneFilteredByMonth, setDoneFilteredByMonth] = useState([]);
  const [pickMonth, setPickMonth] = useState(new Date().getMonth());
  // TODO: pick month like below to include year
  // const [pickMonth, setPickMonth] = useState({ month: new Date().getMonth(), year: new Date().getFullYear() });

  useEffect(() => {
    // Get only current/picked month from "done"
    const tempArr = done.filter((el) => new Date(el.done.date.seconds * 1000).getMonth() == pickMonth); // (January gives 0) thats why now its 7

    const sorted = sortDoneByDays(tempArr);
    setDoneFilteredByMonth(sorted);
  }, [pickMonth]);

  useEffect(() => {
    console.log("doneFilteredByMonth", doneFilteredByMonth);
  }, [doneFilteredByMonth]);

  function sortDoneByDays(tempArr) {
    const sortedByDaysTempArr = [[]];
    let index = 0;

    for (let i = 0; i < tempArr.length; i++) {
      if (i !== 0) {
        if (new Date(tempArr[i].done.date.seconds * 1000).getDate() === new Date(tempArr[i - 1].done.date.seconds * 1000).getDate()) {
          sortedByDaysTempArr[index].push(tempArr[i]);
        } else {
          index++;
          sortedByDaysTempArr.push([]);
        }
      } else sortedByDaysTempArr[index].push(tempArr[i]);
    }
    return sortedByDaysTempArr;
  }

  return (
    <div className={styles.showPast}>
      <h2>Statystyki</h2>
      <div className={styles.calendar}>
        <div className={styles.monthWrapper}>
          <img src={angleLeft} onClick={() => setPickMonth((prev) => prev - 1)}></img>
          <h3>{months[pickMonth]}</h3>
          <img src={angleRight} onClick={() => setPickMonth((prev) => prev + 1)}></img>
        </div>
        <div className={styles.daysWrapper}>
          {/* <p>{doneFilteredByMonth[0][0].id}</p> */}
          {doneFilteredByMonth[0] &&
            doneFilteredByMonth[0][0] &&
            doneFilteredByMonth.map((day, index) => (
              // new Date(day[0].done.date.seconds * 1000).getDay()
              <div style={{ gridColumnStart: new Date(day[0].done.date.seconds * 1000).getDay() }} key={index} className={styles.day}>
                {/* {day.length} */}
                {new Date(day[0].done.date.seconds * 1000).getDate()}
              </div>
            ))}
        </div>
      </div>
      {/* {doneFilteredByMonth.map((el) => (
        <ShowPastItem key={el.id} el={el} events={events} />
      ))} */}
    </div>
  );
};

export default ShowPast;
