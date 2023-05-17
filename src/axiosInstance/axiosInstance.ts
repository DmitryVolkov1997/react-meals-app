import axios from 'axios'
import { BASE_URL } from 'constants/constants'

const axiosInstance = axios.create({
	baseURL: BASE_URL, // Замените на свой BASE_URL
	timeout: 5000, // Максимальное время ожидания запроса (в миллисекундах)
	headers: {
		'Content-Type': 'application/json',
		// Другие заголовки, если необходимо
	},
})

export default axiosInstance
