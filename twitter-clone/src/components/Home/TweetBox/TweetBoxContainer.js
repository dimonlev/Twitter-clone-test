import React from 'react'
import { addPostActionCreate, newChangePostActionCreate } from '../../../redux/posts-reduser';
import TweetBox from './TweetBox'

function TweetBoxContainer(props) {

  let addPost = () => {
    props.dispatch(addPostActionCreate());
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.dispatch(newChangePostActionCreate(text));
  }

  return (
    <TweetBox addPost={addPost} onPostChange={onPostChange} homePage={props.homePage} />
  )
}

export default TweetBoxContainer
