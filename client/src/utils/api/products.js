import { axios } from 'core'

export default {
    fetchGetProducts: () => axios.get('/products')
    

}