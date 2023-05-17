import { Box, Button, Container, FormControl, Heading, Input, Spinner } from '@chakra-ui/react'
import { CategoryList } from 'components'
import { useAppDispatch, useAppSelector, useCategoriesMealsQuery } from 'hooks'
import { Layout } from 'layout'
import { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { setSearch } from 'store/slices/searchSlice'
import { MealCategory } from 'types'

export const HomePage = () => {
	const { search } = useAppSelector(state => state.search)
	const { data: categories, isLoading, isSuccess, error } = useCategoriesMealsQuery()
	const [filtered, setFiltered] = useState<MealCategory[]>(categories ?? [])
	const dispatch = useAppDispatch()
	const { search: searchLocation } = useLocation()
	const [searchParams, setSearchParams] = useSearchParams()
	const initialSearch = searchParams.get('s') || ''

	const handleSearch = (search: string) => {
		if (search === '') {
			setFiltered(categories ?? [])
		} else {
			setSearchParams({ s: search })
			const list = categories?.filter(category =>
				category.strCategory.toLowerCase().includes(search.toLowerCase())
			) ?? []

			setFiltered(list.length ? list : categories ?? [])
		}
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch(search)
		}
	}

	useEffect(() => {
		const query = searchParams.get('s') || ''
		handleSearch(query)

		dispatch(setSearch(searchLocation.slice(3)))
	}, [searchLocation])

	useEffect(() => {
		if (categories?.length && search === '') {
			setFiltered(categories)
		}
	}, [categories, search])

	useEffect(() => {
		if (initialSearch) {
			handleSearch(search)
		}
	}, [categories])

	if (error instanceof Error) {
		return <Heading>{error.message}</Heading>
	}

	return (
		<Layout>
			<Container maxW="6xl" mx="auto">
				<form
					onSubmit={handleSubmit}
				>
					<FormControl
						display="flex"
						alignItems="center"
						gap="0 15px"
						mt="40px"
					>
						<Input
							type="search"
							placeholder="Search meal by name"
							onChange={(e) => dispatch(setSearch(e.target.value))}
							onKeyDown={handleKey}
							value={search}
						/>

						<Button
							colorScheme="blue"
							onClick={() => handleSearch(search)}
						>
							Search
						</Button>
					</FormControl>
				</form>

				{isLoading && (
					<Box
						display="flex"
						justifyContent="center"
						mt="10%"
					>
						<Spinner
							thickness="4px"
							speed="0.65s"
							emptyColor="gray.200"
							color="blue.500"
							size="xl"
						/>
					</Box>
				)}
				{isSuccess && categories?.length && (
					<CategoryList list={filtered} />
				)}
			</Container>
		</Layout>
	)
}

