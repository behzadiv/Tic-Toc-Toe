import { CHANGE_PLAYER } from "./playerTypes";

export const chengePlayer=(data)=>{
    return{
        type:CHANGE_PLAYER,
        payload:data
    }
}