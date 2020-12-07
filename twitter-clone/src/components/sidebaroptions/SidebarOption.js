import React from "react";
import { NavLink } from "react-router-dom";
import s from "./sidebarOption.module.css";

function SidebarOption({ text, Icon, option }) {
  return (
    <div className={s.wrapper} >
      <div className={s.margin}>
        <NavLink to={option} activeClassName={s.activeLink}  >
          <div className={s.option} >
            <Icon fontSize="large" />
            <h2>{text}</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default SidebarOption;
