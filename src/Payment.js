import React from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import CheckoutItem from './CheckoutItem';
import {Link} from "react-router-dom"

function Payement() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="payement">
         <div className="payement-container">
             <h1>
                 Checkout(<Link to="/checkoutItem">{basket?.length} items</Link>)
             </h1>
             <div className="payement-part">
             </div>
             <div className="payement-header">
            <h4> Delivery Address</h4>
            <div className="payement address"></div>
                <p> {user?.email}</p>
                <p> test address street</p>
                <p> test adress city and state</p>
             </div>
             </div>
             
                <div className="payement-part">
                <div className="payement-header">
                    <h4> review items and delivery infos</h4>
                </div>
                <div className="payement-products" >
                {basket.map (item => (
            <CheckoutItem
            id={item.id} 
            title= {item.title}
            price= {item.price}
            rating= {item.rating}
            image={item.image}
           />
                ))}
                </div>
                </div>
                
                <div className="payement-part">
                    <div className="payement-header"> 
                    <h3> payement method</h3>
                <div className="payement-infos">

                </div>
                    </div>


                </div>




           

         </div>
            
    
    
    )
}

export default Payement
