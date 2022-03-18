/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateIntro } from '../actions'

const IntroForm = ({
  img, description, setIsEditing, dispatchUpdateIntro,
}) => {
  const [imgInput, setImg] = useState(img)
  const [descriptionInput, setDescription] = useState(description)

  return (
    <>
      <div className="field">
        <label className="label">Image </label>
        <div className="control">
          <input className="input" type="text" placeholder="Enter image url" onChange={e => setImg(e.target.value)} value={imgInput} />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input className="input" type="text" placeholder="Enter Description" onChange={e => setDescription(e.target.value)} value={descriptionInput} />
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button
            type="button"
            className="button is-link"
            onClick={() => {
              dispatchUpdateIntro(imgInput, descriptionInput)
              setIsEditing(false)
            }}
          >
            Update

          </button>
        </div>
        <div className="control">
          <button type="button" className="button is-link is-light" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchUpdateIntro: (img, description) => dispatch(updateIntro(img, description)),
})

export default connect(null, mapDispatchToProps)(IntroForm)
