import {ADD_X_WINNER,ADD_Y_WINNER, RESET_RESULT} from "./winnerQtyTypes"
const initialState = {
    numberOfXWinner:0,
    numberOfYWinner:0,
}

export const winnerQtyReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ADD_X_WINNER:
            console.log("ok");
            return{...state,numberOfXWinner:state.numberOfXWinner+1}
            break;
        case ADD_Y_WINNER:
            return{...state,numberOfYWinner:state.numberOfYWinner+1}
        case RESET_RESULT:
            return{numberOfXWinner : 0 , numberOfYWinner : 0}
            default:
            return state
            break;
    }
}