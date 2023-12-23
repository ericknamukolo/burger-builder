import React, { Fragment } from 'react';
import './../../ui/modal/Modal.css';
import Btn from '../../ui/button/Button';

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
      <b>Total Price: ZMW {props.price.toFixed(1)}</b>
      <p>Continue to checkout?</p>
      <Btn>CONTINUE</Btn>
      <Btn click={props.close}>CANCEL</Btn>
    </Fragment>
  );
};

export default orderSummary;
