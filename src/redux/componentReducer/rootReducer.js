import {combineReducers} from 'redux'
import ComponentReducer from './componentReducer'

const rootReducer = combineReducers({
    State :ComponentReducer,
    
    
})

 export default rootReducer