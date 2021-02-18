import React, {useState} from 'react';
import {CarouselData} from './CarouselData';
import {faArrowAltCircleRight, faArrowAltCircleLeft} from 'react-icons/fa';


const ImgCarousel  = ({carousels})  => {
 const [current, setCurrent] = useState(0)
  const length = carousels.length
 
 

    return (
        <section className="slider">
             {/* < faarrowAltCircleLeft  className="left Arrow " onclick={prevscarousel}/> */}
             {/* < faarrowAltCircRight  className="Right Arrow " onclick={nextcarousel}/> */}
            < faArrowAltCircleLeft  className="left Arrow " />
            < faArrowAltCircleRight  className="Right Arrow "/>
            {CarouselData.map((carousel, index) => {

                return <img  className="home-image" src={carousel.image}  alt="carousel image"/>;
                

            })}
        </section>
    );
};

export default ImgCarousel;