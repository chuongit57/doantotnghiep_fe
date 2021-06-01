import {createSlice} from '@reduxjs/toolkit'

const initialState = {data: [], receiverInfo: {}}

export const ordersSlice = createSlice({
  name: 'ordersSlice',
  initialState: initialState,
  reducers: {
    setOrders: (state, action) => {
      state.data = action.payload
    },
    addOrders: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    setReceiverInfo: (state, action) => {
      state.receiverInfo[action.payload.name] = action.payload.value
    },
    setProductNumber: (state, action) => {
      const item = state.data.filter((i) => i.id === action.payload.id)[0]
      if (item) {
        const newValue = item['count'] + action.payload.value
        if (newValue === 0) {
          return {...state, data: state.data.filter((i) => i.id !== action.payload.id)}
        }

        item['count'] = newValue
      }
    },
    resetOrder: () => {
      return initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const {setOrders, setReceiverInfo, addOrders, setProductNumber, resetOrder} = ordersSlice.actions

export default ordersSlice.reducer
