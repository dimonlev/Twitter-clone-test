import React from "react";
import F from "./Home.module.css";
import TestFeed from "../TestFeed";
import TweetBox from "./TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const Home = (props) => {
  let feedBox = props.homePage.posts.map( post => <Tweet id={post.id} text={post.text} /> )
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

export default Home;
