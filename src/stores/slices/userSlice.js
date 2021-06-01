import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    data: [],
  },
  reducers: {
    loadUser: (state, action) => {
      state.data = action.payload
    },
    editUser: (state, action) => {
      state.data[action.payload.name] = action.payload.value
    },
  },
})

// Action creators are generated for each case reducer function
export const {loadProducts} = userSlice.actions

export default userSlice.reducer
