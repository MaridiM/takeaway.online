import { axios } from 'core'


export default {
    getCategoriesApi: () => axios.get(`/categories/`)
}