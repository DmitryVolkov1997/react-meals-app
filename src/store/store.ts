import {configureStore, combineReducers} from '@reduxjs/toolkit'
import searchReducer from 'store/slices/searchSlice'

const rootReducer = combineReducers({
	search: searchReducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch