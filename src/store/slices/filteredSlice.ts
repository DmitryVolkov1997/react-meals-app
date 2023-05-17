import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {MealCategory} from 'types'

type FilteredSlice = {
	filtered: MealCategory[],
	categoriesList: MealCategory[]
}

const initialState: FilteredSlice = {
	filtered: [],
	categoriesList: []
}

const filteredSlice = createSlice({
	name: 'filtered',
	initialState,
	reducers: {
		setCategories(state, action) {
		},
		setFiltered(state, action: PayloadAction<string>) {
			state.filtered = state.filtered.filter(catalog => catalog.strCategory.toUpperCase() === action.payload.toUpperCase())
		}
	}
})

export const {setFiltered} = filteredSlice.actions
export default filteredSlice.reducer