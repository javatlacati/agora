const AUTH_HEADER = {
  headers: { 'Authorization': 'bearer ' + window.localStorage.getItem('jwt') }
}

export default AUTH_HEADER
