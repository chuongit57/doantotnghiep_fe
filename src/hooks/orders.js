/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setProductNumber, addOrders, setReceiverInfo, resetOrder} from '../stores/slices/ordersSlice'

export const useOrders = () => {
  return useSelector((state) => state.orders.data)
}

export const useReceiverInfo = () => {
  return useSelector((state) => state.orders.receiverInfo)
}

export const useOnAddProduct = () => {
  const dispatch = useDispatch()
  return React.useCallback((value) => {
    dispatch(addOrders(value))
  }, [])
}

export const useOnResetOrder = () => {
  const dispatch = useDispatch()
  return React.useCallback(() => {
    dispatch(resetOrder())
  }, [])
}

export const useOnProductNumberChange = () => {
  const dispatch = useDispatch()
  return React.useCallback(({id, value}) => {
    dispatch(setProductNumber({id, value}))
  }, [])
}

export const useOnReceiverInfoChange = () => {
  const dispatch = useDispatch()
  return React.useCallback(({name, value}) => {
    dispatch(setReceiverInfo({name, value}))
  }, [])
}
