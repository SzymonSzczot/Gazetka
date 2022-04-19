import "./sideitem.css";
import React from "react";
import { useState } from "react";
import {useFetch} from "../../hooks/useFetch";
import {DOMAIN} from "../../CONSTANTS";

function SideItem(props) {

  const url = () => {
    if (props.category !== "all"){
      return "articles/items" + "?category=" + props.category
    }
    else {
      return "articles/items"
    }

  }
  let {loading, items, setItems} = useFetch(DOMAIN + url());
  const set = () => {
    props.setter(items)
  }

  return (
    <button type="button" className="side-item" onClick={set}>
      {props.text}
    </button>
  );
}

export default SideItem;
