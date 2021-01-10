import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home-container" >
             <img  className="home-image" src="images/bkotaie72.jpg" alt="Red Pillow"/>
             <div className="home-row">
                 <Product/>
                 <Product/>
                 <Product/>
                 <Product/>
                  {/*product */}
            </div>
            <div className="home-row">
                 <Product/>
                 <Product/>
                 <Product/>
                   
            </div>

            <div className="home-row">
                 <Product/>
                 <Product/>
                 <Product/>
                 <Product/>
                
            </div>
        </div>
    </div>
    )
}

export default Home
