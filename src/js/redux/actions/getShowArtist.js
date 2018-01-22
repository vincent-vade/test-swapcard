import {
  GET_ARTIST_ERROR,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_REQUEST
} from '../constantes'

import apiHandler from '../../config/apiHandler'

const getArtistRequest = () => {
  return {
    type: GET_ARTIST_REQUEST
  };
};

const getArtistSuccess = (detailArtist) => {
  return {
    type: GET_ARTIST_SUCCESS,
    detailArtist
  };
};

const getArtistError = (error) => {
  return {
    type: GET_ARTIST_ERROR,
    error
  };
};

const getShowArtist = (artistId) => {
  return (dispatch) => {
    dispatch(getArtistRequest())
    return apiHandler()
      .get(`/artists/${artistId}/albums`)
      .then((response) => {
        console.log(getArtistSuccess(response.data))
        dispatch(getArtistSuccess(response.data))
      })
      .catch(error => dispatch(getArtistError(error))
    );
  };
};

export default getShowArtist;
