import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./showPast.module.css";

import angleLeft from "../../../icons/angle-left-solid.svg";
import angleRight from "../../../icons/angle-right-solid.svg";
import ShowPastItem from "./showPastComponent/ShowPastItem";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const weeks = ["pon", "wto", "śro", "czw", "pią", "sob", "nie"];

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
      if (i === 0) {
        sortedByDaysTempArr[index].push(tempArr[i]);
      } else {
        if (new Date(tempArr[i].done.date.seconds * 1000).getDate() === new Date(tempArr[i - 1].done.date.seconds * 1000).getDate()) {
          sortedByDaysTempArr[index].push(tempArr[i]);
        } else {
          index++;
          sortedByDaysTempArr.push([]);
          sortedByDaysTempArr[index].push(tempArr[i]);
        }
      }
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
        <div className={styles.weeksWrapper}>
          {weeks.map((el) => (
            <p key={el} className={styles.week}>
              {el}
            </p>
          ))}
        </div>
        <div className={styles.daysWrapper}>
          {/* <p>{doneFilteredByMonth[0][0].id}</p> */}
          {doneFilteredByMonth[0] &&
            doneFilteredByMonth[0][0] &&
            doneFilteredByMonth.map((day, index) => (
              // , gridRowStart: Math.ceil(new Date(day[0].done.date.seconds * 1000).getDate() / 7)
              <div
                style={{
                  gridColumnStart: new Date(day[0].done.date.seconds * 1000).getDay() === 0 ? 7 : new Date(day[0].done.date.seconds * 1000).getDay(),
                  gridRowStart: Math.ceil(new Date(day[0].done.date.seconds * 1000).getDate() / 7),
                }}
                key={index}
                className={styles.day}
              >
                <p className={styles.dayNumber}>{new Date(day[0].done.date.seconds * 1000).getDate()}</p>
                {/* <p style={{ fontSize: 10 }}>{(new Date(day[0].done.date.seconds * 1000).getDate() / 7).toFixed(1)}</p>
                <p style={{ fontSize: 10 }}>{new Date(day[0].done.date.seconds * 1000).getDay() === 0 ? 7 : new Date(day[0].done.date.seconds * 1000).getDay()}</p> */}
                <p className={styles.doneNumber}>{day.length}</p>
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
