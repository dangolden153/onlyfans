import {channelActionType} from './channelReducer.type'

export const setCurrentChannel =channel =>({
type: channelActionType.CHANNEL_TYPE,
payload: channel
})