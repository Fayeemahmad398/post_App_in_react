import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../action/actionsTypes";

const INITIAL_STATE = {
  data: [],
  error: "",
  called_Api: false,
};

const fetch_data_reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, called_Api: true };
    case FETCH_SUCCESS:
      return { ...state, called_Api: false, error: "", data: action.payload };
    case FETCH_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default fetch_data_reducer;
