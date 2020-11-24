import React from "react";
import { NavLink } from "react-router-dom";
import sOption from "./sidebarOption.module.css";

function SidebarOption({ active, text, Icon, option }) {
  return (
    <NavLink to={option} className={sOption} activeClassName={sOption}>
      <div
        className={`${sOption.sidebarOption} ${
          active && sOption.sidebarOptionActive
        }`}
      >
        <Icon />
        <h2>{text}</h2>
      </div>
    </NavLink>
  );
}

export default SidebarOption;
