import {createSlice} from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'categorySlice',
  initialState: {
    data: [],
  },
  reducers: {
    loadCategory: (state, action) => {
      state.data = action.payload
    },
    deleteCategory: (state, action) => {
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      }
    },
    addCategory: (state, action) => {
      state.data = [...state.data, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const {loadCategory, deleteCategory, addCategory} = categorySlice.actions

export default categorySlice.reducer
