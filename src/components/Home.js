import React from "react";
import "../css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image "
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12345-1"
            description="Yeedi K600 Robot Vacuum Cleaner with Turbo Mode Suction Up to 1500Pa, Self-Charging, Quiet Cleaning for Pet Hair, Hard Floors and Carpets, Up to 110 min Runtime"
            price={19.99}
            starRating={3}
            image="https://m.media-amazon.com/images/I/31CBG4GZ53L._AA210_.jpg"
          />
          <Product
            id="12345-2"
            description="Samsung Galaxy Note 10+ Factory Unlocked Cell Phone with 256 GB (U.S. Warranty), Aura Glow (Silver) Note10+"
            price={9.99}
            starRating={2}
            image="https://m.media-amazon.com/images/I/319f1QTg10L._AA210_.jpg"
          />
          <Product
            id="12345-3"
            description="Webcam with Microphone, 1080P HD Streaming USB Computer Webcam [Plug and Play] [30fps] for PC Video Conferencing/Calling/Gaming, Laptop/Desktop Mac, Skype/YouTube/Zoom/Facetime"
            price={235.0}
            starRating={5}
            image="https://m.media-amazon.com/images/I/41stPkoXu6L._AA210_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12345-4"
            description="Amazon Brand - Mae Women's Uplift Plunge T-Shirt"
            price={29.49}
            starRating={3}
            image="https://m.media-amazon.com/images/G/01/PLF/AF/2020/Deals_Composite_Imagery/t5_intimates2._AA210_.jpg"
          />
          <Product
            id="12345-5"
            description="Instant Pot Lux Mini 6-in-1 Electric Pressure Cooker, Sterilizer Slow Cooker, Rice Cooker, Steamer, Saute, and Warmer, 3 Quart, 10 One-Touch Programs"
            price={47.49}
            starRating={4}
            image="https://m.media-amazon.com/images/I/41M8kRP5I0L._AA210_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="12345-6"
            description="Sony X750H 65-inch 4K Ultra HD LED TV -2020 Model"
            price={677.29}
            starRating={5}
            image="https://m.media-amazon.com/images/I/51YXJDHX+uL._AA210_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
