export type Meal = {
	strMeal: string
	strMealThumb: string
	idMeal: string
}

export type MealRes = {
	data: {
		meals: Meal[]
	}
}
