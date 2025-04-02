import { NavLink } from "react-router-dom";
import { Logo } from "./logo";
import { RoundNavLink } from "./round-nav-link";
import { NAV_BAR_LINK } from "../../scss/base/tailwind";
import { useAuthContext } from "../../hooks/useAuthContext";

export function NavBar() {
	const { isAuth, userAuth, logout } = useAuthContext()
	return (
		<>
			<header className="fixed z-50 w-full h-20 bg-secondary flex items-center justify-between px-16 ">
				<div className="gap-16 flex items-center">
					<Logo />
					<div className="bg-white opacity-60 w-0.5 h-8" />
					<div className="gap-6 flex items-center">
						<NavLink to='/' className={NAV_BAR_LINK}>Home</NavLink>
						<NavLink to='/shop' className={NAV_BAR_LINK}>Shop</NavLink>
						<NavLink to='' className={`${NAV_BAR_LINK} !cursor-not-allowed`}>Why us</NavLink>
						<NavLink to='' className={`${NAV_BAR_LINK} !cursor-not-allowed`}>Contact</NavLink>
						<RoundNavLink link="/cart" title="Go to cart" className="ml-10" />
					</div>
				</div>
				{
					isAuth ? (
						<div title="Logout" onClick={logout} className="text-white flex items-center gap-2 transition hover:scale-95 hover:opacity-80 cursor-pointer">
							<i className="fa-regular fa-circle-user text-lg"></i>
							<p className="capitalize">{userAuth?.username}</p>
						</div>
					) : (
						<NavLink to='/login' className={`${NAV_BAR_LINK} block`}>Sign in</NavLink>
					)
				}
			</header>
			<div className="w-full h-20" />
		</>
	)
}