import React, { useEffect, useState } from "react";
import styles from "./templates.module.css";
import ItemTemplates from "./templatesComponents/ItemTemplates";

const Templates = ({ events }) => {
  useEffect(() => {
    // fetchData().then((data) => {
    //   console.log(data);
    //   setEvents(data);
    // });
    // fetchData();
    // console.log("fetchData (Templates/useeffect)", fetchData());
  }, []);

  return (
    <div className={styles.templates}>
      <h2>Szablony</h2>
      {events.map((el, index) => (
        <ItemTemplates key={index} data={el} />
      ))}
    </div>
  );
};

export default Templates;
