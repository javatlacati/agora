function announcementComments (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { user: action.author, text: action.comment }]
    case 'REMOVE_COMMENT':
      return [ ...state.slice(0, action.i), ...state.slice(action.i + 1) ]
    default:
      return state
  }
}

function comments (state = [], action) {
  if (typeof action.announcementId !== 'undefined') {
    return {
      ...state, [action.announcementId]: announcementComments(state[action.announcementId], action)
    }
  }
  return state
}

export default comments
