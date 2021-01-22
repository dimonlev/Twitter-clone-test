import React from 'react'
import S from '../Messages.module.scss'

const Message = (props) => {
  return (
    <div className={S.message}>
      {props.text}
    </div>
  );
};

export default Message