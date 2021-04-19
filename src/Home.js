import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <img
           className="home__image" 
           src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
           alt=""
           />
           {/* Products */}
           <div className="home__row">
           <Product 
               id="12321341"
               title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
               price={29.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
           />
           <Product 
               id="89893333"
               title="Fitbit Charge 4 With Built-in GPS"
               price={228.0}
               rating={4}
               image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
           />
           <Product 
               id="92326678"
               title="LG 108 cm (43 inches) 4K UHD Smart LED TV 43UM7290PTF (Ceramic Black) (2019 Model)"
               price={449.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/912Mfy9s3GL._SL1500_.jpg"
           />
           </div>
           <div className="home__row">
           <Product 
               id="67893426"
               title="Apple iPhone 11 Pro Max (64GB) - Midnight Green"
               price={999.99}
               rating={5}
               image="https://m.media-amazon.com/images/I/61ers6OzvUL._AC_UY218_.jpg"
           />
           <Product 
               id="73282018"
               title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
               price={120.00}
               rating={4}
               image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
           />
           <Product 
               id="23281018"
               title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
               price={1290.99}
               rating={5}
               image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
           />  
           </div>
           <div className="home__row">
           <Product 
               id="32949249"
               title="Samsung S19F350HNW 18.5-inch AH IPS LED Monitor (Black) (Not A TV)"
               price={5500}
               rating={4}
               image="https://m.media-amazon.com/images/I/81JNAFOB3lL._AC_UY218_.jpg"
           />
           <Product 
               id="32729109"
               title="HP 14 10th Gen Intel Core i5 Processor 14-inch Laptop (i5-1035G1/8GB/1TB HDD + 256GB SSD/Win 10 Home/MS Office/Natural Silver ),14s cs3009TU"
               price={5500}
               rating={4}
               image="https://m.media-amazon.com/images/I/71QmFal-QfL._AC_UY218_.jpg"
           />
           </div>
           
        </div>
    )
}

export default Home