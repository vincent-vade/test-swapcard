import {
  GET_SEARCH_RESULT_REQUEST,
  GET_SEARCH_RESULT_SUCCESS,
  GET_SEARCH_RESULT_ERROR
} from '../constantes'
import apiHandler from '../../config/apiHandler'
import { SEARCH } from '../../config/constantes/url'

const getSearchResultRequest = () => {
  return {
    type: GET_SEARCH_RESULT_REQUEST
  };
};

const getSearchResultSuccess = (result) => {
  return {
    type: GET_SEARCH_RESULT_SUCCESS,
    result
  };
};

const getSearchResultError = (error) => {
  return {
    type: GET_SEARCH_RESULT_ERROR,
    error
  };
};

const getSearchResult = (q) => {
  return (dispatch) => {
    dispatch(getSearchResultRequest())
    return apiHandler()
      .get(SEARCH, { params: { q, type: 'artist', limit: 10 }})
      .then(response => dispatch(getSearchResultSuccess(response.data)))
      .catch((error) => dispatch(getSearchResultError(error)))
  };
};

export default getSearchResult;
