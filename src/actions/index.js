/* eslint-disable linebreak-style */
export const UPDATE_INTRO = 'UPDATE_INTRO'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export const updateIntro = (img, description) => ({
  type: UPDATE_INTRO,
  img,
  description,
})

let postId = 1

export const addPost = (title, img, description) => ({
  type: ADD_POST,
  title,
  img,
  description,
  id: postId++,
})

export const updatePost = (id, title, img, description) => ({
  type: UPDATE_POST,
  id,
  title,
  img,
  description,
})

export const deletePost = id => ({
  type: DELETE_POST,
  id,
})
