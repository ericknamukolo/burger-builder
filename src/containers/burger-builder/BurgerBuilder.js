import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 2,
      bacon: 1,
      cheese: 4,
      meat: 0,
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
