import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Meal as MealType } from 'types'

interface MealProps extends MealType { }

export const Meal = ({ idMeal, strMeal, strMealThumb }: MealProps) => {
	return (
		<Card>
			<CardBody>
				<Image
					src={strMealThumb}
					alt={strMeal}
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md'></Heading>
					<Text>
						{strMeal.slice(0, 60) + '...'}
					</Text>
				</Stack>
			</CardBody>

			<Divider />

			<CardFooter>
				<Link
					to={`/meal/${idMeal}`}
					style={{ width: '100%' }}
				>
					<Button
						variant='solid'
						colorScheme='blue'
						textTransform='uppercase'
						width='full'
					>
						Watch recipe
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}

