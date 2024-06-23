import React from "react";

import logo from "../images/logo.svg";

export default function Header(props) {
  return (
    <header>
      <div className="get-started">
        Get started by editting <b>index.html</b>
      </div>
      <img className="logo" src={logo} alt="Main Logo" />
    </header>
  );
}
