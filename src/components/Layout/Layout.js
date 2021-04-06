import React from "react";
import Aux from "../../hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <ToolBar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
