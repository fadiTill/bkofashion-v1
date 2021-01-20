import Checkout from "./Checkout.js"
import Header from './Header.js';
import Home from './Home.js';
import Login from './Login.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";






function App() {
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
