import React, {useState} from 'react'

import { Table } from 'react-bootstrap';
import './Reviewtest.css'
import {FaStar} from "react-icons/fa";


export default function Reviewtest() {
  const [stars, setStar] = useState(null)
  const [hover, setHover]= useState(null)

  
 
    return (
        <div>
         
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>Rating</th>
      <th>Number of rating</th>
    </tr>
  </thead>
  <tbody>
    <tr className="product-review">
    <td>1</td>
    <td>Dark-Blue Mulberry Silk Pillowcase</td>
    <td>  
      <div>
      {[...Array(5)].map((star, i) => {

      const starValue = i + 1;
      // console.log(starValue);
       
      return <label> 
        <input 
        type="radio" 
        name="rating" 
        value={starValue} 
        onClick={()=> setStar(starValue)}
        
        /> 
        
      <FaStar  
      className="star"  
      color={starValue <= (hover || stars) ? "black" : "grey"}
      onMouseEnter={()=> setHover(starValue)}
      onMouseLeave={() => setHover(null)}
      />
      </label>; 
       
      })}
    </div>  
</td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr className="product-review">
      <td>2</td>
      <td>Dark-Purple Mulberry Silk Pillowcase</td>
    <td>  <FaStar /> </td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Coral-Red Mulberry Silk Pillowcase</td>
    <td>  <FaStar /> </td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Turquoise Mulberry Silk Pillowcase</td>
    <td>  <FaStar /> </td>
    <td>0</td>
    <td>
      
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
    <td>5</td>
      <td>Ivory Mulberry Silk Pillowcase</td>
    <td>  <FaStar /> </td>
    <td>0</td>
     <td>
      
      <span className="number-rating"></span>
    </td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}
