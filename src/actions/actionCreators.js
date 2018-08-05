// increment
export function increment (index) {
  return {
    type: 'UP_VOTES',
    index
  }
}

// add comment
export function addComment (announcementId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    announcementId,
    author,
    comment
  }
}

// remove comment
export function removeComment (announcementId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    announcementId
  }
}
