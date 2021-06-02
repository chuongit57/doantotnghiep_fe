import {all} from 'redux-saga/effects'
import categorySaga from './category'
import productSaga from './product'
import userSaga from './user'

export default function* rootSaga() {
  yield all([userSaga(), categorySaga(), productSaga()])
}
