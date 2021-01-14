import React from 'react';
import   "./Total.css";
import CurrencyFormat from "react-currency-format";
import{BasketItems} from "./Reducer";
import {useStateValue} from "./StateProvider";

function Total() {
    const [{basket}, dispatch]= useStateValue();
    
    return (
    
        <div className="subtotal">
           <CurrencyFormat
          renderText={(value)=> (
              <> 
              <p>
                  Total({basket.length} Items):
          <strong> {value}</strong>
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
    )
}

export default Total
