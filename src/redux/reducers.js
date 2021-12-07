import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_ERROR,
  FETCH_DATA_SUCCESS,
} from "../const/actionTypes";


const initialState = {
    fetchDataLoading: false,
    fetchDataError: null,
    FetchData: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DATA_BEGIN:
        return {
          ...state,
          fetchDataLoading: true,
        };
      case FETCH_DATA_ERROR:
        return {
          ...state,
          fetchDataLoading: false,
          fetchDataError: action.payload,
        };
      case FETCH_DATA_SUCCESS: {
        return {
          ...state,
          fetchDataLoading: false,
          fetchDataError: null,
          fetchData: action.payload,
        };
      };


      default:
        return state;
    }
  };