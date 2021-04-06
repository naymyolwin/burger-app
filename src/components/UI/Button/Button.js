import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={([classes.Button], [props.btnType])}
      onClick={props.clicked}
    >
      {prop.children}
    </button>
  );
};

export default Button;
