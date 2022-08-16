import React from "react";
import { useEffect, useState } from "react";
import ShowPast from "./statsComponents/ShowPast";
import Todo from "./statsComponents/Todo";

const Stats = ({ done, events }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    console.log("FilteredEvents: ", filteredEvents);

    // filtered events -----
    let tempArr = [...events];
    done.forEach((el) => {
      tempArr = filterArr(tempArr, el.done.idTemplate);
    });
    setFilteredEvents(tempArr);
    // --------------------
  }, []);

  function filterArr(arr, condition) {
    let farr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id != condition) {
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
