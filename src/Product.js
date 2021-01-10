

import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product-info">
                <p>silk pillowcase</p>
                <p className="product-price" > 
                <small>$</small>
                <strong>39.99</strong>
                </p>
                <div className="product-rating">
                <p>⭐️</p>
                </div>
            </div>
                <img  className="product-image" src="images/product.jpg" alt=""/>
                <button> Add to basket</button>
            </div>
       
        
    )
}

export default Product
