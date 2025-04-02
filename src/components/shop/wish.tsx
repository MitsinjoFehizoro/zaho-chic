import { BlurStyle } from "../global/blur-style";
import { BigLogo } from "../global/logo";

export function Wish() {

	return (
		<section className="pt-16 pb-32">
			<BlurStyle/>
			<BigLogo />
			<div className="mt-4 ml-14">
				<h1 className="text-white text-opacity-90 text-2xl mb-2">May your shopping experience</h1>
				<h1 className="text-white text-opacity-90 text-2xl">be as delightful and stylish as you are !</h1>
			</div>
		</section>
	)
}