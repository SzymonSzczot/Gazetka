import "./navitem.css";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function NavItem(props) {
    const [additional, setAdditional] = useState("nav-item")

    useEffect(() => {
        setAdditional(additional + " " + props.type)
    }, [])

    return (
    <Link type="button" className={additional} to={props.to}>
      <div>{props.text ? props.text: props.icon}</div>
    </Link>
  );
}

export default NavItem;
