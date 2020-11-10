import { axios } from 'core'
import { configData } from 'utils/helpers'

export default {
    getProductId: (id) => axios.get(`/product/${id}`),
    getReviews: (id) => axios.get(`/product/${id}?reviews`),
    
    addProductReview: (id, data) => axios.post(`/product/add-review`, [data, id], configData),
    addProduct: (data) => axios.post(`/product/add`, data, configData),
    editProduct: (id, data) => axios.post(`/product/edit/${id}`, data,configData),
    deleteProduct: (id) => axios.post(`/product/delete/${id}`, configData),
    copyProduct: (id) => axios.post(`/product/copy/${id}`, configData),
    
}