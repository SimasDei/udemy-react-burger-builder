import React, {Component} from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('Order Summary will update')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key={igKey}>
        <span
          style={{textTransform: 'capitalize'}}>
          {igKey}</span>: {this.props.ingredients[igKey]}
        </li>
      });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>This is One Righteous Burger!</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price}</strong></p>
        <p>Continue to Checkout?</p>
        <Button
          btnType={'Danger'}
          clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button
          btnType={'Success'}
          clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    )
  };
}

export default OrderSummary;