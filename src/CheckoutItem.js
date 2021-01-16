import React from 'react'
import { useStateValue} from "./StateProvider";
import "./CheckoutItem.css"

function CheckoutItem({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkoutitems">
             
           <div className="checkoutitems-info">
           
               <p className="checkoutitme_title">{title}</p>
               <img  className="checkoutitems-image" src={image}  alt=""/>


                <p className="checkoutitems-price" > 
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutitems-rating">
                {Array(rating).fill().map ((_, i) => (<p>⭐️</p> ))}
                </div>
           
            <div>  
            
            <button >Delete</button> 
           </div>
                 
                 </div>
                 </div>
      
    )
}

export default CheckoutItem
