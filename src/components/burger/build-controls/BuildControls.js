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
      <p>Build Controls</p>
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
    </div>
  );
};

export default buildControls;
