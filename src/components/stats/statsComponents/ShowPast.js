import React from "react";

const ShowPast = ({ done, events }) => {
  function findTemplate(id) {
    return (
      <div>
        <p>{events.filter((event) => event.id == id)[0].event.name}</p>
        <p>{events.filter((event) => event.id == id)[0].event.description}</p>
      </div>
    );
  }

  return (
    <div>
      ShowPast
      {done.map((el) => (
        <div key={el.id}>
          <div>{findTemplate(el.done.idTemplate)}</div>
          <p>value: {el.done.value}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default ShowPast;
