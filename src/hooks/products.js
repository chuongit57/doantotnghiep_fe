/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {productSagaActions} from '../stores/actionTypes'

export const useProducts = () => {
  return useSelector((state) => state.products.data)
}

export const useOnLoadAPIProducts = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch({type: productSagaActions.LOAD_PRODUCTS, payload: data})
  }, [])
}

export const useOnAddAPIProduct = () => {
  const dispatch = useDispatch()
  return React.useCallback((data, callBack) => {
    dispatch({type: productSagaActions.ADD_PRODUCT, payload: {data, callBack}})
  }, [])
}

export const useOnDeleteAPIProduct = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch({type: productSagaActions.DELETE_PRODUCT, payload: data})
  }, [])
}
