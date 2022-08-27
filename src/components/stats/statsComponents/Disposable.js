import React from "react";

const Disposable = ({ events }) => {
  return (
    <div>
      {events.map((el) => (
        <p key={el.id}>{el.event.name}</p>
      ))}
    </div>
  );
};

export default Disposable;
