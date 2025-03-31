import { TITLE } from "../../scss/base/tailwind"
import { BigRoundNavLink } from "../global/big-round-nav-link"
import { WhyUsCard } from "./why-us-card"

export function WhyUs() {
	const DESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita saepe dolorum error, natus consequuntur at placeat quibusdam cupiditate odit ipsum, provident sit voluptatem obcaecati ratione unde quidem voluptas est!"
	return (
		<section className="flex flex-col items-center pt-12 pb-32 bg-gradient-to-b from-tertiary via-tertiary/1 to-transparent">
			<h1 className={`${TITLE} mt-16 mb-6`}>Why we are your best choice ?</h1>
			<p className="w-1/2 text-center text-white opacity-60">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reicien
				dis, voluptatem consectetur, incidunt accusamus blanditiis
				temporibus ipsum hic veritatis minima nesciunt qui necessitatibus
				eligendi facere modi cum debitis ratione natus ad!
			</p>
			<BigRoundNavLink link="/" title="Buy now" className="bg-primary my-12" isWithIcon={true} />
			<div className="flex justify-center gap-12 ">
				<WhyUsCard title="quality" description={DESCRIPTION} link="/" />
				<WhyUsCard title="authenticity" description={DESCRIPTION} link="/" />
				<WhyUsCard title="best price" description={DESCRIPTION} link="/" />
			</div>
		</section>
	)
}