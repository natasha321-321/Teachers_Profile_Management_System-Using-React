 import React from 'react';
 import './Cart.css'
 const Cart = (props) => {
     const {cart} = props;
     let total = 0;
    // console.log(props) =

    for (const teacher of cart){
        total = total + teacher.Salary;
    }

     return (
         <div>
             <div className='cart'>
             <h4>Teacher Numbers: {props.cart.length}</h4>
             <h5>Total Salary: $ {total} </h5>
         </div>
         {
             cart?.map(newcart => {
                return (
                    <div className='cart-name'>
                    <p> {newcart.length} {newcart.Name}</p>
                       </div>
                )
            })
         }
         </div>
     );
 };
 
 export default Cart;