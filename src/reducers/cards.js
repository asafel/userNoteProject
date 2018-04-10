import * as types from 'Actions/types';
import uniqid from 'uniqid'
import omit from 'lodash/omit';

const app = (state = {}, action) => {
  let storageCards = JSON.parse(localStorage.getItem('cards'))

  switch (action.type) {

    case '@@redux/INIT':
      if (!storageCards) {
        localStorage.setItem('cards', JSON.stringify({}))
        return state
      } else {
        return storageCards
      }

    case types.ADD_COMMENT:
      const { name, comment, avatar } = action.payload
      const id = uniqid()
      localStorage.setItem('cards', JSON.stringify({ ...storageCards, [id]: { id, name, comment, avatar } }))

      return { [id]: { id, name, comment, avatar }, ...state };

    case types.REMOVE_COMMENT:
      const cardsAfterDelete = omit(storageCards, action.payload)
      localStorage.setItem('cards', JSON.stringify(cardsAfterDelete))
      return omit(state, action.payload);

    case types.EDIT_COMMENT:
      const { newName, newComment, userId } = action.payload

      localStorage.setItem('cards', JSON.stringify({ ...storageCards, [userId]: {...state[userId], name: newName, comment: newComment} }))
      return { ...state, [userId]: {...state[userId], name: newName, comment: newComment} }

    default:
      return state;
  }
}

export default app;