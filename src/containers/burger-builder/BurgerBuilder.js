import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };
  render() {
    return (
      <Fragment>
        <Burger />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
