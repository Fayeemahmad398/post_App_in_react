import { SELECT_POST } from "../action/actionsTypes";

const INITIAL_STATE = {};

const selected_post_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_POST:
      return action.payload;
    default:
      return state;
  }
};

export default selected_post_reducer;
