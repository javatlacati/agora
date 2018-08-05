function announcements (state = [], action) {
  switch (action.type) {
    case 'UP_VOTES' :
      console.log('Incrementing Likes!!')
      const i = action.index
      return [
        ...state.slice(0, i),
        {...state[i], up_votes: state[i].up_votes + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default announcements
