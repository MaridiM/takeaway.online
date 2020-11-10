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
import product from '../../../utils/api/product'

const initialState = {
    orders: [],
    products: [],
    modalFilter: false,
    viewCard: false,
    modalContactWith: false,
    modalAddPrdoduct: false,
    modalSuccess: false,
    infoProduct: false,
    infoOrderProduct: false,
    answerForm: false,
    answers: false,
    modalContact: false,
    addProductBool: false,
    editProductBool: false,
    orderProduct: {},
    product: {},
    value: {
        title: '',
        text: '',
        ingridients: '',
        category: 'Все',
        diskountCheck: false,
        discount: '',
        discountList: '%',
        price: 0,
        priceCurrency: "₴",
    }
}

export default (state = initialState, { type, payload, products, status }) => {
    switch (type) {
        case ADMIN_GET_ORDERS:
            return {
                ...state,
                orders: payload.data,
                products: products.data,
            }

        case ADMIN_VIEW_CARDS:
            return {
                ...state,
                viewCard: !state.viewCard,
                modalFilter: false
            }

        case ADMIN_MODAL_FILTER:
            return {
                ...state,
                modalFilter: !state.modalFilter
            }


        case ADMIN_MODAL_CONTACT_WITH:
            return {
                ...state,
                modalContactWith: payload
            }




        case ADMIN_MODAL_ADD_PRODUCT:
            return {
                ...state,
                modalAddPrdoduct: !state.modalAddPrdoduct,
                addProductBool: !state.addProductBool,
            }
        case ADMIN_MODAL_EDIT_PRODUCT:
            const {
                title, 
                text, 
                ingridients, 
                category, 
                discount, 
                price
            } = state.products.filter(product => product._id === payload)[0]          
            
            console.log(discount)
            
            return {
                ...state,
                modalAddPrdoduct: !state.modalAddPrdoduct,
                editProductBool: !state.editProductBool,
                addProductBool: false,
                product: state.products.filter(product => product._id === payload)[0],
                value: {
                    _id: payload,
                    title: title,
                    text: text,
                    ingridients: ingridients,
                    category: category || 'Все',
                    diskountCheck: discount.status || false,
                    discount: discount.status ? discount.count : 0,
                    discountList: discount.type || '%',
                    price: price.count || 0,
                    priceCurrency:price.currency || "₴",
                }
            }



        case ADMIN_MODAL_SUCCESS:
            return {
                ...state,
                modalSuccess: !state.modalSuccess,
                infoProduct: status,
                product: state.products.filter(product => product._id === payload)[0],
            }

        case ADMIN_INFO_PRODUCT:
            return {
                ...state,
                infoProduct: status,
                infoOrderProduct: false,
                product: state.products.filter(product => product._id === payload)[0],
            }

        case ADMIN_INFO_ORDER_PRODUCT:
            return {
                ...state,
                infoOrderProduct: status,
                infoProduct: false,
                orderProduct: state.orders.filter(product => product._id === payload)[0]
            }

        case ADMIN_SHOW_MODAL_CONTACT:
            return {
                ...state,
                modalContact: payload
            }



        case ADMIN_SHOW_ANSWER:
            return {
                ...state,
                answers: !state.answers
            }
        case ADMIN_SHOW_ANSWER_FORM:
            return {
                ...state,
                answerForm: !state.answerForm
            }




        case ADMIN_GET_MESSAGE_TEXT_FROM_FORM:
            console.log(payload)
            return state




        case ADMIN_GET_PROFILE_DATA:
            console.log(payload)
            return state

        default:
            return state
    }
}