import {combineReducers} from '@reduxjs/toolkit'
import {connectRouter} from 'connected-react-router'
import {history} from './history'
import productsReducer from './slices/productSlice'
import ordersReducer from './slices/ordersSlice'

const createRootReducer = (injectedReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    products: productsReducer,
    orders: ordersReducer,
    ...injectedReducers,
  })
export default createRootReducer
