import React from "react";

import logo from "../resources/NoteCodeLogo.svg";

export default function Header(props) {
  return (
    <header className="header">
      <div className="header__title">
        <img src={logo} alt="Logo" />
      </div>
      <h2 className="header__subtitle">Create & Share</h2>
      <h3 className="header__subtitle_2">Your Code easily</h3>
    </header>
  );
}
