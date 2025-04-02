import axiosInstance from "./axios-instance"

export const getAllProductsApi = async () => {
	const response = await axiosInstance.get('/products/get/all')
	return response.data
}	