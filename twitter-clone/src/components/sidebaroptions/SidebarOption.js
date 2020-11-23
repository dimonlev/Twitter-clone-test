import React from "react";
import sOption from "./SidebarOption.module.css";

function SidebarOption({ active, text, Icon, option }) {
  return (
    <a href={option} className={sOption}>
      <div
        className={`${sOption.sidebarOption} ${
          active && sOption.sidebarOptionActive
        }`}
      >
        <Icon />
        <h2>{text}</h2>
      </div>
    </a>
  );
}

export default SidebarOption;
