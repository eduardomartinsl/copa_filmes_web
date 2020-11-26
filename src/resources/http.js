import Axios from 'axios'
import {BASE_URL} from './urls'

const http = Axios.create({baseURL: BASE_URL})

export {http}