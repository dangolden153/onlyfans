import {combineReducers} from 'redux'

import UserReducer from './userReducer/user.Reducer'
import channelReducer from './channelReducer/channelReducer.Reducer'

const rootReducer = combineReducers({
    user: UserReducer,
    channel: channelReducer
})

export default rootReducer