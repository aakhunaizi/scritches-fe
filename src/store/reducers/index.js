import { combineReducers } from "redux";

// Reducers
import userReducer from "./userReducer";
import sitterReducer from "./sitterReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  userReducer,
  sitterReducer,
  locationReducer,
});

export default rootReducer;
