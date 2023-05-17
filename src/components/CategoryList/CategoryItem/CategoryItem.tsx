import { Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MealCategory } from 'types'

interface CategoryItemProps extends MealCategory { }

export const CategoryItem = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }: CategoryItemProps) => {
	return (
		<Card>
			<CardBody>
				<Image
					src={strCategoryThumb}
					alt={strCategory}
					borderRadius='lg'
				/>
				<Stack mt='6' spacing='3'>
					<Heading size='md'>{strCategory}</Heading>
					<Text>
						{strCategoryDescription.slice(0, 60) + '...'}
					</Text>
				</Stack>
			</CardBody>

			<Divider />

			<CardFooter>
				<Link
					to={`/category/${strCategory}`}
					style={{ width: '100%' }}
				>
					<Button
						variant='solid'
						colorScheme='blue'
						textTransform='uppercase'
						width='full'
					>
						Watch category
					</Button>
				</Link>
			</CardFooter>
		</Card>
	)
}
