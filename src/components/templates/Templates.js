import React, { useEffect, useState } from "react";
import styles from "./templates.module.css";
import ItemTemplates from "./templatesComponents/ItemTemplates";

const Templates = ({ events, done }) => {
  return (
    <div className={styles.templates}>
      <h2>Szablony</h2>
      {events.map((el, index) => (
        <ItemTemplates key={index} done={done} template={el} />
      ))}
    </div>
  );
};

export default Templates;
