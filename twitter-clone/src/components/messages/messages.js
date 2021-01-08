import React from "react";
import S from "./Messages.module.css";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InfoIcon from '@material-ui/icons/Info';
import { Avatar } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const Messages = (props) => {
  let newDialogData = props.messagePage.dialog.map(dialog => <Dialog name={dialog.name} nickName={dialog.nickName} id={dialog.id} />);
  let newMessageData = props.messagePage.message.map(message => <Message text={message.text} id={message.id} date={message.date} />)

  let newMessageElement = React.createRef();

  let newMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text)
    newMessageElement.current.value = "";
  }

  return (
    <div className={S.wrapper}>

      <div className={S.dialogs + " " + S.active}>
        <div className={S.headerMessages}>
          <div className={S.headerMessagesTitle}>
            <h2>Messages</h2>
          </div>
          <MailOutlineIcon />

        </div>
        {newDialogData}
      </div>

      <div className={S.messages}>
        <div className={S.headerMessages}>

          <Avatar className={S.avatar} src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
          <div className={S.headerMessagesTitle}>
            <div className={S.userName}></div>

          </div>
          <InfoIcon />

        </div>
        {newMessageData}
        <div className={S.inputBox}>
          <input className={S.input} ref={newMessageElement}></input>
          <SendIcon className={S.send} onClick={newMessage} />
        </div>
      </div>
    </div>
  );
};

export default Messages;
