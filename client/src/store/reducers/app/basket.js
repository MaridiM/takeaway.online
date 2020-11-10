import moment from 'moment'
import {
    GET_PRODUCTS_IN_BASKET,
    ADD_PRODUCTS_IN_BASKET,
    REMOVE_PRODUCTS_IN_BASKET,
    DELETE_PRODUCTS_FROM_BASKET,
    DELETE_ALL_FROM_BASKET,

    GET_DATA_FROM_ORDER_FORM,
    HIDE_ORDER_SUCCESS,
    SEND_ORDER_DATA,
    HIDE_MODAL_BASKET_IS_EMPTY
    
} from 'store/actionTypes'


import { ordersApi } from 'utils/api'

const { newOrder } = ordersApi

const initialState = {
    basket: [],
    basketCount: null,
    fullPrice: 0,
    currency: '',
    orderSuccess: false,
    basketIsEmpty: false,
    resetOrderForm: false,
    orderForm: {
        id: null,
        address: '',
        email: '',
        fullname: '',
        phone: '',
        promo: '',
        price: {
            count: 0,
            currency: '₴'
        },
        orderCount: {
            count: null,
            type: "шт"
        },
        products: []
    }
}

export default (state = initialState, { type, payload, products }) => {
    let product, price, diferentPrice, diferent
    switch (type) {
        case GET_PRODUCTS_IN_BASKET:
            product = products.data
                .filter(product => product._id === payload)
            if (state.basket.length) {
                const index = state.basket
                    .findIndex(i => i[0]._id === payload)
                if (index !== -1) {
                        state.basket[index]
                            .push(product[0])
                    } else {
                        state.basket
                            .push(product)
                    }
                } else {
                    state.basket
                        .push(product)
                }

                price =  state.basket
                    .map(products => products
                        .map(product => product.price.count)
                        .reduce((a, b) => a + b))
                    .reduce((a, b) => a + b)
            const currency = state.basket
                .map(products => products
                .map(product => product.price.currency[0]))[0][0]



                return {
                    ...state,
                    basket: [...state.basket],
                    basketCount: state.basket
                        .map(products => products.length)
                        .reduce((a, b) => a + b),
                    fullPrice: price,
                    currency: currency || '₴'
                }
        
        case ADD_PRODUCTS_IN_BASKET:

            state.basket.map( products => {
                const product = products
                    .filter( product => product._id === payload)   
                const index = state.basket
                    .findIndex(i => i[0]._id === payload) 


                if (product[0] !== undefined) {
                    state.basket[index]
                        .push(product[0])
                }
                return state
            })
            price = state.basket
                .map(products => products
                    .map(product => product.price.count)
                    .reduce((a, b) => a + b))
                .reduce((a, b) => a + b)
            
            return {
                ...state,
                basket: [...state.basket],
                basketCount: state.basket
                    .map(products => products.length)
                    .reduce((a, b) => a + b),
                fullPrice: price
            }
           
        
        case REMOVE_PRODUCTS_IN_BASKET:
            price = state.basket
                .map(products => products
                    .map(product => product.price.count)
                    .reduce((a, b) => a + b))
                .reduce((a, b) => a + b)
            const index = state.basket
                    .findIndex(i => i[0]._id === payload)
            
            if (state.basket[index].length-1 ===  0) {
                diferent = state.basket
                    .filter((i) => i[0]._id === payload);
               
                diferentPrice = state.basket
                    .filter((i) => i[0]._id === payload)
                    .map((product) => product[0].price.count * product.length);
                
                return {
                    ...state,
                    basket: state.basket
                        .slice(0, index)
                        .concat(state.basket
                            .slice(index + 1)),
                    basketCount: state.basket
                        .map((products) => products.length)
                        .reduce((a, b) => a + b) - diferent[0].length,
                    fullPrice: price - diferentPrice[0],
                }
            }

            state.basket[index]
                .pop(state.basket[index]
                    .filter(product => product))
            return {
                ...state,
                basket: [...state.basket],
                basketCount: state.basket
                  .map((products) => products.length)
                  .reduce((a, b) => a + b),
                fullPrice: price,
            };


        case DELETE_PRODUCTS_FROM_BASKET:
        
            diferent = state.basket
                .filter(i => i[0]._id === payload)
            diferentPrice = state.basket
                .filter(i => i[0]._id === payload)
                .map(product => product[0].price.count * product.length)
            

            price = state.basket
                .map(products => products
                    .map(product => product.price.count)
                    .reduce((a, b) => a + b))
                .reduce((a, b) => a + b)
            return {    
                ...state,
                basket: [...state.basket
                    .filter(i => i[0]._id !== payload)],
                basketCount: state.basket
                    .map(products => products.length)
                    .reduce((a, b) => a + b) - diferent[0].length,
                fullPrice: price - diferentPrice[0],
                currency: state.currency || '₴'
            }

        case DELETE_ALL_FROM_BASKET:
            return {
                ...state,
                basket: [],
                fullPrice: 0,
                basketCount: 0
            }

        case HIDE_MODAL_BASKET_IS_EMPTY:
            return {
                ...state,
                basketIsEmpty: payload,
            }

        case GET_DATA_FROM_ORDER_FORM:
            if (!state.basket.length) {
                return {
                    ...state,
                    basketIsEmpty: true,
                }
            }
            if (
                payload.fullname !== "" && 
                payload.email !== "" && 
                payload.address !== "" && 
                payload.phone !== "" &&
                state.basket
                ) {
                return {
                    ...state,
                    orderSuccess: true,
                    resetOrderForm: false,
                    orderForm: {
                        orderNum: Math.floor(Math.random() * 99999999),
                        dateOrder: moment().format("DD.MM.YY HH:mm"),
                        fullname: payload.fullname || '',
                        email: payload.email || '',
                        phone: payload.phone || '',
                        address: payload.address || '',
                        promo: payload.promo || '',
                        price: {
                            count: state.fullPrice || 0,
                            currency: state.currency || '₴'
                        },
                        orderCount: {
                            count: state.basketCount,
                            type: "шт"
                        },
                        products: state.basket
                    }
                }    
            }
            return  state    

        case SEND_ORDER_DATA:
            console.log(state.orderForm)
            const orderData = JSON.parse(JSON.stringify(state.orderForm))
            newOrder(orderData)
            
            return {
                ...state,
                orderSuccess: false,
                resetOrderForm: true,
                basket: [],
                fullPrice: 0,
                basketCount: 0
            }

        case HIDE_ORDER_SUCCESS:
            return {
                ...state,
                orderSuccess: false,
                resetOrderForm: false,
            }
      

        default:
            return state
    }
}