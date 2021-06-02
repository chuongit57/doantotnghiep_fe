import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSagaActions} from '../stores/actionTypes'

export const useUser = () => {
  return useSelector((state) => state.user.data)
}

export const useOnAPISignIn = () => {
  const dispatch = useDispatch()
  return useCallback((data, callBack) => {
    dispatch({type: userSagaActions.SIGN_IN, payload: {data, callBack}})
  }, [])
}
