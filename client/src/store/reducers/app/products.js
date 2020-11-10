import { 
    GET_PRODUCTS,
    GET_PRODUCT_ID,
    ADD_PRODUCT_REVIEW,
    SHOW_PRODUCT_REVIEW_FORM,
    ADD_PRODUCT,
    EDIT_PRODUCT,
    DELETE_PRODUCT,
    COPY_PRODUCT,
    GET_PRODUCT_IMG
} from 'store/actionTypes'


import { productApi } from 'utils/api'

const initialState = {
    products: [],
    product: null,
    addReview: false,
    addProduct: false,
    editProduct: false,
}

const { addProductReview, addProduct, editProduct, deleteProduct, copyProduct } = productApi



export default (state = initialState, { type, payload, id }) => {
    switch (type) {
        case GET_PRODUCTS: 
            return {
                ...state,
                products: payload.data
            }
        case GET_PRODUCT_ID: 
            return {
                ...state,
                product: state.products.filter( product => product._id === payload)
            }
        case ADD_PRODUCT_REVIEW: 
            const data = JSON.parse(JSON.stringify(payload))
            console.log(data)
            addProductReview(id, data)
            return {
                ...state,
                addReview: false
            }
        case SHOW_PRODUCT_REVIEW_FORM: 
            return {
                ...state,
                addReview: !state.addReview
            }

        case ADD_PRODUCT: 
            addProduct(id, payload)
            return state

        case EDIT_PRODUCT: 
            editProduct(id, payload)
            return state

        case DELETE_PRODUCT: 
            deleteProduct(payload)
            return state
            
        case COPY_PRODUCT: 
            return state


        case GET_PRODUCT_IMG: 
            console.log(payload)
            return state

        default: 
            return state
    }

}