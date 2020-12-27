import {combineReducers} from 'redux'
import auth from './auth'
import leads from './leads'

export default combineReducers({
    auth,
    leads,
})