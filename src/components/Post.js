/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import PostsForm from './PostsForm'

const Post = ({
  id, title, img, description,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <>
      {!isEditing && (
        <div className="column is-half is-offset-one-quarter">
          <div className="card">
            <header className="card-header">
              Post #
              {id}
              :
              {' '}
              {title}
            </header>
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={img} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">{description}</p>
                <br />
              </div>
            </div>
            <footer className="card-footer">
              <button type="button" className="button is-warning" onClick={() => setIsEditing(!isEditing)}> Edit Post </button>
            </footer>
          </div>
        </div>
      )}

      {isEditing && (
      <div className="column is-half is-offset-one-quarter">
        <PostsForm
          id={id}
          title={title}
          img={img}
          description={description}
          notStart
          setIsEditing={setIsEditing}
        />
      </div>
      )}
    </>
  )
}

export default Post
