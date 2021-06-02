/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {categorySagaActions} from '../stores/actionTypes'

export const useCategory = () => {
  return useSelector((state) => state.category.data)
}

export const useOnLoadAPICategories = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch({type: categorySagaActions.LOAD_CATEGORIES, payload: data})
  }, [])
}

export const useOnAddAPICategory = () => {
  const dispatch = useDispatch()
  return React.useCallback((data, callBack) => {
    dispatch({type: categorySagaActions.ADD_CATEGORY, payload: {data, callBack}})
  }, [])
}

export const useOnDeleteAPICategory = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch({type: categorySagaActions.DELETE_CATEGORY, payload: data})
  }, [])
}
