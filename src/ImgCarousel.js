import React, {useState} from 'react';
import {CarouselData} from './CarouselData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import "./ImgCarousel.css"


const ImgCarousel  = ({carousels})  => {
const [current, setCurrent] = useState(0)
const length = carousels.length

  const nextCarousel = () => {
  setCurrent(current === length - 1 ? 0 :  current + 1 );

  }

  const prevCarousel = () => {
    setCurrent(current ===  0 ? length - 1 :  current - 1 );
  
    }

     console.log(current)
 
  if(!Array.isArray(carousels) || carousels.length <= 0) {
 return null;
}



    return (
        <section className="slider">
           
            < FaArrowAltCircleLeft  className="Left-arrow " onclick={prevCarousel} />
            < FaArrowAltCircleRight  className="Right-arrow " onclick={nextCarousel}/>
            {CarouselData.map((carousel, index) => {
                return (
                <div className={index === current ? 'carousel active' : 'carousel' } key={index} >
                {index === current &&(<img  className="home-image" src={carousel.image}  alt="carousel image"/>
                    )}
                
                </div>

                )
                

    
            })}
        </section>
    );
};

export default ImgCarousel;