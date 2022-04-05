import React from "react";
import Person from "./Person";
import "./contact.css";
import {useFetch} from "../../hooks/useFetch";
import {DOMAIN} from "../../CONSTANTS";

const Contact = () => {
  const {loading, items} = useFetch(DOMAIN + "users/items");

  return (
      <div className="people">
        {loading ? "loading": items.map((person) => {
          return <Person person={person}/>;
        })}
      </div>
  );
};

export default Contact;
