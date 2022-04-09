import{ADD_X_WINNER,ADD_Y_WINNER, RESET_RESULT}from "./winnerQtyTypes"

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
export const resetResult =()=>{
    return{
        type:RESET_RESULT
    }
}