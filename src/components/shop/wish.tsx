import { BigLogo } from "../global/logo";

export function Wish() {

	return (
		<section className="pt-16 pb-32">
			<div className="fixed -z-10 w-[50rem] h-[30rem] -top-12 -left-32 rounded-full blur-3xl bg-primary opacity-[.08]" />
			<BigLogo />
			<div className="mt-4 ml-14">
				<h1 className="text-white text-opacity-90 text-2xl mb-2">May your shopping experience</h1>
				<h1 className="text-white text-opacity-90 text-2xl">be as delightful and stylish as you are !</h1>
			</div>
		</section>
	)
}