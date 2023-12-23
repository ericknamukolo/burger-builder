import React from 'react';
import burgerLogo from '../../assets/logo.png';
import './Logo.css';

const logo = (props) => {
  return (
    <div className='Logo'>
      <img src={burgerLogo} />
    </div>
  );
};

export default logo;
