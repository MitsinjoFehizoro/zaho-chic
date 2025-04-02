import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { User } from "../types/User";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


interface authContext {
	isAuth: boolean,
	setIsAuth: (b: boolean) => void,
	userAuth: User | null,
	setUserAuth: (u: User | null) => void
}

const AuthContext = createContext<authContext>({
	isAuth: false,
	setIsAuth: () => { },
	userAuth: null,
	setUserAuth: () => { }
})

export function useAuthContext() {
	const { isAuth, setIsAuth, userAuth, setUserAuth } = useContext(AuthContext)
	const navigate = useNavigate()

	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			try {
				const decoded = jwtDecode(token)
				setUserAuth({ username: decoded.sub! })
				setIsAuth(true)
			} catch (e) {
				logout()
			}
		}
	}, [])

	const login = (token: string) => {
		console.log("token", token)
		localStorage.setItem('token', token)
		const decoded = jwtDecode(token)
		setUserAuth({ username: decoded.sub! })
		setIsAuth(true)
		navigate("/")

	}

	const logout = () => {
		localStorage.removeItem('token')
		setUserAuth(null)
		setIsAuth(false)
		navigate("/login")
	}

	return {
		isAuth,
		userAuth,
		login,
		logout
	}
}

export function AuthContextProvider({ children }: PropsWithChildren) {
	const [isAuth, setIsAuth] = useState(false)
	const [userAuth, setUserAuth] = useState<User | null>(null)
	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth, userAuth, setUserAuth }}>
			{children}
		</AuthContext.Provider>
	)
}