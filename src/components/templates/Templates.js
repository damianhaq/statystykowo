import React, { useEffect, useState } from "react";
import { fetchData } from "../../functions/fetchData";
import styles from "./templates.module.css";
import ItemTemplates from "./templatesComponents/ItemTemplates";

const Templates = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      console.log(data);
      setEvents(data);
    });
  }, []);

  return (
    <div className={styles.templates}>
      <h2>Szablony</h2>
      {events.map((el) => (
        <ItemTemplates key={el.id} data={el} />
      ))}
    </div>
  );
};

export default Templates;
