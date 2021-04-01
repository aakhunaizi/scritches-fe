import { combineReducers } from "redux";

// Reducers
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import petReducer from "./petReducer";

const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  petReducer,
});

export default rootReducer;
