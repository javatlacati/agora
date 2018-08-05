import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import announcements from './announcements'
import comments from './comments'

const rootReducer = combineReducers({ announcements, comments, routing: routerReducer })

export default rootReducer
