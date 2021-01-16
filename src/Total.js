import React from 'react';
import   "./Total.css";
import CurrencyFormat from "react-currency-format";
import{BasketItems} from "./Reducer";
import {useStateValue} from "./StateProvider";
import CheckoutTotal from './CheckoutTotal';



function Total() {
    const [{basket}, dispatch]= useStateValue();
    
    return (
       <div>
        <div className="subtotal">
           <CurrencyFormat
          renderText={(value)=> (
              <> 
              <p>
                  detail({basket.length} items):
         
          {basket.map (item => (
            <CheckoutTotal
            id={item.id} 
            title= {item.title}
            price= {item.price}
            
            />
               ))}
               <hr></hr>
                <strong> Total:{value}</strong>
              </p>
              {/* <small className="subtotal-gift">
                  <input type="checkbox"/>This order
                  contains a gift
              </small> */}
             
                  </>
          )}
          decimalScale={2}
          value={BasketItems(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          /> 
          <button> Proceed to checkout</button>
        </div>
        </div>
    )
}

export default Total
