import { getAllCategories } from "../api/category-api"

export const fetchCategories = async () => {
	try {
		const apiData = await getAllCategories()
		return apiData.data
	} catch (error) {
		console.log("Failed to retrieved all categories : ", error)
		return []
	}
}