import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreate, newMessageOnChangeActionCreate } from "../../redux/messages-reduser";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  let newDialogData = props.messagePage.dialog.map(dialog => <Dialog name={dialog.name} nickName={dialog.nickName} id={dialog.id} />);
  let newMessageData = props.messagePage.message.map(message => <Message text={message.text} id={message.id} date={message.date} />)

  //let newMessageElement = React.createRef(); changed from ref

  let newMessage = () => {
    props.dispatch(addMessageActionCreate())
  }

  let addNewMesage = (event) => {
    let text = event.target.value; // changed from ref
    props.dispatch(newMessageOnChangeActionCreate(text))
  }

  return (
    <Messages newDialogData={newDialogData} newMessageData={newMessageData} newMessage={newMessage} addNewMesage={addNewMesage} messagePage={props.messagePage} />
  );
};

export default MessagesContainer;
