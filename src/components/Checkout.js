import React from "react";
import { useStateValue } from "../common/StateProvider";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_banner_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h4 className="checkout_welcome">
            Hello {user === null ? "Guest" : user?.email}
          </h4>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          <FlipMove>
            {basket.map((item, index) => (
              <CheckoutProduct
                id={item.id}
                price={item.price}
                image={item.image}
                starRating={item.starRating}
                description={item.description}
                key={index}
              />
            ))}
          </FlipMove>
        </div>
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
