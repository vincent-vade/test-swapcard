import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import searchReducer from './searchReducer'
import detailArtistReducer from './detailArtistReducer'

export default combineReducers({
  search: searchReducer,
  detailArtist: detailArtistReducer,
  router: routerReducer
})
