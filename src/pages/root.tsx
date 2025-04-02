import { Outlet } from "react-router-dom";
import { NavBar } from "../components/global/nav-bar";
import { Footer } from "../components/global/footer";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect } from "react";

export default function Root() {
	const { authenticate } = useAuthContext()
	useEffect(() => {
		authenticate()
	}, [])
	return <>
		<NavBar />
		<Outlet />
		<Footer />
	</>
}