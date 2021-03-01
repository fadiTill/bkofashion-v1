import React, {useState} from 'react';
import {CarouselData} from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "./ImgCarousel.css"


const ImgCarousel  = ({carousels})  => {
const [current, setCurrent] = useState(0);
const length = carousels.length;

  const nextCarousel = () => {
  setCurrent(current === length - 1 ? 0 :  current + 1 );

  };

  const prevCarousel = () => {
    setCurrent(current ===  0 ? length - 1 :  current - 1 );
  
    }

     console.log(current)
 
  if(!Array.isArray(carousels) || carousels.length <= 0) {
 return null;
}



    return (
        <div className="slider">
           
            < FaArrowAltCircleLeft  className="Left-arrow " onClick={prevCarousel} />
            < FaArrowAltCircleRight  className="Right-arrow " onClick={nextCarousel}/>
            {CarouselData.map((carousel, index) => {
                return (
                <div className={index === current ? 'carousel.active' : 'carousel' } key={index} >
                {index === current &&(<img src={carousel.image}  className="home-image"   alt="carousel image"/>
                    )}
                
                </div>

                )
                

    
            })}
        </div>
    );
};

export default ImgCarousel;