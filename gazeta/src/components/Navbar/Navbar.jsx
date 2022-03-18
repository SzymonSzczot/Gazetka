import "./navbar.css";
import React from "react";
import NavItem from "../NavItem/NavItem";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavItem text="Strona główna" to="" />
      <NavItem text="Informacja" to="info" />
      <NavItem text="Redakcja" to="publish" />
      <NavItem text="Kontakt" to="contact" />
      <NavItem text="Galeria" to="gallery" />
    </div>
  );
}

export default Navbar;
