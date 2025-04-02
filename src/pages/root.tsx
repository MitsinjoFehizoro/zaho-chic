import { Outlet } from "react-router-dom";
import { NavBar } from "../components/global/nav-bar";
import { Footer } from "../components/global/footer";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Root() {
	const { isAuth } = useAuthContext()
	return <>
		<NavBar />
		<Outlet />
		<Footer />
	</>
}