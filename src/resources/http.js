import Axios from 'axios'
import {BASE_URL} from './urls'

const http = Axios.create({
  baseURL: BASE_URL,
  headers: {"Access-Control-Allow-Origin": "*"}
})

export {http}