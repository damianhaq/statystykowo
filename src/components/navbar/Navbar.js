import React from "react";
import styles from "./navbar.module.css";

const navPick = ["Dodaj", "Statystykowo", "Test"];

const Navbar = ({ nav, changeNav }) => {
  return (
    <div className={styles.nav}>
      {navPick.map((el, index) => (
        <button className={nav == index + 1 ? styles.active : styles.button} key={index} onClick={() => changeNav(index + 1)}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
