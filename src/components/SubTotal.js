import React from "react";
import { getBasketTotal } from "../common/Reducer";
import { useStateValue } from "../common/StateProvider";
import "../css/SubTotal.css";
var CurrencyFormat = require("react-currency-format");

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();

  //   const total = () => {
  //     let total = 0;
  //     basket.map((item) => (total += item.price));
  //     return total;
  //   };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
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