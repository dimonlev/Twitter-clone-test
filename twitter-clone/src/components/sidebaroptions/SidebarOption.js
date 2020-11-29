import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebarOption.module.css";

function SidebarOption({ text, Icon, option }) {
  return (
    <div className={s.wrapper} >
      <NavLink to={option} activeClassName={s.activeLink}  >
        <div className={s.option} >
          <Icon />
          <h2>{text}</h2>
        </div>
      </NavLink>
    </div>
  );
}

export default SidebarOption;
