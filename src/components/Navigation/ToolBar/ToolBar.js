import React from "react";
import classes from "./ToolBar.module.css";

const ToolBar = () => {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav className={classes.nav}>....</nav>
    </header>
  );
};

export default ToolBar;
