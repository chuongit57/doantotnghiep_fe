import {createSlice} from '@reduxjs/toolkit'

export const eProductSlice = createSlice({
  name: 'eProductSlice',
  initialState: {},
  reducers: {
    loadEProduct: (state, action) => {
      state = action.payload
    },
    editEProduct: (state, action) => {
      state[action.payload.name] = action.payload.value
    },
    resetEProduct: () => {},
  },
})

// Action creators are generated for each case reducer function
export const {loadEProduct, editEProduct, resetEProduct} = eProductSlice.actions

export default eProductSlice.reducer
