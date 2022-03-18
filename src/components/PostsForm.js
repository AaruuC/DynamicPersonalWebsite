/* eslint-disable linebreak-style */
import React, { useState } from 'react'

import { connect } from 'react-redux'
import { addPost, updatePost, deletePost } from '../actions'

const PostsForm = ({
  id, title, img, description, notStart, setIsEditing, dispatchModifyPost, dispatchDeletePost, dispatchAddPost,
}) => {
  const [titleInput, setTitleInput] = useState(title)
  const [imgInput, setImgInput] = useState(img)
  const [descriptionInput, setDescriptionInput] = useState(description)

  return (
    <>
    <div className="column">
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input className="input" type="text" onChange={e => setTitleInput(e.target.value)} value={titleInput} />
        </div>
      </div>

      <div className="field">
        <label className="label">Image</label>
        <div className="control">
          <input className="input" type="text" onChange={e => setImgInput(e.target.value)} value={imgInput} />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <textarea className="textarea" type="text" onChange={e => setDescriptionInput(e.target.value)} value={descriptionInput} />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="button"
            className="button is-link"
            onClick={() => {
              if (id) {
                dispatchModifyPost(id, titleInput, imgInput, descriptionInput)
              } else {
                dispatchAddPost(titleInput, imgInput, descriptionInput)
              }
              if (setIsEditing) {
                setIsEditing(false)
              }
            }}
          >
            {notStart ? 'Save' : 'Post'}
          </button>
        </div>
        <div className="control">
          {notStart && (
          <button
            type="button"
            className="button is-light"
            onClick={() => {
              if (setIsEditing) {
                setIsEditing(false)
              }
            }}
          >
            Cancel
          </button>
          )}
        </div>
        <div className="control">
          {setIsEditing && (
          <div>
            <button type="button" className="button is-danger" onClick={() => dispatchDeletePost(id)}> DELETE POST </button>
          </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: (title, img, description) => dispatch(addPost(title, img, description)),
  dispatchModifyPost: (id, title, img, description) => dispatch(updatePost(id, title, img, description)),
  dispatchDeletePost: id => dispatch(deletePost(id)),
})

export default connect(null, mapDispatchToProps)(PostsForm)
