import {
    GET_PAGINATION_PAGE
} from 'store/actionTypes'

const initialState = {
    page: 0,
    prev: 0,
    next: 12,
}
export default (state = initialState, { type, payload, products }) => {
    const count = 12
    switch (type) {
        case GET_PAGINATION_PAGE:
            const pages = Math.floor(products.data.length / count )
            if ( payload > 0  && state.page >= 0 ) {
                if ( state.page + payload >= pages) {
                    const different = products.data.length - pages * count 
                    return {
                        page: pages,
                        prev: products.data.length - different,
                        next: products.data.length
                    }
                }
                if (state.page + payload <= pages){
                    return {
                        page: state.page + payload,
                        pages: pages,
                        prev: state.prev + count * payload,
                        next: state.next + count * payload
                    }
                }
            }
            if ( payload < 0 && state.page >= 0 ) {
                if ( state.page + payload <= 0 ) {
                    return {
                        page: 0,
                        prev: 0,
                        next: count
                    }
                }
                if( state.page + payload >= 0) {
                    return {
                        page: state.page + payload,
                        pages: pages,
                        prev: state.prev + count * payload,
                        next: state.next + count * payload
                    }
                }

            }
            if ( payload === 0) {
                return {
                    pages: pages,
                    prev: state.prev,
                    next: state.next
                }
            }
            
            return {
                pages: pages,
                prev: state.prev,
                next: state.next
            }

        default:
            return state
    }
}