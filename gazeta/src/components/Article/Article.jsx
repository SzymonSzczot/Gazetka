import React from "react";
import "./article.css";
import Title from "./Title";
import Content from "./Content";
import Header from "./Header";
import Picture from "./Picture";
import Author from "./Author";

function Article(props) {
  return (
    <div className="article" key={props.id}>
        <Title text={props.article.title} />
        <Header text={props.article.header} />
        <Picture picture={props.article.picture}/>
        <Content text={props.article.content} />
        <Author data={props.article.author}/>
    </div>
  );
}

export default Article;
