import {channelActionType} from './channelReducer.type'


const INITIAL_STATE ={
    currentChannel : null,
    isloading: true
}

const channelReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case channelActionType.CHANNEL_TYPE:
            return{
                ...state,
                currentChannel : action.payload,
                isloading: false
            }
        default:
            return state;
    }
}

export default channelReducer