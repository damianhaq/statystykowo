import React, { useEffect, useState } from "react";
import styles from "./itemTodo.module.css";

import ItemTodoRender from "./ItemTodoRender";

const ItemTodo = ({ event }) => {
  return (
    <div className={styles.itemTodo}>
      <h3>{event.event.name}</h3>
      <p className={styles.description}>{event.description}</p>
      {/* <Render event={event} /> */}
      <ItemTodoRender event={event} />
    </div>
  );
};

export default ItemTodo;
