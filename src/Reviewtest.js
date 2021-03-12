import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Table } from 'react-bootstrap';


export default function Reviewtest() {

  
//initial ratings
  const ratings = {
    Dark_Blue_Pillowcase:5,
    Dark_Purple_Pillowcase:4.5,
    Coral_Red_Pillowcase:4.5,
    Turquoise_Red_Pillowcase:5,
    Ivory_Pillowcase:5
  }

  //Total stars
  const starsTotal = 5;

  //run getRatings when Dom loads

   //Get ratings
   const getRatings  = ()  => {
    for (let rating in ratings){
      console.log(ratings[rating]);
      //Get precentage 
const starPercentage = (ratings[rating]/starsTotal) * 100;

//Round to nearest 10
const starPercentageRounded = `${Math.round
  (starPercentage/10) * 10}%
}`;

console.log(starPercentageRounded);

    }
  }


  document.addEventListener('DOMContentLoaded', getRatings);



 
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
      <div className="starts-outer">
        <div className="stars-inner"></div>
      </div>
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr className="product-review">
      <td>2</td>
      <td>Dark-Purple Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
      <div className="starts-outer">
        <div className="stars-inner"></div>
      </div>
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Coral-Red Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
      <div className="starts-outer">
        <div className="stars-inner"></div>
      </div>
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
      <td>4</td>
      <td>Turquoise Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
    <td>
      <div className="starts-outer">
        <div className="stars-inner"></div>
      </div>
      <span className="number-rating"></span>
    </td>
    </tr>
    <tr>
    <td>5</td>
      <td>Ivory Mulberry Silk Pillowcase</td>
    <td>5</td>
    <td>0</td>
     <td>
      <div className="starts-outer">
        <div className="stars-inner"></div>
      </div>
      <span className="number-rating"></span>
    </td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}
