import React from 'react'
import CurrencyFormat from 'react-currency-format'
import  './Order.css'
import CheckoutItem from './CheckoutItem';
import moment from 'moment';


//npm install moment for timestamp does not work
//npm install --save moment react-moment

function Order({order}) {
    return (
        <div className='order'>
            <h2> Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order_id">
            <small>{order.id} </small>
            </p>
            {order.data.basket?.map(item=> (
                <CheckoutItem
                id={item.id} 
                title= {item.title}
                price= {item.price}
                rating= {item.rating}
                image={item.image}
                />

            ))}
            <CurrencyFormat
            renderText={(value) => (
                <h3 className="order_total">Order Total: {value}</h3>
            )}

          
          decimalScale={2}
          value={order.data.amount/100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          /> 
        </div>
       
    )
}

export default Order
