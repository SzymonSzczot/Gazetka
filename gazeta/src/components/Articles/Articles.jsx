import React, { useState } from "react";
import "./articles.css";
import Article from "../Article/Article";

function Articles() {
  const article_list = [
    { id: 1, text: "article1" },
    { id: 2, text: "article2" },
    { id: 3, text: "art3" },
  ];
  const [articles, setArticles] = useState(article_list);
  return (
    <div className="articles">
      {articles.map((article) => {
        return <Article id={article.id} article={article} />;
      })}
    </div>
  );
}

export default Articles;
