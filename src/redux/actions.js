import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESS,
  } from "../const/actionTypes";
  import { FETCH_DATA_URL } from "../const/apis";
  
  export const fetchDataAction = () => {
    return (dispatch) => {
      dispatch({ type: FETCH_DATA_BEGIN });
      fetch(FETCH_DATA_URL)
        .then((response) => {
          if (response.ok && response.status === 200) {
            return response.json();
          } else {
            dispatch({ type: FETCH_DATA_ERROR, payload: response.statusText });
          }
        })
        .then((json) => {
          dispatch({ type: FETCH_DATA_SUCCESS, payload: json });
        })
        .catch((err) => {
          dispatch({ type: FETCH_DATA_ERROR, payload: err });
        });
    };
  };