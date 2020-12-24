import React from 'react'
import S from './messages.module.css';
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";


const Dialog = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={S.dialog}>
      <div className={S.avatar}>
        <Avatar src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
      </div>
      <NavLink to={path}>
        <div className={S.nameWpapper}>
          <div className={S.name}>{props.name}</div>
          <div className={S.nickName}>{props.nickName}</div>
          <div className={S.lastDate}>{props.lastDate}</div>
        </div>
      </NavLink>
    </div>
  );
};

export default Dialog
