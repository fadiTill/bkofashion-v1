

import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating}) {
     const [{basket}, dispatch] = useStateValue();
     console.log(" my basket>>", basket);

    const addBasket = () => {
        // dispatch action into the data layer
        dispatch({
            type: "ADD_BASKET",
            item: {
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
            },
        });
    };
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price" > 
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product-rating">
                {Array(rating).fill().map ((_, i) => (<p>⭐️</p> ))}
                </div>
            </div>
                <img  className="product-image" src={image}  alt=""/>
                <button onClick={addBasket}> Add to basket</button>
            </div>
       
        
    )
}

export default Product
