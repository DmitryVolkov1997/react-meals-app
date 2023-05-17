import axiosInstance from 'axiosInstance/axiosInstance'
import { MealCategoryRes, MealRes, RecipeRes } from 'types'

export const getCategoriesList = (): Promise<MealCategoryRes> => {
	return axiosInstance.get('/categories.php')
}

export const getFilteredCategory = (name: string): Promise<MealRes> => {
	return axiosInstance.get(`/filter.php?c=${name}`)
}

export const getRecipeById = (id: string): Promise<RecipeRes> => {
	return axiosInstance.get(`/lookup.php?i=${id}`)
}
