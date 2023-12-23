import './Backdrop.css';
import React from 'react';

const backdrop = (props) => {
  return props.show ? (
    <div className='Backdrop' onClick={props.close}></div>
  ) : null;
};

export default backdrop;
