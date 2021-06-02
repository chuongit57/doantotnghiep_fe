import {combineReducers} from '@reduxjs/toolkit'
import {connectRouter} from 'connected-react-router'
import {history} from './history'
import productsReducer from './slices/productSlice'
import ordersReducer from './slices/ordersSlice'
import userReducer from './slices/userSlice'
import loadingReducer from './slices/loadingSlice'
import categoryReducer from './slices/categorySlice'
import eCategoryReducer from './slices/eCategorySlice'
import eProductReducer from './slices/eProductSlice'

const createRootReducer = (injectedReducers = {}) =>
  combineReducers({
    router: connectRouter(history),
    products: productsReducer,
    category: categoryReducer,
    orders: ordersReducer,
    user: userReducer,
    loading: loadingReducer,
    eCategory: eCategoryReducer,
    eProduct: eProductReducer,
    ...injectedReducers,
  })
export default createRootReducer
