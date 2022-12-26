import { createSlice } from '@reduxjs/toolkit'


export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    value: [],
  },

  reducers: {
    cardsDataAppend: (state, action) => {
      state.value = [...state.value,action.payload]
      console.log("Card dataaaaa",state.value)
    },

    cardsDataUpdate: (state, action) => {
        const [replacePosition,dataToReplace] = action.payload
        const newArray = [...state.value]
        newArray[replacePosition] = dataToReplace
        state.value = newArray
      },

      cardsDataDelete: (state, action) => {
        const newarray = [...state.value]
        newarray.splice(action.payload, 1);
        state.value = newarray

      },

  },
})


export const { cardsDataAppend, cardsDataUpdate, cardsDataDelete } = cardSlice.actions

export default cardSlice.reducer