import React from "react";
import Aux from "../../hoc/Aux";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import classes from "./Layout.module.css";

class Layout extends React.Component {
  state = {
    showSideDrawer: true,
  };

  SideDrawerCloseHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.SideDrawerCloseHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
