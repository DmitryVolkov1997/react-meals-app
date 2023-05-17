import { CategoryPage, HomePage } from 'pages'
import { RecipePage } from 'pages/RecipePage/RecipePage'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/category/:name" element={<CategoryPage />} />
			<Route path="/meal/:id" element={<RecipePage />} />
		</Routes>
	)
}
