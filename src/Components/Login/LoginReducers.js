import { CHECK_DATA } from "./LoginTypes";

const intialState = {
    authCred: {
        "username": "hruday@gmail.com",
        "password": "hruday123"
    },
    loggedIn:false,
    errorStatus: false,
  
}


export const LoginReducer = (state = intialState, action) => {
    switch (action.type) {
        case CHECK_DATA:
            if (action.payload.email === state.authCred.username && action.payload.password === state.authCred.password) {
                return {
                    ...state,
                    loggedIn: true,
                }
            } else {
                return {
                    ...state,
                    errorStatus: true,
                }
            }

            default:
            return state;
    }
}
