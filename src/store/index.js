import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

// Reducers
import reducer from "./reducers";

// Actions
import { checkForToken } from "./actions/userActions";
import { fetchCountries, updateLastLocation } from "./actions/locationActions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(checkForToken());
store.dispatch(fetchCountries());
store.dispatch(updateLastLocation("/"));

export default store;
