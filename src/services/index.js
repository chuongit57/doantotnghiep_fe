import axios from 'axios'
import {getToken} from '../utils/localStorages'

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000, // request timeout
})

// Add a request interceptor
Api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getToken()
    if (token) {
      config.headers.accessToken = `${token}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
Api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default Api
