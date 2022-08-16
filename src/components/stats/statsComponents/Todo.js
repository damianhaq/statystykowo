import React, { useEffect, useState } from "react";
import styles from "./todo.module.css";
import ItemTodo from "./todoComponents/ItemTodo";

const Todo = ({ events }) => {
  // const [filteredEvents, setFilteredEvents] = useState([...events]);
  // const filteredEvents = [...events];

  // useEffect(() => {
  // TODO: Sorting not working

  // const tempArr = [...events];
  // for (let i = 0; i < done.length; i++) {
  //   for (let j = 0; j < filteredEvents.length; j++) {
  //     console.log("done: ", done[i].done.idTemplate, "events: ", events[j].id);
  //     if (done[i].done.idTemplate == filteredEvents[j].id) {
  //       console.log("filtered", events[j].event.name, `events[${j}].id done[${i}].done.idTemplate`);
  //       setFilteredEvents(filteredEvents.splice((item) => item.id != done[i].done.idTemplate));
  //       // tempArr.splice(j, 1);
  //     }
  //   }
  // }

  // done.forEach((el) => setFilteredEvents(filteredEvents.filter((event) => event.id != el.done.idTemplate)));

  // setFilteredEvents(tempArr);
  // }, [done]);

  // useEffect(() => {
  //   console.log("filteredEvents UE", filteredEvents);
  // }, [filteredEvents]);

  return (
    <div className={styles.todo}>
      <h2>Do wypełnienia</h2>
      <div>
        {events.map((el) => (
          <ItemTodo key={el.id} event={el} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
