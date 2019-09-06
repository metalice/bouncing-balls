import { combineReducers } from "redux";
import dimensions from "./dimensionsReducer";
import balls from "./ballsReducer";
import input from "./inputReducer";

export default combineReducers({ dimensions, balls, input });
