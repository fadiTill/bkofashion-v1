import React, {useRef, useEffect} from 'react'

function Paypal() {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {

       
            return actions.order.create({
            intent: "CAPTURE",
            purshase_units: [
                {
                description: "test product",
                amount:{
                    currency_code: "USD",
                    value: 44.99
                }
            }

            ]

        })
    },OnApprove: async (data, actions) => {  
        const order = await actions.order.capture()
        console.log("succesful order")
    },
    OnError: (err) => {
        console.log(err)
   

   
    }

    }).render(paypal.current.capture) 
    },[]) 

    return (
        <div>
           <div ref={paypal}></div> 
        </div>
    )
}

export default Paypal
