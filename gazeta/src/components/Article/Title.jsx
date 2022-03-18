import React from "react";
import "./article.css";

function Title(props) {
  return <div className="article-content title">{props.text}</div>;
}

export default Title;
