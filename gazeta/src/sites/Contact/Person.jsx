import React from "react";
import "./person.css";

const Person = (props) => {
    console.log(props)
  return (
    <div className="person">
      <img src={props.person.picture}></img>
      <div className="data">
        <h3>{props.person.name}</h3>
        <div className="contact-info">
          {props.person.email}, {props.person.phone}
        </div>
        <h4>{props.person.description}</h4>
      </div>
    </div>
  );
};

export default Person;
