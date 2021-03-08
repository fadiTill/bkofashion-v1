import React from 'react'
// import {AiFillStar} from 'react-icons/fa';

export default function rating() {
    return (
        <div className="product-rating">
                 {Array(5).fill().map ((_, i) => (<p>★</p> ))} 
                  {/* <AiFillStar className="staricon"/> */}
                </div>
    )
}
