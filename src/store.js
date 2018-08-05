// Dependencies
import { createStore, compose, bindActionCreators } from 'redux'
import * as actionCreators from './actions/actionCreators'
// import { syncHistoryWithStore } from 'react-router-redux'
// import { browserHistory } from 'react-router-dom'

// The root reducer
import rootReducer from './reducers/index'

// Sample Data
import { announcements, comments } from './data'

// Default data
const defaultState = { announcements, comments }

// Redux Dev Tools
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

// Store & History
const store = createStore(rootReducer, defaultState, enhancers)
// export const history = syncHistoryWithStore(browserHistory, store)

// Mapping Props
export const mapStateToProps = function (state) {
  return {
    announcements: state.announcements,
    comments: state.comments
  }
}
export const mapDispachToProps = function (dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

// Redux Hot reloading
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
