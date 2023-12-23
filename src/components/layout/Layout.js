import React, { Fragment } from 'react';
import './Layout.css';
import Toolbar from '../navigation/toolbar/Toolbar';

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <main className='Content'>{props.children}</main>
  </Fragment>
);

export default layout;
