import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
// import displayObjectReducer from '../features/displayObject/displayObjectSlice'
import formReducer from '../features/form/formSlice'
import cardReducer from '../features/cards/cardSlice'
export default configureStore({
  reducer: {
    // counter: counterReducer,
    // displayObject: displayObjectReducer
    form: formReducer,
    cards:cardReducer
  },
})