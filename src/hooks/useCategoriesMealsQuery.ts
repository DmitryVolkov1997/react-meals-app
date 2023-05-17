import { useQuery } from '@tanstack/react-query'
import { getCategoriesList } from 'services'

export const useCategoriesMealsQuery = () => {
	return useQuery({
		queryFn: getCategoriesList,
		queryKey: ['categories'],
		select(data) {
			return data.data.categories
		},
	})
}
