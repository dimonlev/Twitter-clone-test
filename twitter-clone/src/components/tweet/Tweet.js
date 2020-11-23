import React from "react";
import { Avatar } from "@material-ui/core";
import T from "./Tweet.module.css";

function Tweet(props) {
  return (
    <div className={T.container}>
      <div className={T.avatar}>
        <Avatar
          src="https://pbs.twimg.com/profile_images/3568162909/c50fc66e4995a4c1ec4430d596714caf_bigger.jpeg"
          alt="avatar"
        />
      </div>
      <div className={T.message}>{props.text}</div>
    </div>
  );
}

export default Tweet;
