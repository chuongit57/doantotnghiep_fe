import {createSlice} from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    data: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.data = action.payload
    },
    deleteProduct: (state, action) => {
      state.data.filter((item) => item.id !== action.payload)
    },
    addProduct: (state, action) => {
      state.data = [...state.data, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const {loadProducts, deleteProduct, addProduct} = productSlice.actions

export default productSlice.reducer
