import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import tBox from "./TweetBox.module.css"

function TweetBox() {
  return (
    <div className={tBox.tweetBox}>
      <form>
        <div className={tBox.input}>
        <Avatar src="https://pbs.twimg.com/profile_images/3568162909/c50fc66e4995a4c1ec4430d596714caf_bigger.jpeg" alt="avatar"/>
        <input type="text" placeholder="What's happening?"/>
        </div>
        <Button className={tBox.tweetButton}>Tweet</Button>

      </form>
      
    </div>
  )
}

export default TweetBox
