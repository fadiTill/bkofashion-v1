import React, {useState, useEffect} from 'react'
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import CheckoutItem from './CheckoutItem';
// import PayPal from './PayPal';
import {Link, useHistory} from "react-router-dom"
import {CardElement,useStripe,useElements,} from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {BasketItems} from "./Reducer.js";
import axios from './axios';
import {db} from './firebase.js';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    // const [checkout, setCheckOut] = useState(false);
    const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();


  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

 const[error, setError] = useState(null);
 const [disabled, setDisabled] = useState(true);
 const [clientSecret, setClientSecret] = useState(true);
 
 




// const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

    // const payload = await stripe 

 //   const {error, paymentMethod} = await stripe.createPaymentMethod({
 //     type: 'card',
 //     card: elements.getElement(CardElement),
 //   });
 // };


 useEffect(() => {
  // using dollard subcunnits * 100
    const getClientSecret = async () => {
       
        const response = await axios({
         method: 'post',
         url: `/payments/create?total=${BasketItems(basket) * 100}`
    });
    //update basket to charge correct amount
    setClientSecret(response.data.clientSecret)
    // console.log('response data>>>',  response.data.clientSecret)
    // not geting the data 
 }

    getClientSecret();
     console.log('get',getClientSecret())
 }, [basket])
 


 console.log('SECRET IS >>>', clientSecret)
//  console.log(clientSecret)
console.log('user>>>>',user)




    const handleSubmit = async (event) => {
      event.preventDefault();
      setProcessing(true);

     const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card: elements.getElement(CardElement)
     }

//      //payement confirmation
  }).then(({paymentIntent}) =>  {


    db
   .collection('users')
   .doc(user?.uid)
   .collection('orders')
   .doc(paymentIntent.id)
   .set({
       basket: basket,
       amount: paymentIntent.amount,
       created: paymentIntent.created,

   })



   setSucceeded(true);
   setError(null)
   setProcessing(false)

   
   dispatch({
       type: 'EMPTY_BASKET'
   })

   history.replace('/orders')


    })
}



    const handleChange  = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");

    };


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
            //add key to fix error uniq key prop
            // key={item.id}
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
                
                {/* <div className="payment-part">
                    <div className="payment-header"> 
                    <h3> payment method</h3>
                <div  id="paypal-button-container" className="payment-infos">
              
                 {checkout? ( <PayPal/>
                    ):( 
                <button   onClick={()=>{
                    setCheckOut(true);
                }} >
                Checkout
                </button>
)
            } 
                 </div>
                    </div>
                   

                </div> */}


                   <div className="payment-part">
                    <div className="payment-header"> 
                    <h3> payment method</h3>
                    <div className="payment-infos"></div>
                     {/* <form onSubmit={handleSubmit}>
      <CardElement /> */}
      {/* <button type="submit" disabled={!stripe}>
        Submit Payement
      </button> */}
    {/* </form>  */}
      <form onSubmit={handleSubmit}>
    <CardElement onChange={handleChange}/> 

    <div className='price'> 
    <CurrencyFormat
          renderText={(value)=> (
              <> 
               <strong> Total:{value}</strong>
               </>
               )}
          decimalScale={2}
          value={BasketItems(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          /> 
            </div> 
     <button type="submit" disabled={processing || disabled || succeeded}>
      <span>{processing ? <p>Processing</p>: "Buy"}</span>
      </button>

   

     {error && <div>{error}</div>}  
    </form>



                    </div>
                     </div> 
                   

                </div> 
                
                
           

     
            
    
    
    )
}
// }

export default Payment
