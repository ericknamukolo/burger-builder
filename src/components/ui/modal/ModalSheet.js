import React, { Fragment } from 'react';
import './Modal.css';
import Backdrop from '../backdrop/Back';

const modal = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} />

      <div className='Modal'>{props.children}</div>
    </Fragment>
  );
};

export default modal;
