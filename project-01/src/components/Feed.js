import React from 'react'
import F from './Feed.module.css'
import TestFeed from './TestFeed'
import TweetBox from './TweetBox'

function Feed() {
  return (
    <div className={F.feed}>
      {/* Header */}
      <div className={F.header}>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      <TestFeed />

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}

    </div>
  )
}

export default Feed
