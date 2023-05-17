import { ArrowBackIcon } from '@chakra-ui/icons'
import { Box, Button, Card, CardBody, CardFooter, Container, Heading, Image, Spinner, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import { useRecipeQuery } from 'hooks/useRecipeQuery'
import { Layout } from 'layout'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './RecipePage.module.sass'

export const RecipePage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const { data: recipe, isLoading, isSuccess, error } = useRecipeQuery(id ? id : '')

	if (error instanceof Error) {
		return <Heading>{error.message}</Heading>
	}

	return (
		<Box className={styles.recipePage}>
			<Layout>
				<Container maxW='6xl' mx='auto'>
					<Button
						colorScheme='blue'
						my='40px'
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

					{isSuccess && (
						<Card
							direction={{ base: 'column', sm: 'column' }}
							overflow='hidden'
							variant='outline'
							mb='10%'
						>
							<Image
								objectFit='cover'
								maxW={{ base: '100%', sm: '100%' }}
								maxHeight='500px'
								src={recipe.strMealThumb}
								alt='Caffe Latte'
							/>

							<Stack>
								<CardBody>
									<Heading size='md' mb='4px'>
										{recipe.strMeal}
									</Heading>
									{
										recipe.strArea && (
											<Heading
												size='sm'
												fontWeight='medium'
												mb='4px'
											>
												Area: {recipe.strArea}
											</Heading>
										)
									}
									<Heading
										size='sm'
										mb='2px'
										as='h6'
										fontWeight='medium'
									>
										Category: {recipe.strCategory}
									</Heading>
									<Text py='2' textAlign='justify' mb='10px'>
										{recipe.strInstructions}
									</Text>
									{recipe.strYoutube && (
										<Box maxW='800px'>
											<iframe
												width="100%"
												height="415"
												src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
												title={recipe.strMeal}
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
										</Box>
									)}
								</CardBody>

								<CardFooter>
									<TableContainer width='full'>
										<Table variant='simple'>
											<Thead>
												<Tr>
													<Th>Ingredient</Th>
													<Th>Measure</Th>
												</Tr>
											</Thead>
											<Tbody>
												{Object.keys(recipe).map((key: string, idx: number) => {
													if (key.includes('strIngredient') && recipe[key]) {
														return (
															<Tr key={idx}>
																<Td>{recipe[key]}</Td>
																<Td>{recipe[`strMeasure${key.slice(13)}`]}</Td>
															</Tr>
														)
													} else {
														return null
													}
												})}
											</Tbody>
										</Table>
									</TableContainer>
								</CardFooter>
							</Stack>
						</Card>
					)}
				</Container>
			</Layout>
		</Box>
	)
}
