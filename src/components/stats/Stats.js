import React from "react";
import { useEffect, useState } from "react";
import Disposable from "./statsComponents/Disposable";
import ShowPast from "./statsComponents/ShowPast";
import Todo from "./statsComponents/Todo";

const Stats = ({ done, events }) => {
  const [filteredEventsDaily, setFilteredEventsDaily] = useState([]);
  const [filteredEventsDisposable, setFilteredEventsDisposable] = useState([]);

  useEffect(() => {
    // filtered events daily -----
    let tempArr = [...events];
    done.forEach((el) => {
      tempArr = filterArr(tempArr, el.done.idTemplate, el.done.date.seconds);
    });
    setFilteredEventsDaily(tempArr);
    // --------------------

    // filtered disposable
    let tempArrDisp = [];
    for (let i = 0; i < events.length; i++) {
      if (events[i].event.repeat == "Jednorazowa") tempArrDisp.push(events[i]);
    }
    setFilteredEventsDisposable(tempArrDisp);
    // ---------------------
  }, []);

  function filterArr(arr, id, timestamp) {
    const date = new Date(timestamp * 1000);
    let farr = [];
    for (let i = 0; i < arr.length; i++) {
      if ((arr[i].id != id && arr[i].event.repeat == "Codziennie") || !isToday(date)) {
        farr.push(arr[i]);
      }
    }
    return farr;
  }

  function isToday(date) {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      return true;
    }
    return false;
  }

  return (
    <div>
      <Disposable events={filteredEventsDisposable} />
      <Todo events={filteredEventsDaily} />
      <ShowPast done={done} events={events} />
    </div>
  );
};

export default Stats;
