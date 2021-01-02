import { Avatar } from '@material-ui/core'
import React from 'react'
import S from './Posts.module.css'

function Posts({
  userName, 
  nickName, 
  verified, 
  avatar, 
  image, 
  text
}) {
  return (
    <div className={S.posts}>
    <div className="avatar">
      <Avatar src="https://pbs.twimg.com/profile_images/1330600966287204354/IXMx_SAk_400x400.jpg" alt="avatar" />
    </div>
      
    </div>
  )
}

export default Posts
