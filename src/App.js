import Checkout from "./Checkout.js"
import Header from './Header.js';
import Home from './Home.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";



function App() {
  return (
    //BEM
    <Router>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/checkout">
      <Checkout/>
    <h1>checkout page</h1>
      </Route>
       <Route path="/">
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
