import React from "react";
import "../css/Product.css";

function Product({ description, price, starRating, image }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{description}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(starRating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img className="product_image" src={image} alt="" />

      <button className="product_add_to_basket_button">Add to Basket</button>
    </div>
  );
}

export default Product;
