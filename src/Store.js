
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import countryReducer from './fetchServices/fetchReducers'
const store = createStore(countryReducer, applyMiddleware(thunk))
export default store