import React from 'react';
import burgerLogo from '../../assets/logo.png';
import './Logo.css';

const logo = (props) => {
  return (
    <div className='Logo'>
      <img src={burgerLogo} alt='logo' />
    </div>
  );
};

export default logo;
