

import React from 'react';
import  "./Checkout.css";
import Total from "./Total.js";
import { useStateValue} from "./StateProvider";
// import ProductCheckout from "./ProductCheckout";

function Checkout() {
    return (
        <div className="checkout">
            <div clasName="chechout-left">
           <img className="checkout-img"src="images/image-top.jpg" alt=""/> 

           <div> 
               <h2 className="checkout-title"> Your shoping basket</h2>
            {/*BaketItem*/}
            {/*BaketItem*/}
            {/*BaketItem*/}
            {/*BaketItem*/}
               </div>
        </div>
        <div className="checkout-right">
            <Total/>

        </div>
    </div>

        

       
    );
}

export default Checkout
