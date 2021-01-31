import {userActionTypes} from './user.type'
import {combineReducers} from 'redux'
import { numberOfUsers } from './user.action'

const INITAIL_STATE = {
    currentUser : null,
    isLoading: true,
    numberOfUser : ''
}


const UserReducer =(state = INITAIL_STATE, action) =>{
    switch (action.type){
        case  userActionTypes.CURRENT_USER:
            
           return{
            currentUser: action.payload,
            isLoading :false
           }

           case userActionTypes.CLEAR_USERS:
               return{
                   ...state,
                   currentUser: null,
                   isLoading: false
               }

               case userActionTypes.USERS_NUMBERS:
                   return{
                       ...state,
                       numberOfUser: action.payload
                   }
    
        default:
           return state;
    }
}



export default UserReducer