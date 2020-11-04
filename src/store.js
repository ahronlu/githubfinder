import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import githubReducer from "./reducers/githubReducer";
import alertReducer from "./reducers/alertReducer";
import favoritesReducer from "./reducers/favoritesReducer";

const reducer = combineReducers({
  github: githubReducer,
  alert: alertReducer,
  favorites: favoritesReducer,
});

const favoritesFromStroage = localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites"))
  : { favorites: [] };

const initialState = { favorites: favoritesFromStroage };

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
