import "./navitem.css";
import React from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
  return (
    <Link type="button" className="nav-item" to={props.to}>
      <div>{props.text}</div>
    </Link>
  );
}

export default NavItem;
