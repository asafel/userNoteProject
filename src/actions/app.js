import * as types from './types';

export const addComment = (data) => {
  return {
    type: types.ADD_COMMENT,
    payload: data
  }
}

export const removeComment = (key) => {
  return {
    type: types.REMOVE_COMMENT,
    payload: key
  }
}

export const editComment = (data) => {
  return {
    type: types.EDIT_COMMENT,
    payload: data
  }
}

