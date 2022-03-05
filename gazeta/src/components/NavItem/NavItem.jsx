import "./navitem.css";
import React from "react";

function NavItem(props) {
  return (
    <button type="button" className="nav-item">
      {props.text}
    </button>
  );
}

export default NavItem;
