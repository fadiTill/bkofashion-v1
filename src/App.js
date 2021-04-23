import Checkout from "./Checkout.js"
import Header from './Header.js';
import Payment from './Payment.js';
import Home from './Home.js';
import Login from './Login.js';
import Orders from './Orders.js';
import Productdetails from './Productdetails.js';
import Aboutus from './Aboutus.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import React, {useEffect} from 'react';
import Materials from "./Materials.js";
import Care from "./Care.js";
import Made from "./Made.js";
import Review from "./Review.js";
import Reviewtest from "./Reviewtest.js";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';




const stripePromise  =  loadStripe('pk_test_51IWoBJKuflhJj1pDudnlwBYeIiFmQjrxwX2QTzXF0T1cUTUmezjblgIn5Luk7w2yVrqBgQH3O8G6rcy5ngMGQ6j000fpsyzm11');



function App() {
  const[{}, dispatch]= useStateValue();
//  similar to componentdidMount and componentDidUpdate
  useEffect(() => {

auth.onAuthStateChanged((authUser) => {
  console.log("the  User is >>>", authUser);

  if (authUser) {
    
    dispatch({
      type:"SET_USER",
      user: authUser,
    });

  } else {
    dispatch({
      type:"SET_USER",
      user: null,
    })
  
  }

});
  }, []);
  return (
    //BEM
    <Router>
    <div className="App">
      <Switch>
       <Route path="/orders">
       <Header/>
       <Orders/>
       </Route>
       <Route path="/login">
       {/* <h1>login</h1> */}
       <Login/>
      </Route>
      <Route path="/productdetails">
       <Productdetails/>
      </Route>
      <Route path="/materials">
       <Productdetails/>
       <Materials/>
      </Route>
      <Route path="/care">
      <Productdetails/>
       <Care/>
      </Route>
      <Route path="/Made">
      <Productdetails/>
       <Made/>
      </Route>
      <Route path="/aboutus">
       <Aboutus/>
      </Route>
      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Elements stripe={stripePromise}>
      <Payment/>
      </Elements>
      </Route>
       <Route path="/review">
       <Header/>
      <Review/>
      </Route>
      <Route path="/reviewtest">
       <Header/>
       <Reviewtest/>
      </Route>
       <Route path="/">
       <Header/>
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
