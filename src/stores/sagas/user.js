import {call, put, takeEvery} from 'redux-saga/effects'
import Api from '../../services'
import {setToken} from '../../utils/localStorages'
import {userSagaActions} from '../actionTypes'
import {start, fail, success} from '../slices/loadingSlice'
import {loadUser} from '../slices/userSlice'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signIn(action) {
  try {
    yield put(start())
    const response = yield call(Api.post, 'api/admin/login', action.payload.data)
    yield put(loadUser(response.data.result))
    yield call(setToken, response.data.result.accessToken)
    action.payload.callBack && action.payload.callBack()
    yield put(success())
  } catch (e) {
    yield put(fail())
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* userSaga() {
  yield takeEvery(userSagaActions.SIGN_IN, signIn)
}

export default userSaga
