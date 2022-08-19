import React, { useEffect, useState } from "react";
import styles from "./todo.module.css";
import ItemTodo from "./todoComponents/ItemTodo";

const Todo = ({ events }) => {
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
