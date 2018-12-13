import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Would you like to buy a hambeurger ?</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        clicked
        btnType={'Danger'}>Cancel Order?</Button>
      <Button
        clicked
        btnType={'Success'}>FOOD!</Button>
    </div>
  );
};

export default checkoutSummary;