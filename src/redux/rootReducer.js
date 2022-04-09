import { combineReducers } from "redux";
import playerReducer from "./player/playerReducer";
import { winnerQtyReducer } from "./winnerCounter/winnerQtyReducer";

const rootReducer = combineReducers({
    player:playerReducer,
    winnerQty:winnerQtyReducer,
})
export default rootReducer