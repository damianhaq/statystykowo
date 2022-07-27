import React, { useEffect, useState } from "react";
import CheckButton from "../CheckButton";

const Repeat = () => {
  const [checked, setChecked] = useState(0);
  const names = ["Codziennie", "Co Tydzień", "Co Miesiąc", "Jednorazowa"];

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  function handleClick(el) {
    setChecked(el);
  }

  return (
    <div>
      <h3>Powtażalność</h3>
      {names.map((el, index) => (
        <CheckButton key={index} name={el} isChecked={checked == index + 1 ? true : false} onClick={() => handleClick(index + 1)} />
      ))}
    </div>
  );
};

export default Repeat;
