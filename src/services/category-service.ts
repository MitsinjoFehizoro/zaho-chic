import { getAllCategoriesApi } from './../api/category-api';

export const getAllCategoriesService = async () => {
	try {
		const apiData = await getAllCategoriesApi()
		return apiData.data
	} catch (error) {
		console.log("Failed to retrieved all categories : ", error)
		throw new Error("Failed to retrieved all categories.")
	}
}