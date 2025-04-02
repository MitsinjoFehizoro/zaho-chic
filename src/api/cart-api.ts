import axiosInstance from "./axios-instance"

export const getCartApi = async () => {
	const response = await axiosInstance.get("/cart/get")
	return response.data
}