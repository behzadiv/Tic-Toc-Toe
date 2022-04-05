import { useSelector } from "react-redux";
import { CHANGE_PLAYER } from "./playerTypes";

const initialState = {
    player : "X"
}
const playerReducer = (state=initialState,action) => {
    switch (action.type) {
        case CHANGE_PLAYER:
            return({player:action.payload})
            break;
    
        default:
            return state
            break;
    }
}
 
export default playerReducer;