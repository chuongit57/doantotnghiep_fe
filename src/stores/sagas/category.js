import {call, put, takeEvery} from 'redux-saga/effects'
import Api from '../../services'
import {categorySagaActions} from '../actionTypes'
import {addCategory, deleteCategory, loadCategory} from '../slices/categorySlice'
import {start, fail, success} from '../slices/loadingSlice'

function* addCategorySaga(action) {
  try {
    yield put(start())
    const response = yield call(Api.post, 'api/admin/category', action.payload.data)
    yield put(addCategory(response.data.result.category))
    yield put(success())
    action.payload.callBack && action.payload.callBack()
  } catch (e) {
    yield put(fail())
  }
}

function* updateCategorySaga(action) {
  try {
    yield put(start())
    yield call(Api.put, 'api/admin/category', action.payload.data)
    yield call(loadCategorySaga)
    yield put(success())
    action.payload.callBack && action.payload.callBack()
  } catch (e) {
    yield put(fail())
  }
}

function* loadCategorySaga() {
  try {
    yield put(start())
    const response = yield call(Api.get, 'api/category')
    yield put(loadCategory(response.data.result))
    yield put(success())
  } catch (e) {
    yield put(fail())
  }
}

function* deleteCategorySaga(action) {
  try {
    yield put(start())
    yield call(Api.delete, `api/admin/category?id=${action.payload}`)
    yield put(deleteCategory(action.payload))
    yield put(success())
  } catch (e) {
    yield put(fail())
  }
}

function* categorySaga() {
  yield takeEvery(categorySagaActions.ADD_CATEGORY, addCategorySaga)
  yield takeEvery(categorySagaActions.LOAD_CATEGORIES, loadCategorySaga)
  yield takeEvery(categorySagaActions.EDIT_CATEGORIES, updateCategorySaga)
  yield takeEvery(categorySagaActions.DELETE_CATEGORY, deleteCategorySaga)
}

export default categorySaga
