import React, { Component, Fragment } from 'react';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/build-controls/BuildControls';
import Modal from '../../components/ui/modal/ModalSheet';
import OrderSummary from '../../components/burger/order-summary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 1,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasing: false,
  };

  purchase = () => {
    this.setState({ purchasing: true });
  };

  close = () => {
    this.setState({ purchasing: false });
  };
  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
  };

  render() {
    return (
      <Fragment>
        {this.state.purchasing ? (
          <Modal show={this.state.purchasing} close={this.close}>
            <OrderSummary
              ingredients={this.state.ingredients}
              close={this.close}
            />
          </Modal>
        ) : null}
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          moreClick={this.addIngredient}
          lessClick={this.removeIngredient}
          price={this.state.totalPrice}
          purchase={this.purchase}
        />
      </Fragment>
    );
  }
}

export default BurgerBuilder;
