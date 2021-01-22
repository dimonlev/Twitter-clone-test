import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import S from "./TweetBox.module.scss"

function TweetBox(props) {

  return (
    <div className={S.tweetBox}>
      <form>
        <div className={S.input}>
          <Avatar src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
          <input
            type="text"
            placeholder="What's happening?"
            onChange={props.onPostChange}
            value={props.homePage.tempText}
          />
        </div>
        <Button className={S.tweetButton} onClick={props.addPost}>Tweet</Button>

      </form>

    </div>
  )
}

export default TweetBox
