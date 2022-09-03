import React from "react";
import { useEffect, useState } from "react";
import styles from "./detailEvent.module.css";
import leftArrow from "../../../icons/angle-left-solid.svg";

const DetailEvent = ({ setdetailEvent, detailEvent, done }) => {
  const [filteredDone, setFilteredDone] = useState([]);

  useEffect(() => {
    setFilteredDone(done.filter((el) => el.done.idTemplate === detailEvent.id));
  }, []);

  return (
    <div className={styles.detailEvent}>
      <div className={styles.titleContainer}>
        <img className={styles.backArrow} src={leftArrow} onClick={() => setdetailEvent({})} />
        <h2>{detailEvent.event.name}</h2>
      </div>
      <div className={styles.doneContainer}>
        {filteredDone.map((el) => (
          <div className={styles.done} key={el.id}>
            <p>{el.done.value}</p>
            <p className={styles.doneDate}>{new Date(el.done.date.seconds * 1000).toLocaleString().slice(0, 17)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailEvent;
