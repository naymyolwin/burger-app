import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./ToolBar.module.css";

const ToolBar = () => {
  return (
    <header className={classes.ToolBar}>
      <div>MENU</div>
      <Logo />
      <nav className={classes.nav}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;
