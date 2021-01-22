import Checkout from "./Checkout.js"
import Header from './Header.js';
import Payment from './Payment.js';
import Home from './Home.js';
import Login from './Login.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import React, {useEffect} from 'react';




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
       <Route path="/login">
       <h1>login</h1>
       <Login/>
      </Route>
      <Route path="/checkout">
      <Header/>
      <Checkout/>
      </Route>
      <Route path="/payment">
      <Header/>
      <Payment/>
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
