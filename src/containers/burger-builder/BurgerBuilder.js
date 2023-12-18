import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 1,
    },
  };

  render() {
    return (
      <Fragment>
        <Burger ingredients={this.state.ingredients} />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
