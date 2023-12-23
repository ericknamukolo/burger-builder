import React, { Fragment } from 'react';
import './../../ui/modal/Modal.css';

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
      <button onClick={props.close}>Close</button>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <button>Yes</button>
      <button onClick={props.close}>No</button>
    </Fragment>
  );
};

export default orderSummary;
