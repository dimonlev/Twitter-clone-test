import React from 'react'
import S from './messages.module.css'

const Message = (props) => {
  return (
    <div className={S.message}>
      {props.text}
    </div>
  );
};

export default Message