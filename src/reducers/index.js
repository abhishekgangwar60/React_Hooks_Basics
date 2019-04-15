import resourceReducer from "./resources.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  resource: resourceReducer
});
