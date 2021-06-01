import {combineReducers} from "redux";
import userReducer from "./userReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
playerReducer,
userReducer,
})
