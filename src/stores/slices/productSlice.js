import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    data: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.data = action.payload
    },
    deleteProduct: (state, action) => {
      return {...state, data: state.data.filter((item) => item.id !== action.payload)}
    },
    addProduct: (state, action) => {
      state.data = [...state.data, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const {loadProducts, deleteProduct, addProduct} = productSlice.actions

export default productSlice.reducer
