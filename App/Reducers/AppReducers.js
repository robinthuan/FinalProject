import * as Types from '../Actions/ActionTypes'
const initialState={
    action:'',
    data:10
}
export default (state=initialState,action)=>{
    state.action = action.type
    switch (action.type){
        case Types.INCREASE_NUMBER:
            return{
                ...state,
                data:state.data + action.data
            }
         break;
        case Types.DECREASE_NUMBER:
            return{
                ...state,
                data:state.data - action.data
            }


        default:
            return state
    }
}