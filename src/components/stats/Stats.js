import React from "react";
import { useEffect, useState } from "react";
import ShowPast from "./statsComponents/ShowPast";
import Todo from "./statsComponents/Todo";

const Stats = ({ done, events }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // filtered events -----
    let tempArr = [...events];
    done.forEach((el) => {
      tempArr = filterArr(tempArr, el.done.idTemplate, el.done.date.seconds);
    });
    setFilteredEvents(tempArr);
    // --------------------
  }, []);

  function isToday(date) {
    const today = new Date();
    if (today.toDateString() === date.toDateString()) {
      return true;
    }
    return false;
  }

  function filterArr(arr, id, timestamp) {
    const date = new Date(timestamp * 1000);
    let farr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id != id || !isToday(date)) {
        farr.push(arr[i]);
      }
    }
    return farr;
  }

  return (
    <div>
      <Todo events={filteredEvents} />
      <ShowPast done={done} events={events} />
    </div>
  );
};

export default Stats;
