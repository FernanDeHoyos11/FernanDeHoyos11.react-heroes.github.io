import { types } from "../types/types";


export const autchReducer = (state = {}, action) => {
    
    switch (action.type) {

        case types.login:
             return{
                ...state,
                logged: true,
                user: action.payload
             }

        case types.login:
            return{
                logged: false,
             }
            
    
        default:
            return state;
    }
}