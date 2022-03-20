import React from "react";
import "./person.css";

const Person = (props) => {
  return (
    <div className="person">
      <img src="https://scontent-frx5-2.xx.fbcdn.net/v/t1.6435-9/86730815_2637377956491329_6547190357237432320_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ad2b24&_nc_ohc=ZnyS7ybbpFgAX-L_xTx&tn=v4lF1aFrKVx_G1Z_&_nc_ht=scontent-frx5-2.xx&oh=00_AT-tluqRFeGVazSStVhod-o310nJXZ-ENpjwqKaVqBES4Q&oe=625BD0F3"></img>
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
