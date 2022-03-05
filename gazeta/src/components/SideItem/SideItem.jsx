import "./sideitem.css";
import React from "react";
import { useState } from "react";

function SideItem(props) {
  return (
    <button type="button" className="side-item">
      {props.text}
    </button>
  );
}

export default SideItem;
