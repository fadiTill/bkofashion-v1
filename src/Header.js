// import React from 'react'
import {useState} from 'react'
import './Header.css'
import './Productdetails.css'
 import  SearchIcon  from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
   const[searchProduct, setSearchProduct]= useState('')
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user){
      auth.signOut();
    }
  }
    return (
        <div className="header">
          <Link to="/" >
          <img className="header_logo"src="images/transparent.png" alt="logo"/> 
          </Link>
         <div className="header_search">
          <input className="header_searchInput" type="text" placeholder="Search..."onChange={event =>{setSearchProduct(event.target.value)}}/>
          <SearchIcon
           className="header_searchIcon" />
        </div> 

        <div className="header_nav">
          <Link to={!user &&"/login"}>
        <div  onClick={handleAuthenticaton} className="header_option">
       <span
        className="header_optionLineOne">Hello {!user? 'Guest' : user.email}</span>
       <span
        className="header_optionLineTwo">{user? 'sign Out':'Sign In'}</span>
       </div>
       </Link>

       <div className="header_option">
       <span
        className="header_optionLineOne">Returns</span>
       <span
        className="header_optionLineTwo">& Orders</span>
       </div>

       <div className="header_option">
       <span
        className="header_optionLineOne">Your</span>
       <span
        className="header_optionLineTwo">BKOPSales </span>
       </div>
       
       <div className="header_nav">
       
       <Link to="/productdetails">
       <div  className="header_option">
       <span
        className="header_optionLineOne">Product</span>
       <span
        className="header_optionLineTwo">Details</span>
        </div>
        </Link>
       </div>
      
      <Link to="/checkout">
      <div  className="header_optionCart">
      <ShoppingBasketIcon/>
    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
      </div>
      </Link>
   
   </div>
  </div>
    )
};

export default Header


