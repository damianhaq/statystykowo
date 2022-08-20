import React from "react";
import styles from "./showPast.module.css";

const ShowPast = ({ done, events }) => {
  return (
    <div className={styles.showPast}>
      <h2>Statystyki</h2>
      {done.map((el) => (
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
