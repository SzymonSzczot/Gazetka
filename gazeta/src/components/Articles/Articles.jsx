import React, { useState } from "react";
import "./articles.css";
import Article from "../Article/Article";
import {useFetch} from "../../hooks/useFetch";
import {DOMAIN} from "../../CONSTANTS";

function Articles() {
  const {loading, items} = useFetch(DOMAIN + "articles/items");
  return (
    <div className="articles">
      {loading ? "loading": items.map((article) => {
        return <Article key={article.id} id={article.id} article={article}/>
      })}
    </div>
  );
}

export default Articles;
