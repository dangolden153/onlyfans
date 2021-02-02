import {channelActionType} from './channelReducer.type'


export const setCurrentUserChannel = channel =>({
    type : channelActionType.SET_USER_CHANNEL ,
    payload: channel
})

export const setCurrentChannel = channel =>({
    type : channelActionType.SET_CURRENT_CHANNEL ,
    payload: channel
})



export const setPrivateChannel = privateChannel =>({
    type: channelActionType.PRIVATE_CHANNEL,
    payload: privateChannel
})

