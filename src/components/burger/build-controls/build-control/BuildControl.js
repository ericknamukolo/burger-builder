import React from 'react';
import './BuildControl.css';

const buildControl = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Less' onClick={() => props.lessClick(props.type)}>
      Less
    </button>
    <button className='More' onClick={() => props.moreClick(props.type)}>
      More
    </button>
  </div>
);

export default buildControl;
