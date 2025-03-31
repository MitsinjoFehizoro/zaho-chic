import { Outlet } from "react-router-dom";
import { NavBar } from "../components/global/nav-bar";
import { Footer } from "../components/global/footer";

export default function Root() {
	return <>
		<NavBar/>
		<Outlet />
		<Footer />
	</>
}