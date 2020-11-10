import {
    GET_PRODUCTS_IN_BASKET,
    ADD_PRODUCTS_IN_BASKET,
    REMOVE_PRODUCTS_IN_BASKET,
    DELETE_PRODUCTS_FROM_BASKET,
    DELETE_ALL_FROM_BASKET,

    GET_DATA_FROM_ORDER_FORM,
    SEND_ORDER_DATA,
    HIDE_ORDER_SUCCESS,
    HIDE_MODAL_BASKET_IS_EMPTY
} from 'store/actionTypes'

import { productsApi } from 'utils/api'

const {fetchGetProducts} = productsApi


export const getProductsInBasket = id => async dispatch => {
    dispatch({
        type: GET_PRODUCTS_IN_BASKET,
        payload: id,
        products: await fetchGetProducts()
    })
}

export const addProductInBasket = id => async dispatch => {
    
    dispatch({
        type: ADD_PRODUCTS_IN_BASKET,
        payload: id,
        products: await fetchGetProducts()
    })
}
export const removeProductInBasket = id => dispatch => {
    dispatch({
        type: REMOVE_PRODUCTS_IN_BASKET,
        payload: id
    })
}
export const deleteProductFromBasket = id => dispatch => {
    dispatch({
        type: DELETE_PRODUCTS_FROM_BASKET,
        payload: id
    })
}
export const deleteAllFromBasket = () => dispatch => {
    dispatch({
        type: DELETE_ALL_FROM_BASKET,
    })
}

export const getOrderData = (orderForm) => dispatch => {
    dispatch({
        type: GET_DATA_FROM_ORDER_FORM,
        payload: orderForm,
    })
}

export const sendOrderData = () => dispatch => {
    dispatch({
        type: SEND_ORDER_DATA,
    })
}
export const hideOrderSuccess = () => dispatch => {
    dispatch({
        type: HIDE_ORDER_SUCCESS,
    })
}
export const hideModalBasketIsEmpty = (status) => dispatch => {
    dispatch({
        type: HIDE_MODAL_BASKET_IS_EMPTY,
        payload: status
    })
}