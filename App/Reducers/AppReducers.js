import * as Types from '../Actions/ActionTypes'
const initialState={
    action:'',
    data:10,
    json:[],
    result:''
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
        case Types.GET_WEATHER_SUCCESS:
            return{
                ...state,
                json:action.json
            }
        case Types.GET_WEATHER_FAIL:
            return{
                ...state,
                json:action.json
            }

        default:
            return state
    }
}