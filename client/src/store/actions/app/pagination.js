import {
    GET_PAGINATION_PAGE
} from 'store/actionTypes'

import { productsApi } from 'utils/api'
const {fetchGetProducts} = productsApi


export const getPaginationPage = page => async dispatch =>{
    dispatch({
        type: GET_PAGINATION_PAGE,
        payload: page,
        products: await fetchGetProducts()
    })
}