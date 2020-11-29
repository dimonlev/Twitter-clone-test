import React from "react";
import F from "./feed.module.css";
import TestFeed from "../testFeed";
import TweetBox from "../tweetbox/tweetBox";
import Tweet from "../tweet/tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Widgets from "../widgets/widgets";

function Feed() {
  return (
    <div className={F.wrapper}>
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
      <div className={F.widgets}>
        <Widgets />
      </div>
    </div>
  );
}

export default Feed;
