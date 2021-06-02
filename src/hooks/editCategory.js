import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editECategory, loadECategory} from '../stores/slices/eCategorySlice'

export const useECategory = () => {
  return useSelector((state) => state.eCategory)
}

export const useOnLoadECategory = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch(loadECategory(data))
  }, [])
}

export const useOnEditECategory = () => {
  const dispatch = useDispatch()
  return React.useCallback((data) => {
    dispatch(editECategory(data))
  }, [])
}
