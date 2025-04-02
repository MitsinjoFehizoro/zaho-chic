
import { User } from './../types/User';
import axiosInstance from "./axios-instance"

export const registerUserApi = async (user: User) => {
	const response = await axiosInstance.post("/user/register", user)
	return response.data
}

export const loginApi = async (user: User) => {
	const response = await axiosInstance.post("/user/login", user)
	return response.data
}