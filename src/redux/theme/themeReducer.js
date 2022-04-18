import { THEME_TO_DARK, THEME_TO_LIGHT } from "./themeTypes";
const initialState = {
    theme:"light"
}

const themeReducer =(state=initialState , action)=>{
    switch (action.type) {
        case THEME_TO_DARK:
            return{theme:"dark"}
            break;
        case THEME_TO_LIGHT:
            return{theme:"light"}
            break;
        default:
            return state
            break;
    }
}
export default themeReducer;