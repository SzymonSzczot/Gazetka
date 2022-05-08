import React from "react";

function Content(props) {
  return <div className="content-text" dangerouslySetInnerHTML={{__html: props.text}}/ >;
}

export default Content;
