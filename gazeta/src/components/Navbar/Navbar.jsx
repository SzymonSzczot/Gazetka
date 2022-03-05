import "./navbar.css";
import React from "react";
import NavItem from "../NavItem/NavItem";

function Navbar() {
  return (
    <div className="navbar">
      <NavItem text="Strona główna" />
      <NavItem text="Informacja" />
      <NavItem text="Redakcja" />
      <NavItem text="Kontakt" />
      <NavItem text="Galeria" />
    </div>
  );
}

export default Navbar;
