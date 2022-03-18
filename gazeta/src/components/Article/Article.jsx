import React from "react";
import "./article.css";
import Title from "./Title";
import Content from "./Content";

function Article(props) {
  console.log(props);
  return (
    <div className="article" key={props.id}>
      <Title text={props.article.title} />
      <Content text={props.article.text} />
    </div>
  );
}

export default Article;
