import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editEProduct, loadEProduct} from '../stores/slices/eProductSlice'

export const useEProduct = () => {
  return useSelector((state) => state.eProduct)
}

export const useOnLoadEProduct = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch(loadEProduct(data))
  }, [])
}

export const useOnEditEProduct = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch(editEProduct(data))
  }, [])
}
