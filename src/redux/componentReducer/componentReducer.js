import ComponentType from './componentReducer.type'


const INITAIL_STATE ={
 hidden : true
}

const ComponentReducer = (state = INITAIL_STATE, action) =>{

    switch (action.type){
        case ComponentType.TOGGLE_ITEM :

        return {
            ...state,
            hidden : !state.hidden
        }

     default :
        return state
    }
  
}

export default ComponentReducer