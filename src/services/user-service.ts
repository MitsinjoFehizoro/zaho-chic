import { loginApi, registerUserApi } from "../api/user-api"
import { User } from "../types/User"

export const registerUserService = async (user: User) => {
	try {
		const apiData = await registerUserApi(user)
		return apiData
	} catch (error) {
		console.log("Failed to register : ", error)
		throw new Error("Failed to register.")
	}
}


export const loginUserService = async (user: User) => {
	try {
		const apiData = await loginApi(user)
		return apiData
	} catch (error) {
		console.log("Failed to login : ", error)
		throw new Error("Failed to login.")
	}
}