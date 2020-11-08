import React from "react";
import { useStateValue } from "../common/StateProvider";
import "../css/CheckoutProduct.css";

function CheckoutProduct({
  id,
  image,
  description,
  price,
  starRating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const removeItemFromBasket = () => {
    dispatch({
      type: "REMOVE_ITEM_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{description}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <stro>{price}</stro>
        </p>
        <div className="checkoutProduct_rating">
          {Array(starRating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeItemFromBasket}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
