import { useQuery } from '@tanstack/react-query'
import { getFilteredCategory } from 'services'

export const useMealsQuery = (name: string) => {
	return useQuery({
		queryFn: () => getFilteredCategory(name),
		queryKey: ['meals', name],
		enabled: !!name,
		select({ data }) {
			return data.meals
		},
	})
}
