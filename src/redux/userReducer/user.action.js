import {userActionTypes} from './user.type'

export const currentUser = user =>({
    type : userActionTypes.CURRENT_USER,
    payload : user
})

export const clearUser =()=>({
    type: userActionTypes.CLEAR_USERS
})

export const numberOfUsers =user=>({
    type: userActionTypes.USERS_NUMBERS,
    payload: user
})