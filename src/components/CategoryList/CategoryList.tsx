import { Box } from '@chakra-ui/react'
import { CategoryItem } from 'components'
import { MealCategory } from 'types'
import styles from './CategoryList.module.sass'

interface CategoryListProps {
	list: MealCategory[]
}

export const CategoryList = ({ list }: CategoryListProps) => {
	return (
		<Box className={styles.list} my='40px'>
			{
				list.map(category => (
					<CategoryItem key={category.idCategory} {...category} />
				))
			}
		</Box>
	)
}

