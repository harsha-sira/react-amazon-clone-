import React from "react";
import "../css/SubTotal.css";
var CurrencyFormat = require("react-currency-format");

function SubTotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items): <strong>{value}</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        decimalScale={2}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
