import { 
    GET_CATEGORIES,
    GET_CATEGORY
} from 'store/actionTypes'

import { categoriesApi }  from 'utils/api'

const {
    getCategoriesApi
} = categoriesApi
    
export const getCategories = () => async dispatch => {
    dispatch({
        type: GET_CATEGORIES,
        payload: await getCategoriesApi()
    })
}

export const getCategory = (category) => dispatch => {
    dispatch({
        type: GET_CATEGORY,
        payload: category
    })
}