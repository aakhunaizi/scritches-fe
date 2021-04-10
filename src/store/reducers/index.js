import { combineReducers } from "redux";

// Reducers
import locationReducer from "./locationReducer";
import petReducer from "./petReducer";
import searchReducer from "./searchReducer";
import scheduleReducer from "./scheduleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  locationReducer,
  petReducer,
  searchReducer,
  scheduleReducer,
  userReducer,
});

export default rootReducer;
