import{ADD_X_WINNER,ADD_Y_WINNER}from "./winnerQtyTypes"

export const addXWinner = ()=>{
    return{
        type:ADD_X_WINNER
    }
}
export const addYWinner = ()=>{
    return{
        type:ADD_Y_WINNER
    }
}