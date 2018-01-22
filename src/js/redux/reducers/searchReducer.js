import {
  GET_SEARCH_RESULT_REQUEST,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_ERROR
} from '../constantes';
import initialState from '../config/initialState';

export default function searchReducer(state = initialState.search, action) {
  const { type, result, error } = action;
  switch (type) {
    case GET_SEARCH_RESULT_REQUEST:
      return {
        ...state,
        fetching: true
      };
    case GET_SEARCH_RESULT_SUCCESS:
      return {
        fetching: false,
        result: {...result}
      };
    case GET_SEARCH_RESULT_ERROR:
      return {
        ...state,
        fetching: false,
        error
      };
    default:
      return state;
  }
}
