import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import tBox from "./tweetBox.module.css"

function TweetBox() {
  return (
    <div className={tBox.tweetBox}>
      <form>
        <div className={tBox.input}>
          <Avatar src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <Button className={tBox.tweetButton}>Tweet</Button>

      </form>

    </div>
  )
}

export default TweetBox
