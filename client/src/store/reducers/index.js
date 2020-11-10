import { combineReducers } from 'redux'

import { appReducers as app } from './app/'
import { adminReducers as admin } from './admin/'

export const rootReducer = combineReducers({
    app,
    admin
})