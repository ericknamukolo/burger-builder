import React from 'react';
import './Button.css';

const btn = (props) => {
  return (
    <button onClick={props.click} className='Button'>
      {props.children}
    </button>
  );
};

export default btn;
