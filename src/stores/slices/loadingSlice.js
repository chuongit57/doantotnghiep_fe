import {createSlice} from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {
    isLoading: false,
  },
  reducers: {
    start: (state) => {
      state.isLoading = true
    },
    success: (state) => {
      state.isLoading = false
    },
    fail: (state) => {
      state.isLoading = false
    },
  },
})

// Action creators are generated for each case reducer function
export const {start, success, fail} = loadingSlice.actions

export default loadingSlice.reducer
