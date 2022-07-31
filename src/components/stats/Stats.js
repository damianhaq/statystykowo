import React from "react";
import ShowPast from "./statsComponents/ShowPast";
import Todo from "./statsComponents/Todo";

const Stats = ({ done, events }) => {
  return (
    <div>
      <Todo done={done} events={events} />
      <ShowPast />
    </div>
  );
};

export default Stats;
