import React, {useState} from 'react'

import { Table } from 'react-bootstrap';
import './Reviewtest.css'
import {FaStar} from "react-icons/fa";


export default function Reviewtest() {
  const [star, setStar] = useState(null)

  
 
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
    <td>  {[...Array(5)].map((star, index) => {

      const starValue = index +1;
       
      return <label> 
        <input type="radio" name="rating" value={starValue} onClick={()=> setStar = starValue}/> 
      < FaStar  className= "start"  color=""/></label>; 
       
      })}
      
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
