import React, {Component} from 'react';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';


class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sai Dei',
        email: 'test@test.com',
        address: {
          street: 'Test Avenue',
          zipCode: '10001',
          country: 'United States'
        },
        deliveryMethod: 'fastest'
      }
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false})
      });
  };

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name={'name'} placeholder={'Your Name'}/>
        <input className={classes.Input} type="email" name={'email'} placeholder={'Your Email'}/>
        <input className={classes.Input} type="street" name={'street'} placeholder={'Street'}/>
        <input className={classes.Input} type="postalCode" name={'postalCode'} placeholder={'Post Code'}/>
        <Button btnType={'Success'} clicked={this.orderHandler}>Get the Thing!</Button>
      </form>
    );
    if (this.state.loading)  {
      form = <Spinner/>;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;