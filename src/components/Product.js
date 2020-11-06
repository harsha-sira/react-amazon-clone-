import React from "react";
import { useStateValue } from "../common/StateProvider";
import "../css/Product.css";

function Product({ id, description, price, starRating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    console.log("Basket --->", basket);
    //dispatch item to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        description: description,
        price: price,
        starRating: starRating,
        image: image,
      },
    });
  };

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

      <button className="product_add_to_basket_button" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
