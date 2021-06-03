import {call, put, takeEvery} from 'redux-saga/effects'
import Api from '../../services'
import {productSagaActions} from '../actionTypes'
import {start, fail, success} from '../slices/loadingSlice'
import {addProduct, deleteProduct, loadProducts} from '../slices/productSlice'

function* addProductSaga(action) {
  try {
    yield put(start())
    const {productImage, productCode, productName, categoryId, price} = action.payload.data
    let formData = new FormData() // instantiate it
    if (productImage) formData.set('productImage', productImage)
    formData.set('productCode', productCode)
    formData.set('productName', productName)
    formData.set('categoryId', categoryId)
    formData.set('price', price)
    const response = yield call(Api.post, '/api/admin/product', formData, {
      headers: {
        'content-type': 'multipart/form-data', // do not forget this
      },
    })
    yield put(addProduct(response.data.result.product))
    yield put(success())
    action.payload.callBack && action.payload.callBack()
  } catch (e) {
    yield put(fail())
  }
}

function* loadProductsSaga() {
  try {
    yield put(start())
    const response = yield call(Api.get, '/api/product')
    yield put(loadProducts(response.data.result))
    yield put(success())
  } catch (e) {
    yield put(fail())
  }
}

function* deleteProductSaga(action) {
  try {
    yield put(start())
    yield call(Api.delete, `/api/admin/product?id=${action.payload}`)
    yield put(deleteProduct(action.payload))
    yield put(success())
  } catch (e) {
    yield put(fail())
  }
}

function* productSaga() {
  yield takeEvery(productSagaActions.ADD_PRODUCT, addProductSaga)
  yield takeEvery(productSagaActions.LOAD_PRODUCTS, loadProductsSaga)
  yield takeEvery(productSagaActions.DELETE_PRODUCT, deleteProductSaga)
}

export default productSaga
