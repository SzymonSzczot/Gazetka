import React from "react";
import "./picture.css"

function Picture(props) {
    return <div>
        <img className="article-picture" src={props.picture}/>
    </div>;
}

export default Picture;
