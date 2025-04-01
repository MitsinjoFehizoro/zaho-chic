import { getAllProducts } from "../api/product-api"

export const fetchProducts = async () => {
	try {
		const apiData = await getAllProducts()
		return apiData.data
	} catch (error) {
		console.log("Failed to retrieved all products : ", error)
		return []
	}
}
