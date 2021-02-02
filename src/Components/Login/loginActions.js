import { CHECK_DATA } from "./LoginTypes";

export const checkData = (userData) => ({
    type:CHECK_DATA,
    payload:userData
})