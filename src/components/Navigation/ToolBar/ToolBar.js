import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./ToolBar.module.css";

const ToolBar = (props) => {
  return (
    <header className={classes.ToolBar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      {/* <div clicked={props.clicked}>MENU</div> */}
      <div className={classes.Logo}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default ToolBar;
