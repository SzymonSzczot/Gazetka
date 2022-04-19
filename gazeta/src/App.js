import "./App.css";
import { Sidebar, Articles } from "./components/index.js";
import {useFetch} from "./hooks/useFetch";
import {DOMAIN} from "./CONSTANTS";
import Article from "./components/Article/Article";
import React, {useEffect, useState} from "react";

function App() {
    let {loading, items, setItems} = useFetch(DOMAIN + "articles/items");
    const [articles, setArticles] = useState([])

    useEffect(() => {
        if (articles.length > 0) {
            setItems(articles)
        }
    })

    return (
    <div className="content">
        <Sidebar setter={setArticles}/>
        <div className="articles">
            {loading ? "loading": items.map((article) => {
                return <Article key={article.id} id={article.id} article={article}/>
            })}
        </div>
    </div>
  );
}

export default App;
