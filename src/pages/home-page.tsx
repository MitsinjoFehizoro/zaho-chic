import { Contact } from "../components/home/contact";
import { ForAll } from "../components/home/for-all";
import { Welcome } from "../components/home/welcome";
import { WhyUs } from "../components/home/why-us";

export function HomePage() {
	return (
		<>
			<Welcome />
			<ForAll />
			<WhyUs />
			<Contact/>
		</>
	)

}