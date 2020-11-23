import React from "react";
import F from "./Feed.module.css";
import TestFeed from "../TestFeed";
import TweetBox from "../tweetbox/TweetBox";
import Tweet from "../tweet/Tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Feed() {
  return (
    <div className={F.feed}>
      <div className={F.header}>
        <h2>Home</h2>
        <StarBorderIcon />
      </div>
      <TweetBox />

      <Tweet text="Post 1" />
      <Tweet text="Post 2" />
      <Tweet text="Post 2" />
      <Tweet text="Post 2" />

      <TestFeed />
    </div>
  );
}

export default Feed;
