import React from "react";
import S from "./Messages.module.css";
import Dialog from './Dialog';
import Message from './Message';

const Messages = (props) => {
  let newDialogData = props.messagePage.dialog.map( dialog => <Dialog name={dialog.name} nickName={dialog.nickName} id={dialog.id} />);
  let newMessageData = props.messagePage.message.map ( message => <Message text={message.text} id={message.id} date={message.date} />)

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
