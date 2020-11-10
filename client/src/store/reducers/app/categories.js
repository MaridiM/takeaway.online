import { 
    GET_CATEGORIES,
    GET_CATEGORY
} from 'store/actionTypes'

const initialState = {
    categories: [],
    category: 'all',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload.data
            }
    
        case GET_CATEGORY:
            return {
                ...state,
                category: payload
            }
    
        default:
            return state
    }
}