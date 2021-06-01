/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {mockProducts} from '../assets/mock/data'
import {loadProducts} from '../stores/slices/productSlice'

export const useProducts = () => {
  return useSelector((state) => state.products.data)
}

export const useloadProducts = () => {
  const dispatch = useDispatch()
  return React.useCallback(() => {
    dispatch(loadProducts(mockProducts))
  }, [])
}
