import React from 'react';
import './BuildControls.css';
import BuildControl from './build-control/BuildControl';

let controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {
  return (
    <div className='BuildControls'>
      <strong>
        <p>Price: {'ZMW' + ' ' + props.price.toFixed(1)}</p>
      </strong>
      {controls.map((control, i) => {
        return (
          <BuildControl
            label={control.label}
            type={control.type}
            key={control.label + i}
            moreClick={props.moreClick}
            lessClick={props.lessClick}
          />
        );
      })}
      <button className='OrderButton' onClick={props.purchase}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
