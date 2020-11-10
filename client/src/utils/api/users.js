import { axios } from 'core'


export default {
    getUsers: () => axios.post(`/users/`)
}