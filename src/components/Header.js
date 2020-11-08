import React from "react";
import "../css/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../common/StateProvider";
import { auth } from "../firebase/firebaseConfig";

function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header_search">
        <input className="header_input" text="" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionLineOne">
              Hello{" "}
              {user
                ? user.email.substring(0, user.email.indexOf("@"))
                : "Guest"}
            </span>
            {/* {user === null ? "Guest" : user} */}
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div> */}

        <div className="header_shppingBasket">
          <Link to="/checkout">
            <ShoppingCartIcon className="shoppingCartIcon" />
          </Link>
          <span className="header_shoppingBasket_count header_optionLineTwo">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
