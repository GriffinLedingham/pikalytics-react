import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'remote-redux-devtools';

export default createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
