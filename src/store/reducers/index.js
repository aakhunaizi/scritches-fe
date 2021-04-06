import { combineReducers } from "redux";

// Reducers
import userReducer from "./userReducer";
import locationReducer from "./locationReducer";
import petReducer from "./petReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  userReducer,
  locationReducer,
  petReducer,
  searchReducer,
});

export default rootReducer;
