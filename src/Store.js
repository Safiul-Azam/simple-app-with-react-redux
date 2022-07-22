
import {createStore} from 'redux'
import counterReducer from './services/reducers/reducers'
const store = createStore(counterReducer)
export default store