import React from "react";

const ShowPast = ({ done, events }) => {
  function findTemplate(id) {
    return <p>{events.filter((event) => event.id == id)[0].event.name}</p>;
  }

  return (
    <div>
      ShowPast
      {done.map((el) => (
        <div key={el.id}>
          <h3>{findTemplate(el.done.idTemplate)}</h3>
          <p>{el.done.value}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowPast;
