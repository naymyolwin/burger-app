import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import Aux from "../../hoc/Aux";

export class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger</div>
        <div>Build Control</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
