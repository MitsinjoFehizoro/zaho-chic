import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"

export function PrivateRoute() {
	const { isAuth } = useAuthContext()
	return isAuth ? <Outlet /> : <Navigate to={'/login'} />
}