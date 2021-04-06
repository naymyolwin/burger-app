import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./ToolBar.module.css";

const ToolBar = () => {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <Logo />
      <nav className={classes.nav}>....</nav>
    </header>
  );
};

export default ToolBar;
