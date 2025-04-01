import axiosInstance from "./axios-instance"

export const getAllProducts = async () => {
	const response = await axiosInstance.get('/products/get/all')
	return response.data
}	