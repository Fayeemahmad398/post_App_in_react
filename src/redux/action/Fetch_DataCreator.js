import axios from "axios";
import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from "./actionsTypes";
export const fetch_request = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetch_success = (products) => {
  return {
    type: FETCH_SUCCESS,
    payload: products,
  };
};
export const fetch_failure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

export const fetch_data_asynchronously = () => {
  return (dispatch) => {
    dispatch(fetch_request());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        dispatch(fetch_success(response.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetch_failure(error));
      });
  };
};
