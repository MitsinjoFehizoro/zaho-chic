import { Contact } from "../components/home/contact";
import { Shop } from "../components/home/shop";
import { Welcome } from "../components/home/welcome";
import { WhyUs } from "../components/home/why-us";

export function HomePage() {
	return (
		<>
			<Welcome />
			<Shop />
			<WhyUs />
			<Contact/>
		</>
	)

}