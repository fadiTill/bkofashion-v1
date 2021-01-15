

import React from 'react';
import  "./Checkout.css";
import Total from "./Total.js";
import { useStateValue} from "./StateProvider";
// import { BasketItems } from './Reducer';
 import CheckoutItem from './CheckoutItem';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div clasName="chechout-left">
           {/* <img className="checkout-img"src="images/image-top.jpg" alt=""/>  */}
        
           {/* <div>  */}

           
               <h2 className="checkout-title"> Your shoping basket</h2>


               {basket.map (item => (
            <CheckoutItem
            id={item.id} 
            title= {item.title}
            price= {item.price}
            rating= {item.rating}
            image={item.image}
            />
               ))}
               {/* </div> */}
        </div>
        <div className="checkout-right">
            <Total/>

        </div>
    </div>

        

       
    );
}

export default Checkout
