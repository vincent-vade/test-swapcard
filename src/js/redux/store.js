import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import initialState from './config/initialState';

export const history = createHistory()

const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composedEnhancers  = composeWithDevTools(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers
)






