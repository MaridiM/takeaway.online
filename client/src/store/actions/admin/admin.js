import {
    ADMIN_VIEW_CARDS,
    ADMIN_MODAL_FILTER,
    ADMIN_MODAL_CONTACT_WITH,
    ADMIN_MODAL_ADD_PRODUCT,
    ADMIN_MODAL_SUCCESS,
    ADMIN_INFO_PRODUCT,
    ADMIN_INFO_ORDER_PRODUCT,
    ADMIN_SHOW_MODAL_CONTACT,
    ADMIN_SHOW_ANSWER,
    ADMIN_SHOW_ANSWER_FORM,
    ADMIN_GET_MESSAGE_TEXT_FROM_FORM,
    ADMIN_MODAL_EDIT_PRODUCT,
    ADMIN_GET_PROFILE_DATA,
    ADMIN_GET_ORDERS
} from 'store/actionTypes'

import { ordersApi, productsApi } from 'utils/api'

const { fetchGetOrders } = ordersApi
const { fetchGetProducts } = productsApi

export const getOrders = () => async dispatch => {
    dispatch({
        type: ADMIN_GET_ORDERS,
        payload: await fetchGetOrders(),
        products: await fetchGetProducts()
    })
}

export const changeViewList = () => dispatch => {
    dispatch({
        type: ADMIN_VIEW_CARDS,
    })
}
export const openModalFilter = () => dispatch => {
    dispatch({
        type: ADMIN_MODAL_FILTER,
    })
}
export const showModalAddProduct = () => dispatch => {
    dispatch({
        type: ADMIN_MODAL_ADD_PRODUCT,
    })
}
export const showModalEditProduct = (id) => dispatch => {
    dispatch({
        type: ADMIN_MODAL_EDIT_PRODUCT,
        payload: id,
    })
}
export const showModalContactWith = (status) => dispatch => {
    dispatch({
        type: ADMIN_MODAL_CONTACT_WITH,
        payload: status,
    })
}
export const showModalSuccess = (id, status) => dispatch => {
    dispatch({
        type: ADMIN_MODAL_SUCCESS,
        payload: id,
        status: status,
    })
}
export const showInfoProduct = (id, status) => dispatch => {
    dispatch({
        type: ADMIN_INFO_PRODUCT,
        payload: id,
        status: status,
    })
}
export const showInfoOrderProduct = (id, status) => dispatch => {
    dispatch({
        type: ADMIN_INFO_ORDER_PRODUCT,
        payload: id,
        status: status
    })
}
export const showModalContact = (status) => dispatch => {
    dispatch({
        type: ADMIN_SHOW_MODAL_CONTACT,
        payload: status,
    })
}
export const showAnswers = () => dispatch => {
    dispatch({
        type: ADMIN_SHOW_ANSWER,
    })
}
export const showAnswerForm = () => dispatch => {
    dispatch({
        type: ADMIN_SHOW_ANSWER_FORM,
    })
}
export const getMessageTextFromForm = (text) => dispatch => {
    dispatch({
        type: ADMIN_GET_MESSAGE_TEXT_FROM_FORM,
        payload: text
    })
}

export const getProfileData = (values) => dispatch => {
    dispatch({
        type: ADMIN_GET_PROFILE_DATA,
        payload: values
    })
}
