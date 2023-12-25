import React from 'react';
import NavigationItem from './navigation-item/navigation-item';
import './NavigationItems.css';

const links = [
  { title: 'Home', link: 'https://google.com', active: true },
  { title: 'Pricing', link: 'https://google.com' },
  { title: 'Contact Us', link: 'https://google.com' },
  { title: 'Services', link: 'https://google.com' },
];

const navigationItems = (props) => {
  return (
    <ul className='NavigationItems'>
      {links.map((item) => {
        return (
          <NavigationItem
            title={item.title}
            link={item.link}
            active={item.active}
          />
        );
      })}
    </ul>
  );
};

export default navigationItems;
