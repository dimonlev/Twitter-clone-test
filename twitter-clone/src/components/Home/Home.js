import React from "react";
import F from "./Home.module.scss";
import TestFeed from "../TestFeed";
import TweetBoxContainer from "./TweetBox/TweetBoxContainer";
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

        <TweetBoxContainer
          addPost={props.addPost}
          newChangePost={props.newChangePost}
          homePage={props.homePage}
          dispatch={props.dispatch}
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
