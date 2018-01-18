import React from 'react';
import classes from './Burger.css';
import Burgering from './Burgering/Burgering';
const Burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <Burgering  type={igKey} key={igKey+i} />
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[])
    if(transformedIngredients.length===0){
        transformedIngredients=<p>Please Start adding Ingredients!</p>
    }
    console.log(transformedIngredients);
    return(
           <div className={classes.Burger}>
               <Burgering type="bread-top"/>
               {transformedIngredients}
               <Burgering type="bread-bottom"/>
            </div>
    )
}
export default Burger;