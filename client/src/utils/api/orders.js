import { axios } from 'core'
import { configData } from 'utils/helpers'


export default {
    fetchGetOrders: () => axios.get(`/orders`),

    newOrder: (orderData) => axios.post(`/orders/new-order`, orderData, configData)
}