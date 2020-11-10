import { combineReducers } from 'redux'

import basket from './basket'
import products from './products'
import pagination from './pagination'
import categories from './categories'

export const appReducers = combineReducers({
    products,
    basket,
    pagination,
    categories
})