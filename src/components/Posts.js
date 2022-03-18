/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { connect } from 'react-redux'

import PostsForm from './PostsForm'
import Post from './Post'

const Posts = ({
  posts, dispatchAddPost,
}) => (

  <>

    <PostsForm title="" img="" description="" dispatchAddPost={dispatchAddPost} start={false} />

    <div className="row">
      {posts.map(post => <Post key={post.id} {...post} />)}
    </div>
  </>
)

const mapStateToProps = state => ({ posts: state.posts })

export default connect(mapStateToProps, null)(Posts)
