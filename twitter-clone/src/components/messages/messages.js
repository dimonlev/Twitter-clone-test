import React from "react";
import S from "./Messages.module.scss";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const Messages = (props) => {

  return (
    <div className={S.wrapper}>

      <div className={S.dialogs + " " + S.active}>
        <div className={S.headerMessages}>
          <div className={S.headerMessagesTitle}>
            <h2>Messages</h2>
          </div>
          <MailOutlineIcon />

        </div>
        {props.newDialogData}
      </div>

      <div className={S.messages}>
        <div className={S.headerMessages}>

          <Avatar className={S.avatar} src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
          <div className={S.headerMessagesTitle}>
            <div className={S.userName}></div>

          </div>
          <InfoIcon />

        </div>
        {props.newMessageData}
        <div className={S.inputBox}>
          <input
            className={S.input}
            // ref={newMessageElement}
            onChange={props.addNewMesage}
            value={props.messagePage.tempMessage} ></input>
          <SendIcon className={S.send} onClick={props.newMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
