import React from "react";
import Person from "./Person";
import "./contact.css";

const Contact = () => {
  const persons = [
    {
      name: "Angelika Sarna",
      phone: "123123123",
      email: "angela.s@gmail.com",
      description:
        "Redaktorka, załozycielka gazety Stańczyk. Prywatnie praktykantka w głosie wielkopolskim",
    },
    {
      name: "Angelika Sarna",
      phone: "123123123",
      email: "angela.s@gmail.com",
      description: "Redaktorka",
    },
    {
      name: "Angelika Sarna",
      phone: "123123123",
      email: "angela.s@gmail.com",
      description: "Redaktorka",
    },
  ];

  return (
    <div className="people">
      {persons.map((person) => {
        console.log("xd");
        return <Person person={person}></Person>;
      })}
    </div>
  );
};

export default Contact;
