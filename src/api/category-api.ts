import axiosInstance from "./axios-instance"

export const getAllCategories = async () =>{
	const response = await axiosInstance.get('/categories/get/all')
	return response.data
}