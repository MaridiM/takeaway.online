import {
    GET_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_REVIEW,
    SHOW_PRODUCT_REVIEW_FORM,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    COPY_PRODUCT,
    GET_PRODUCT_IMG,
} from "store/actionTypes"

import { productsApi } from "utils/api"

const { fetchGetProducts } = productsApi


// 
// 
// FETCH PRODUCTS ACTIONS
// 
// 


export const getProducts = () => async dispatch => {
    dispatch({
        type: GET_PRODUCTS,
        payload: await fetchGetProducts(),
    });
}

export const getProductId = (id) => dispatch => {
    dispatch({
        type: GET_PRODUCT_ID,
        payload: id,
    })
}



// 
// 
// PRODUCTS REWIEWS ACTIONS
// 
// 


export const showAddReview = (status) => dispatch => {
    dispatch({
        type: SHOW_PRODUCT_REVIEW_FORM,
        payload: status,
    })
}
export const addProductReview = (values, id) => dispatch => {
    dispatch({
        type: ADD_PRODUCT_REVIEW,
        payload: values,
        id: id,
    })
}



// 
// 
// PRODUCTS ACTIONS
// 
// 



export const addProduct = (values) => dispatch => {
    console.log(values)
    dispatch({ 
        type: ADD_PRODUCT, 
        payload: values
    })
}
export const editProduct = (id, values) => dispatch => {
    dispatch({ 
        type: EDIT_PRODUCT, 
        payload: values,
        id: id
    })
}

export const deleteProduct = (id) => dispatch => {
    dispatch({ 
        type: DELETE_PRODUCT, 
        payload: id
    })
}

export const copyProduct = (id) => dispatch => {
    console.log(`COPY PRODUCT ${id}`)
    dispatch({ 
        type: COPY_PRODUCT, 
        payload: id
    })
}




// 
// 
// PRODUCTS IMG ACTIONS
// 
// 


export const getProductImg = (img) => dispatch => {
    dispatch({ 
        type: GET_PRODUCT_IMG, 
        payload: img

    })
}