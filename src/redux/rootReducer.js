import { combineReducers } from "redux";
import playerReducer from "./player/playerReducer";
import themeReducer from "./theme/themeReducer";
import { winnerQtyReducer } from "./winnerCounter/winnerQtyReducer";

const rootReducer = combineReducers({
    player:playerReducer,
    winnerQty:winnerQtyReducer,
    theme:themeReducer,
})
export default rootReducer