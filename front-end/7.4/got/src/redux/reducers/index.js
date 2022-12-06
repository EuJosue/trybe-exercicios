import { combineReducers } from "redux";
import gotReducer from "./gotReducer";

const rootReducer = combineReducers({
  gotReducer,
});

export default rootReducer;
