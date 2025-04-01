import { NavLink } from "react-router-dom";
import { Logo } from "./logo";
import { RoundNavLink } from "./round-nav-link";
import { NAV_BAR_LINK } from "../../scss/base/tailwind";

export function NavBar() {
	return (
		<>
		<header className="fixed z-50 w-full h-20 bg-secondary flex items-center justify-between px-16 ">
			<div className="gap-16 flex items-center">
				<Logo />
				<div className="bg-white opacity-60 w-0.5 h-8" />
				<div className="gap-6 flex items-center">
					<NavLink to='/' className={NAV_BAR_LINK}>Home</NavLink>
					<NavLink to='/shop' className={NAV_BAR_LINK}>Shop</NavLink>
					<NavLink to='/' className={NAV_BAR_LINK}>Why us</NavLink>
					<NavLink to='/' className={NAV_BAR_LINK}>Contact</NavLink>
					<div className="ml-10">
						<RoundNavLink link="/cart" title="Go to cart" />
					</div>
				</div>
			</div>
			<NavLink to='/' className={`${NAV_BAR_LINK} block`}>Sign in</NavLink>
		</header>
		<div className="w-full h-20"/>
		</>
	)
}