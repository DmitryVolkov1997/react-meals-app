import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Spinner } from '@chakra-ui/react'
import { Meal } from 'components'
import { useMealsQuery } from 'hooks'
import { Layout } from 'layout'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './CategoryPage.module.sass'

export const CategoryPage = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	const { data: meals, isLoading, isSuccess, error } = useMealsQuery(name ? name : '')

	if (error instanceof Error) {
		return <Heading>{error.message}</Heading>
	}

	return (
		<Layout>
			<Container maxW='6xl' mx='auto'>

				<Button
					colorScheme='blue'
					mt='40px'
					onClick={() => navigate(-1)}
				>
					<ArrowBackIcon />
				</Button>

				{isLoading && (
					<Box
						display='flex'
						justifyContent='center'
						mt='10%'
					>
						<Spinner
							thickness='4px'
							speed='0.65s'
							emptyColor='gray.200'
							color='blue.500'
							size='xl'
						/>
					</Box>
				)}

				<Box className={styles.list} my='40px'>
					{
						isSuccess && meals?.map(meal => (
							<Meal key={meal.idMeal} {...meal} />
						))
					}
				</Box>

			</Container>
		</Layout>
	)
}

