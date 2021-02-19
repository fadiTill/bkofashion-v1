import React, {useState} from 'react';
import {CarouselData} from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "./ImgCarousel.css"


const ImgCarousel  = ({carousels})  => {
 const [current, setCurrent] = useState(0)
  const length = carousels.length
 
 

    return (
        <section className="slider">
             {/* < FaarrowAltCircleLeft  className="left Arrow " onclick={prevscarousel}/> */}
             {/* < FaarrowAltCircRight  className="Right Arrow " onclick={nextcarousel}/> */}
            < FaArrowAltCircleLeft  className="Left-arrow " />
            < FaArrowAltCircleRight  className="Right-arrow "/>
            {CarouselData.map((carousel, index) => {

                return <img  className="home-image" src={carousel.image}  alt="carousel image"/>;
                

            })}
        </section>
    );
};

export default ImgCarousel;