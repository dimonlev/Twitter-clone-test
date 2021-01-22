import React from "react";
import { Avatar } from "@material-ui/core";
import T from "./Tweet.module.scss";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Tweet(
  // userName, 
  // nickName, 
  // verified, 
  // avatar, 
  // image, 
  // text
  props
) {
  return (
    <div className={T.container}>
      <div className={T.avatar}>
        <Avatar
          fontSize="large"
          src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg"
          alt="avatar"
        />
      </div>

      <div className={T.content}>
        <div className={T.header}>

          <div className={T.userName}>
            {props.userName}
          </div>

          <div className={T.verified}>
            <VerifiedUserIcon fontSize="small" />
          </div>

          <div className={T.nickName}>
            {props.nickName}
          </div>

        </div>

        <div className={T.message}>
          {props.text}
        </div>

        <div className={T.image}>
          <img src="https://avatars.mds.yandex.net/get-kinopoisk-post-img/1374145/245e9eaedc3ce28a4be97be3a36e05e9/960x540" alt="first img" />
        </div>

        <div className={T.footer}>
          <div className={T.comment}>
            <ChatBubbleOutlineIcon />
          </div>

          <div className={T.retweet}>
            <RepeatIcon />
          </div>

          <div className={T.like}>
            <FavoriteBorderIcon />
          </div>

          <div className={T.share}>
            <PublishIcon />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Tweet;
