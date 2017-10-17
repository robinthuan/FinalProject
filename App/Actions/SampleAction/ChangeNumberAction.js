import * as types from '../ActionTypes'
export function inCreaseNumber(number) {
    return{
        type:types.INCREASE_NUMBER,
        data:number
    }



}
export function deCreaseNumber(number) {
    return{
        type:types.DECREASE_NUMBER,
        data:number,
    }

}