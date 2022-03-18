import "./navitem.css";
import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <button type="button" className="nav-item">
      <Link to={props.to}>{props.text}</Link>
    </button>
  );
}

export default NavItem;
