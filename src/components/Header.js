import React from "react";
import { Forum, Person } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__logo"
        src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
        alt="Tinder Logo"
      />

      <IconButton>
        <Forum className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
