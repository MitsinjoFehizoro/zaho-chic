import { getAllProductsApi } from "../api/product-api"

export const getAllProductsService = async () => {
	try {
		const apiData = await getAllProductsApi()
		return apiData.data
	} catch (error) {
		console.log("Failed to retrieved all products : ", error)
		throw new Error("Failed to retrieved all categories")
	}
}
