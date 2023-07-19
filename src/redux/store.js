import { createStore, combineReducers, applyMiddleware } from "redux";
import fetch_data_reducer from "./reducers/fetch_data_reducer";
import thunk from "redux-thunk";
import selected_post_reducer from "./reducers/selected_post_reducer";

const root_reducer = combineReducers({
  fetch_data_reducer: fetch_data_reducer,
  selected_post_reducer: selected_post_reducer,
});

const store = createStore(root_reducer, applyMiddleware(thunk));
export default store;
