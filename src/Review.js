import React from 'react'
 import Rating from "./Rating"
import {ProductData} from "./ProductData"
// import Product from "./Product"

export default function Review() {
   
    return (
        <div className="review-container">
    <table className="table-striped">
        <thead>
        <tr>
            <th> Product</th>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <th> Review</th>
     </tr>
     </thead>
     <tbody>
         <tr>
        
        {ProductData.map((prod, index) => {
        return(
<h5>{prod.title}, 
{/* <tr><Rating/></tr> */}
</h5>

 
     
  
//         <Product
//   title={prod.title}
//     />
        )  
        }

        )
    }
    
     <td></td>
      <Rating/>
     <tr></tr>
     <Rating/>
     <tr></tr>
     <Rating/>
     <tr></tr>
     <Rating/>
     <tr></tr>
     <Rating/> 
</tr>
   <div className="stars-outer">
    <div className="starts-inner"></div>   
   </div>
   <span className="number-rating"></span>
    </tbody>   
   
</table>
    </div>
    )} 
    
            
        // <div  className="review-container">
        //     <div className="review-form">  
        //     <form>
        //     <p> Write a review</p>
        //     <br></br>
        //     <br></br>
        //     <br></br>
        //     <br></br>
        //     <br></br>
        //      <select>
        //     <option  value="Product1"> Product1</option>
        //     <option value="Product2"> Product2</option>
        //     <option value="Product2"> Product3</option>
           
        //      </select> 
        //     <Rating/>
        //     </form>
        //     <button className="submit-review"> Submit</button>
        //     </div> 
        // </div>
 
