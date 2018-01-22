import {
  GET_ARTIST_REQUEST,
  GET_ARTIST_SUCCESS,
  GET_ARTIST_ERROR,
} from '../constantes';
import initialState from '../config/initialState';

export default function detailArtistReducer(state = initialState.detailArtist, action) {
  const { type, detailArtist, error } = action;
  switch (type) {
    case GET_ARTIST_REQUEST:
      return {
        ...state,
      };
    case GET_ARTIST_SUCCESS:
      return {
        artist: {
          ...detailArtist
        }
      };
    case GET_ARTIST_ERROR:
      return {
        ...state,
        error
      };
    default:
      return state;
  }
}
