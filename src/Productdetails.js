import  "./Productdetails.css";
import {Link} from "react-router-dom";
import './Header.css'

import React from 'react'

function Productdetails() {
    
    return (
        <div >
            <ul>
    <Link to="/">           
   <li><a>Home</a></li>
   </Link>
  <li><a href="#">Materials</a></li>
  <li><a href="#">Care</a></li>
  <li><a href="#">How it is made</a></li>
</ul>

        </div>

        
    )
}

export default Productdetails
