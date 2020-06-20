import Axios from 'axios'
import { Robot } from '../interfaces'

const API_ROOT = 'https://jsonplaceholder.typicode.com'

const axios = Axios.create({
  baseURL: API_ROOT,
})

export const UserApi = {
  getUsers: () => axios.get<Robot[]>('/users'),
}

export const api = { UserApi }
