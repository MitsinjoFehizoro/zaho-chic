import { getCartApi } from './../api/cart-api';
export const getCartService = async () => {
	try {
		const apiData = await getCartApi()
		return apiData
	} catch (error) {
		console.log("Failed to retrieved cart : ", error)
		throw new Error("Failed to retrieved cart.")
	}
}