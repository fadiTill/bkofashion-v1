import React from 'react'
// import Rating from "./Rating"
import {ProductData} from "./ProductData"
// import Product from "./Product"

export default function Review() {
   
    return (
        <div>
        {ProductData.map((prod, index) => {
        return(
  <h1>{prod.title}</h1>

//         <Product
//   title={prod.title}
//     />
        )
        }

        )
    }

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
 
