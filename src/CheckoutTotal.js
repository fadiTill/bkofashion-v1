import React from 'react'
import { useStateValue} from "./StateProvider";


function CheckoutTotal({id, title, price}) {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkoutitems">
             
           <div className="checkoutitems-info">
           
               <p className="checkoutitems_title">{title}</p>
              
                <p className="checkoutitems-price" > 
                <small>$</small>
                <strong>{price}</strong>
                </p>
               
          
                 </div>
                 </div>
      
    )
}

export default CheckoutTotal
