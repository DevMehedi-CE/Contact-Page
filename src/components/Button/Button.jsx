import React from "react";
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ isOutline, icons, text }) => {
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icons}
      {text}
    </button>
  );
};

export default Button;
