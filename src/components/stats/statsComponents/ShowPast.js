import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./showPast.module.css";

import angleLeft from "../../../icons/angle-left-solid.svg";
import angleRight from "../../../icons/angle-right-solid.svg";
import ShowPastItem from "./showPastComponent/ShowPastItem";

const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
const weeks = ["pon", "wto", "śro", "czw", "pią", "sob", "nie"];

const ShowPast = ({ setdetailEvent, done, events }) => {
  const [doneFilteredByMonth, setDoneFilteredByMonth] = useState([]);
  const [pickMonth, setPickMonth] = useState(new Date().getMonth());
  const [pickDay, setPickDay] = useState(new Date().getDate());
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

  function getWeekNumberInMonth(day) {
    const date = new Date(day[0].done.date.seconds * 1000);
    let monthStart = new Date(date);
    monthStart.setDate(0);
    let offset = ((monthStart.getDay() + 1) % 7) - 1; // -1 is for a week starting on Monday
    return Math.ceil((date.getDate() + offset) / 7);
  }

  function getDayInWeek(day) {
    return new Date(day[0].done.date.seconds * 1000).getDay() === 0 ? 7 : new Date(day[0].done.date.seconds * 1000).getDay();
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
          {doneFilteredByMonth[0] &&
            doneFilteredByMonth[0][0] &&
            doneFilteredByMonth.map((day, index) => (
              <div
                onClick={() => setPickDay(new Date(day[0].done.date.seconds * 1000).getDate())}
                style={{
                  gridColumnStart: getDayInWeek(day),
                  gridRowStart: getWeekNumberInMonth(day),
                }}
                key={index}
                className={new Date(day[0].done.date.seconds * 1000).getDate() === pickDay ? styles.daySelected : styles.day}
              >
                <p className={styles.dayNumber}>{new Date(day[0].done.date.seconds * 1000).getDate()}</p>
                <p className={styles.doneNumber}>{day.length}</p>
                <p style={{ fontSize: 10 }}>{getDayInWeek(day)}</p>
                <p style={{ fontSize: 10 }}>{getWeekNumberInMonth(day)}</p>
              </div>
            ))}
        </div>
      </div>
      <div>
        {doneFilteredByMonth[0] &&
          doneFilteredByMonth[0][0] &&
          doneFilteredByMonth
            .filter((el) => new Date(el[0].done.date.seconds * 1000).getDate() == pickDay)
            .map((day) => day.map((done) => <ShowPastItem setdetailEvent={setdetailEvent} key={done.id} el={done} events={events} />))}
      </div>
    </div>
  );
};

export default ShowPast;
