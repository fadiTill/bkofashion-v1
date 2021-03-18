
import React, {useState} from 'react'
import './Reviewtest.css'
import {FaStar} from "react-icons/fa";


export default function Rating() {
    const [stars, setStar] = useState(null)
    const [hover, setHover]= useState(null)

    return (
        <div className="product-rating">
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
    )
}
