import React from "react";
import styles from "./todo.module.css";
import ItemTodo from "./todoComponents/ItemTodo";

const Disposable = ({ events }) => {
  return (
    <div className={styles.todo}>
      <h2>Jednorazowe</h2>
      {events.map((el) => (
        <ItemTodo key={el.id} event={el} />
      ))}
    </div>
  );
};

export default Disposable;
