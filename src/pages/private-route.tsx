import { Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"
import { LoginPage } from "./login-page"

export function PrivateRoute() {
	const { isAuth } = useAuthContext()

	if (isAuth) {
		return <Outlet />
	}
	return <LoginPage />
}