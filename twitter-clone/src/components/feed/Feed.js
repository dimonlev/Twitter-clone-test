import React from "react";
import F from "./feed.module.css";
import TestFeed from "../testFeed";
import TweetBox from "../tweetbox/tweetBox";
import Tweet from "../tweet/tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";

let posts = [
  {id:1, text: "It's my first post"},
  {id:2, text: "It's my second post"},
  {id:3, text: "It's my third post"},
  {id:4, text: "It's my fourth post"},
  {id:5, text: "It's my fifth post"},
  {id:6, text: "It's my sixth post"}
]

let feed = posts.map ( post => <Tweet id={post.id} text={post.text} /> )

function Feed() {
  return (
    <div className={F.wrapper}>
      <div className={F.gridWrapper}>
        <div className={F.feed}>

          <div className={F.header}>
            <h2>Home</h2>
            <StarBorderIcon />
          </div>
          
          <TweetBox />
          {feed}
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
