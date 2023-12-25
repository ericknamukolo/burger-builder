import React from 'react';
import './Toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigation-tems/NavigationItems';

const toolbar = (props) => {
  return (
    <header className='Toolbar'>
      <div>MENU</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
