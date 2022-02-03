import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers'

const store = configureStore({
  reducer,
})

export default store

// created types for state and dispatch, made for use with new custogetElementByIdm hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
