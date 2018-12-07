import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey}/>
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);

  console.log({transIngredients});
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  );
};

export default burger;