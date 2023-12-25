import React from 'react';
import './navigation-item.css';

const navigationItem = (props) => {
  return (
    <li className='NavigationItem'>
      <a href={props.link} className={props.active ? 'active' : null}>
        {props.title}
      </a>
    </li>
  );
};

export default navigationItem;
