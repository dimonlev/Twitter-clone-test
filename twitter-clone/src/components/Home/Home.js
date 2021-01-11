import React from "react";
import F from "./Home.module.css";
import TestFeed from "../TestFeed";
import TweetBox from "./TweetBox/TweetBox";
import Tweet from "../Tweet/Tweet";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Widgets from "../Widgets/Widgets";

const Home = (props) => {

  let feedBox = props.homePage.posts.map(post =>
    <Tweet
      id={post.id}
      text={post.text}
      userName={post.userName}
      nickName={post.nickName}
      verified={post.verified}
    />)

  return (
    <div className={F.wrapper}>
      {/* <div className={F.gridWrapper}> */}
      <div className={F.feed}>

        <div className={F.header}>
          <h2>Home</h2>
          <StarBorderIcon />
        </div>

        <TweetBox
          addPost={props.addPost}
          newChangePost={props.newChangePost}
          homePage={props.homePage}
        />
        {feedBox}
        <TestFeed />

      </div>

      <div className={F.widgets}>
        <Widgets />
      </div>
      {/* </div> */}
    </div>
  );
}

export default Home;
