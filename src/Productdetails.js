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
   <Link to="/Materials">           
   <li><a>Materials </a></li>
   </Link>
   <Link to="/Care">           
   <li><a>Care </a></li>
   </Link>
   <Link to="/Made">           
   <li><a>How it is made </a></li>
   </Link>
</ul>

        </div>

        
    )
}

export default Productdetails

