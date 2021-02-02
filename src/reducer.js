import { combineReducers } from "redux";
import {LoginReducer}  from "./Components/Login/LoginReducers";
import {DashboardReducer} from "./Components/Dashboard/DashboardReducer";

export default combineReducers({
  login: LoginReducer,
  dashboard:DashboardReducer
});
