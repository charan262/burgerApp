import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
class ContactData extends Component{
    state={
        name: '',
        email: '',
        address: {
            street:'',
            postalCode: ''
        },
        loading: false
    }
    orderHandler=(event)=>{
        event.preventDefault();
        console.log(this.props.ingredients)
         //     this.setState({loading: true})
       const order ={
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customer: {
            name: 'charan',
            email: 'charan.m@gmail.com',
            address: {
                street: 'Minneapolis',
                country: 'USA',
                zipCode: '55401'
            }
        },
        deliveryMethod: 'fastest'
       }
       axios.post('/orders.json', order)
            .then(response=>{
                this.setState({loading:false})
                this.props.histroy.push('/')
            })
            .catch(error=>{
                this.setState({loading:false})
            })
    }
    render(){
        let form=(
            <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Full Name"/>
                    <input className={classes.Input} type="email" name="email" placeholder="Email"/>
                    <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal COde"/>
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
                
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4> Enter Your Contact Data</h4>
                {form}
             </div>
        )
    }
}
export default ContactData;