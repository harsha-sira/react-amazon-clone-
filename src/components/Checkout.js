import React from "react";
import "../css/Checkout.css";
import SubTotal from "./SubTotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_banner_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* Basket items */}
          {/* Basket items */}
          {/* Basket items */}
          {/* Basket items */}
        </div>
      </div>

      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
