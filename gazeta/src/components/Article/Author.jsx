import React from "react";

function Author(props) {
    console.log(props)
    return <div className="article-author">
        <div className="author-data">
            <div>
                {props.data.description}
            </div>
            <div>
                <div className="phone">
                    tel. {props.data.phone}
                </div>
            </div>
        </div>
    </div>;
}

export default Author;
