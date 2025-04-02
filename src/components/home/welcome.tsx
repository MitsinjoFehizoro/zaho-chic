import image from "../../assets/images/background.webp";
import { useAuthContext } from "../../hooks/useAuthContext";
import { TITLE } from "../../scss/base/tailwind";
import { BigRoundNavLink } from "../global/big-round-nav-link";

export function Welcome() {
	const { isAuth } = useAuthContext()
	return (
		<section className="relative h-[80vh] overflow-hidden">
			<div className="w-full h-[80vh] absolute bg-secondary opacity-70" />
			<div className="flex flex-col items-center justify-end pb-16 w-full h-[80vh] absolute bg-gradient-to-t from-secondary via-secondary/60 to-transparent">
				<h1 className={`${TITLE} mb-3`}>Welcome to our online shop, Zaho Chic</h1>
				<h1 className={`${TITLE}`}> Where Style Meets Elegance</h1>
				<p className="w-1/2 text-center text-white my-8 opacity-60">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reicien
					dis, voluptatem consectetur, incidunt accusamus blanditiis
					temporibus ipsum hic veritatis minima nesciunt qui necessitatibus
					eligendi facere modi cum debitis ratione natus ad!
				</p>
				<div className="flex gap-6">
					{
						isAuth ? (
							<BigRoundNavLink link="/cart" title="Go to cart" className="bg-tertiary" />
						) : (
							<BigRoundNavLink link="/register" title="Register" className="bg-tertiary" />
						)
					}
					<BigRoundNavLink link="/shop" title="Buy now" className="bg-primary" isWithIcon={true} />
				</div>
			</div>
			<img src={image} />
		</section>
	)
} 