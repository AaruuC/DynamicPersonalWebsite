/* eslint-disable linebreak-style */
import { UPDATE_INTRO } from '../actions'

const defaultState = {
  img: '',
  description: '',
}

const intro = (state = defaultState, action) => {
  const { type, img, description } = action
  switch (type) {
    case UPDATE_INTRO:
      return { img, description }
    default:
      return state
  }
}

export default intro
