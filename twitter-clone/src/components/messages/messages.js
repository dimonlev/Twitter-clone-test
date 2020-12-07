import { Avatar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import S from "./messages.module.css";

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

const Message = (props) => {
  return (
    <div className={S.message}>
      {props.text}
    </div>
  );
};

let dialog = [
  { id: 1, name: "Dima", nickName: "@dimonlev" },
  { id: 2, name: "Sveta", nickName: "@svetalev" },
  { id: 3, name: "Vano", nickName: "@vano" },
  { id: 4, name: "Kolyn", nickName: "@omny" },
  { id: 5, name: "Sasha", nickName: "@claster" },
  { id: 6, name: "Jenya", nickName: "@jenny" },
];

let message = [
  { id: 1, text: "How are you?", date: 2020 },
  { id: 2, text: "I'm fine", date: 2020 },
  { id: 3, text: "How are you?", date: 2020 },
  { id: 4, text: "How are you?", date: 2020 },
  { id: 5, text: "Where you going", date: 2020 },
  { id: 6, text: "How are you?", date: 2020 },
];

let newDialogData = dialog.map( dialog => <Dialog name={dialog.name} nickName={dialog.nickName} id={dialog.id} />);
let newMessageData = message.map ( message => <Message text={message.text} id={message.id} date={message.date} />)

const Messages = (props) => {
  return (
    <div className={S.wrapper}>
      <div className={S.dialogs + " " + S.active}>
        {newDialogData}
      </div>

      <div className={S.messages}>
        {newMessageData}
      </div>
    </div>
  );
};

export default Messages;
