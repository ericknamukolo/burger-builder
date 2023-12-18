import React, { Fragment } from 'react';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey, i) => {
    return (
      <li key={igKey + i}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span> :{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
    </Fragment>
  );
};

export default orderSummary;
