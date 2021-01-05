import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import S from "./TweetBox.module.css"

function TweetBox(props) {
  let newPostValue = React.createRef();
  let newPost = () => {
    let text = newPostValue.current.value;
    props.addPost(text)
  }
  return (
    <div className={S.tweetBox}>
      <form>
        <div className={S.input}>
          <Avatar src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
          <input type="text" placeholder="What's happening?" ref={newPostValue} />
        </div>
        <Button className={S.tweetButton} onClick={newPost} >Tweet</Button>

      </form>

    </div>
  )
}

export default TweetBox
