import axiosInstance from "./axios-instance"

export const updateCartItemApi = async (quantity: number, cartItemId: string) => {
	const response = await axiosInstance.put(`/cart-items/update?quantity=${quantity}&cartItemId=${cartItemId}`)
	return response.data
}

export const deleteCartItemApi = async (cartItemId: string) => {
	const response = await axiosInstance.delete(`/cart-items/remove?cartItemId=${cartItemId}`)
	return response.data
}

export const addCartItemApi = async (quantity: string, productId: string) => {
	const response = await axiosInstance.post(`/cart-items/add?quantity=${quantity}&productId=${productId}`)
	return response.data
}

