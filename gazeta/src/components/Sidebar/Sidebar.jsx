import "./sidebar.css";
import React from "react";
import SideItem from "../SideItem/SideItem";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <SideItem text="Wszystkie" category="all" setter={props.setter}/>
      <SideItem text="Sport" category="sport" setter={props.setter}/>
      <SideItem text="Kultura" category="culture" setter={props.setter} />
      <SideItem text="Newsy" category="news" setter={props.setter} />
      <SideItem text="Plotki" category="gossip" setter={props.setter} />
      <SideItem text="Filozofia" category="philosophy" setter={props.setter} />
      <SideItem text="Historia" category="history" setter={props.setter} />
      <SideItem text="Historia kobiet" category="women_history" setter={props.setter} />
    </div>
  );
}

export default Sidebar;
