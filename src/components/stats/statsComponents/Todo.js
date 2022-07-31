import React from "react";
import styles from "./todo.module.css";
import ItemTodo from "./todoComponents/ItemTodo";

const Todo = ({ done, events }) => {
  function handleClick() {}
  return (
    <div className={styles.todo}>
      <h2>Do wypełnienia</h2>
      <div>
        {events.map((el) => (
          <ItemTodo key={el.id} event={el.event} />
        ))}
        <button className={styles.button} onClick={handleClick}>
          Zapisz
        </button>
      </div>
    </div>
  );
};

export default Todo;
