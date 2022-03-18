/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { connect } from 'react-redux'

import IntroForm from './IntroForm'

const Introduction = ({ img, description }) => {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <section className="hero">
      <div className="hero-body">
        <p className="title">
          Introduction
          {!isEditing && (
            <button
              type="button"
              className="button is-warning is-pulled-right"
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit
            </button>
          )}
        </p>
        {!isEditing && (
        <>
          <div>
            {img && <img src={img} style={{ height: '400px' }} alt="profile-pic" />}
          </div>
          {description}
        </>
        )}

        {isEditing
      && (
        <div className="column is-half is-offset-one-quarter">
          <IntroForm
            img={img}
            description={description}
            setIsEditing={setIsEditing}
          />
        </div>
      )}
      </div>

    </section>
  )
}

const mapStateToProps = ({ intro }) => intro

export default connect(mapStateToProps)(Introduction)
