import React, {useState} from 'react';
import {CarouselData} from './CarouselData';


const Carousel  = ()  => {
// const [current, setCurrent] = useState(0),
// const length = carousels.length

    return (
        <div>
            {CarouselData.map((imgcarousel, index) => {

                return <img  className="home-image" src={imgcarousel.image}  alt="carousel image"/>;
                

            })}
        </div>
    )
}

export default Carousel;