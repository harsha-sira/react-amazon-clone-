import React from "react";
import "../css/Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The product description.</p>
        <p className="product_price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product_rating">
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img
        className="product_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_260x260._SY608_CB442725065_.jpg"
        alt=""
      />

      <button className="product_add_to_basket_button">Add to Basket</button>
    </div>
  );
}

export default Product;
