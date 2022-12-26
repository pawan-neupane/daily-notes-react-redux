import { createSlice } from '@reduxjs/toolkit'


export const formSlice = createSlice({
  name: 'form',
  initialState: {
    value: [],
  },
  reducers: {
    setForm: (state,action) => {
        console.log("setting formmmmmm",action.payload)
        state.value = action.payload
    },
  },
})

export const { setForm } = formSlice.actions

export default formSlice.reducer