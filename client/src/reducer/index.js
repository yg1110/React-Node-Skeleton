import { combineReducers } from "redux";
import socketReducer from "./socketReducer";

const rootReducer = combineReducers({
  socketReducer,
});

export default rootReducer;
