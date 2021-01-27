import React, {useState} from 'react'
import "./Payment.css"
import {useStateValue} from "./StateProvider";
import CheckoutItem from './CheckoutItem';
import PayPal from './PayPal';
import {Link} from "react-router-dom"

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const [checkout, setCheckOut] = useState(false);
    return (
        <div className="payment">
         <div className="payment-container">
             <h1>
                 Checkout(<Link to="/checkoutItem">{basket?.length} items</Link>)
             </h1>
             </div>
             <div className="payment-part">
             <div className="payment-header">
            <h4> Delivery Address</h4>
            </div>
            <div className="payment-address">
                <p> {user?.email}</p>
                <p> test address street</p>
                <p> test address city and state</p>
             </div>
             </div>
                <div className="payment-part">
                <div className="payment-header">
                    <h4> review items and delivery infos</h4>
                </div>
                <div className="payment-products" >
                {basket.map (item => (
            <CheckoutItem
            id={item.id} 
            title= {item.title}
            price= {item.price}
            rating= {item.rating}
            image={item.image}
        
            
           />
                ))}
                <br></br>
                </div>
                </div>
                
                <div className="payment-part">
                    <div className="payment-header"> 
                    <h3> payment method</h3>
                <div className="payment-infos">
                
                    {checkout? ( <PayPal/>
                    ):( 
                <button onClick={()=>{
                    setCheckOut(true);
                }} >
                Checkout
                </button>
)
            }
                 </div>
                    </div>
                   

                </div>




           

         </div>
            
    
    
    )
}

export default Payment
