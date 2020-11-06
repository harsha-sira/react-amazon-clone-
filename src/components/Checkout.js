import { userInfo } from "os";
import React from "react";
import { useStateValue } from "../common/StateProvider";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";

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
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              price={item.price}
              image={item.image}
              starRating={item.starRating}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
