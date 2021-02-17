import React from 'react'
 import Carousel from './Carousel'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div className="home">
            <div className="home-container" >
              {/* <img className="home-image" src="images/bkotaie72.jpg" alt="Red Pillow"/>  */}
              <Carousel/> 
             <div className="home-row">
                 <Product 
                 id={1}
                 title="Dark-Blue Mulberry Silk Pillowcase" 
                 image="images/dark-blue.png" 
                 price={44.99} 
                 rating={5}/>
                 <Product 
                 id={2}
                 title="Dark-Purple Mulberry Silk Pillowcase"
                 image="images/purple.png"
                 price={44.99} 
                 rating={5} />
                 <Product  
                 id={3}
                 title="Coral-Red Mulberry Silk Pillowcase"
                 image="images/pink.png"
                 price={44.99} 
                 rating={5} />
                  </div>
            <div className="home-row">
                 <Product 
                 id={4}
                 title="Turquoise Mulberry Silk Pillowcase"
                 image="images/turquoise.png" 
                 price={44.99} 
                 rating={5}/>
                 <Product 
                 id={5}
                 title="Ivory Mulberry Silk Pillowcase"
                 image="images/ivory.png"
                 price={44.99} 
                 rating={5} />     
                 <Product 
                 id={6}
                 title="White-Ivory Mulberry Silk Pillowcase"
                 image="images/ivory-white.png"
                 price={44.99} 
                 rating={5} />  
            </div>
        </div>
    </div>
    )
}

export default Home
