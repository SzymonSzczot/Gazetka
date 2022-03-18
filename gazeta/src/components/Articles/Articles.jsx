import React, { useState } from "react";
import "./articles.css";
import Article from "../Article/Article";

function Articles() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="articles">
      {articles.map((article) => {
        return <Article />;
      })}
    </div>
  );
}

export default Articles;
