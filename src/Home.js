import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container" >
             <img className="home-image" src="images/bkotaie72.jpg" alt="Red Pillow"/>
             <div className="home-row">
                 <Product 
                 id={1}
                 title="Dark-Blue Mulberry Silk Pillowcase" 
                 image="images/Dark-blue.png" 
                 price={44.99} 
                 rating={5}/>
                 <Product 
                 id={2}
                 title="Dark-Purple Mulberry Silk Pillowcase"
                 image="images/Dark-Purple.png"
                 price={44.99} 
                 rating={5} />
            </div>
            <div className="home-row">
                 <Product  
                 id={3}
                 title="Coral-Red Mulberry Silk Pillowcase"
                 image="images/Coral-Red-Principal.jpg"
                 price={44.99} 
                 rating={5} />
                 <Product 
                 id={4}
                 title="Turquoise Mulberry Silk Pillowcase"
                 image="images/Turquoise-leaf.png" 
                 price={44.99} 
                 rating={5}/>
                 <Product 
                 id={5}
                 title="Ivory Mulberry Silk Pillowcase"
                 image="images/Ivory-8.png"
                 price={44.99} 
                 rating={5} />     
            </div>
            <div className="home-row">
                 <Product 
                 id={6}
                 title="White-Ivory Mulberry Silk Pillowcase"
                 image="images/White-Ivory.png"
                 price={44.99} 
                 rating={5} />  
            </div>
        </div>
    </div>
    )
}

export default Home
