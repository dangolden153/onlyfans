import {channelActionType} from './channelReducer.type'


const INITIAL_STATE ={
    setCurrentChannel : null,
    isloading: true,
    privateChannel : null,
    userCurrentchannel: null
}

const channelReducer =(state = INITIAL_STATE, action)=>{
    switch (action.type) {
        case channelActionType.SET_USER_CHANNEL:
            return{
                ...state,
                userCurrentchannel : action.payload,
                isloading: false
            }

            case channelActionType.PRIVATE_CHANNEL:
            return{
                ...state,
                privateChannel : action.payload,
                isloading: false
            }

            case channelActionType.SET_CURRENT_CHANNEL:
            return{
                ...state,
                setCurrentChannel : action.payload,
                isloading: false
            }
        default:
            return state;
    }
}

export default channelReducer