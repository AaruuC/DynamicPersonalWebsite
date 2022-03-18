/* eslint-disable linebreak-style */
import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions'

const default_state = []

const posts = (state = default_state, action) => {
  const {
    id, title, img, description, type,
  } = action

  switch (type) {
    case ADD_POST:
      return [
        ...state,
        {
          title, description, id, img,
        },
      ]
    case UPDATE_POST:
      return state.map(post => ((post.id === id)
        ? {
          title, description, img, id,
        }
        : post))
    case DELETE_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default posts
