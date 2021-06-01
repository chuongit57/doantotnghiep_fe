import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {userSagaActions} from '../stores/actionTypes'

export const useUser = () => {
  return useSelector((state) => state.user)
}

export const useOnAPISignIn = () => {
  const dispatch = useDispatch()
  return useCallback((data) => {
    dispatch({type: userSagaActions.FETCH_USER, payload: data})
  }, [])
}
