import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <Aux>
      <div>Toolbar, Side drawer, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
}

export default Layout;
