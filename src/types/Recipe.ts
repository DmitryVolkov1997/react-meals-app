import { Meal } from './Meal'

export type Recipe = {
	strCategory: string
	strArea: string | null
	strMealThumb: string
	strInstructions: string
	strYoutube: string | null
	[key: string]: string | null
} & Meal

export type RecipeRes = {
	data: {
		meals: Recipe[]
	}
} & Meal
