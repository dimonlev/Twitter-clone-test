import React from "react";
import { Avatar } from "@material-ui/core";
import T from "./tweet.module.css";

function Tweet(props) {
  return (
    <div className={T.container}>
      <div className={T.avatar}>
        <Avatar
          src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg"
          alt="avatar"
        />
      </div>
      <div className={T.message}>{props.text}</div>
    </div>
  );
}

export default Tweet;
