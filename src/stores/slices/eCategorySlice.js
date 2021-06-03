import {createSlice} from '@reduxjs/toolkit'

export const eCategorySlice = createSlice({
  name: 'eCategorySlice',
  initialState: {},
  reducers: {
    loadECategory: (state, action) => {
      return {...state, ...action.payload}
    },
    editECategory: (state, action) => {
      state[action.payload.name] = action.payload.value
    },
    resetECateogry: () => {},
  },
})

// Action creators are generated for each case reducer function
export const {loadECategory, editECategory, resetECateogry} = eCategorySlice.actions

export default eCategorySlice.reducer
