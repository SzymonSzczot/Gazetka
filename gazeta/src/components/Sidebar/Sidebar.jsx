import "./sidebar.css";
import React from "react";
import SideItem from "../SideItem/SideItem";

function Sidebar() {
  return (
    <div className="sidebar">
      <SideItem text="Sport" />
      <SideItem text="Kultura" />
      <SideItem text="Newsy" />
      <SideItem text="Plotki" />
      <SideItem text="Filozofia" />
      <SideItem text="Historia" />
      <SideItem text="Historia kobiet" />
    </div>
  );
}

export default Sidebar;
