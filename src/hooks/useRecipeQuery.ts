import { useQuery } from '@tanstack/react-query'
import { getRecipeById } from 'services'

export const useRecipeQuery = (id: string) => {
	return useQuery({
		queryFn: () => getRecipeById(id),
		queryKey: ['recipe', id],
		enabled: !!id,
		select({ data }) {
			return data.meals[0]
		},
	})
}
