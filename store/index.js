import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/userActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());

export default store;
