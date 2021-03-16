import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'react-bootstrap';
import './Reviewtest.css'


export default function Reviewtest() {

  

  

  


  

 
    return (
        <div>
           <FontAwesomeIcon icon="fa-star" /> 
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
    <td>5</td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr className="product-review">
      <td>2</td>
      <td>Dark-Purple Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Coral-Red Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
     
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Turquoise Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
      
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
    <td>5</td>
      <td>Ivory Mulberry Silk Pillowcase</td>
    <td>5</td>
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
