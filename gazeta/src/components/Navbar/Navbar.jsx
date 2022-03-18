import "./navbar.css";
import React from "react";
import NavItem from "../NavItem/NavItem";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="">
          <NavItem text="Strona główna" />
        </Link>
        <Link to="info">
          <NavItem text="Informacja" />
        </Link>
        <Link to="publish">
          <NavItem text="Redakcja" />
        </Link>
        <Link to="contact">
          <NavItem text="Kontakt" />
        </Link>
        <Link to="gallery">
          <NavItem text="Galeria" />
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Navbar;
