import React from 'react';
import './Burger.css';
import BurgerIngredient from './burger-ingredients/BurgerIngredient';

const burger = (props) => {
  return (
    <div className='Burger'>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bacon' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
