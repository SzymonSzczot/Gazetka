import "./navbar.css";
import React from "react";
import NavItem from "../NavItem/NavItem";
import {AiOutlineHome} from "react-icons/ai";
function Navbar() {
    const main_icon = () => {
        return <AiOutlineHome/>
    }
  return (
    <div className="navbar">
      <NavItem text="Strona główna" to="" type="hideable" />
      <NavItem text="" to="" type="icon" icon={main_icon()} />
      <NavItem text="Informacja" to="info" type="" />
      <NavItem text="Redakcja" to="publish" type="" />
      <NavItem text="Kontakt" to="contact" type="" />
      <NavItem text="Galeria" to="gallery" type="" />
    </div>
  );
}

export default Navbar;
