import React from "react";
import F from "./feed.module.css";
import TestFeed from "../testFeed";
import TweetBox from "../tweetbox/tweetBox";
import Tweet from "../tweet/tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Feed = (props) => {
  let feedBox = props.posts.map( post => <Tweet id={post.id} text={post.text} /> )
  return (
    <div className={F.wrapper}>
      <div className={F.gridWrapper}>
        <div className={F.feed}>

          <div className={F.header}>
            <h2>Home</h2>
            <StarBorderIcon />
          </div>
          
          <TweetBox />
          {feedBox}
          <TestFeed />

        </div>

        <div className={F.widgets}>
          Widgets
        </div>
      </div>
    </div>
  );
}

export default Feed;
