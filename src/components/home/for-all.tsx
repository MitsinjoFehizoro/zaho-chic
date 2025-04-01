import { ForAllCard } from "./for-all-card";
import men from "../../assets/images/men.avif";
import women from "../../assets/images/women.jpg";
import kids from "../../assets/images/kids.webp";
import { TITLE } from "../../scss/base/tailwind";
export function ForAll() {
	return (
		<section className="flex flex-col items-center justify-center py-32">
			<div className="gap-12 flex">
				<ForAllCard image={kids} title="kids" />
				<ForAllCard image={men} title="men" />
				<ForAllCard image={women} title="women" />
			</div>
			<h1 className={`${TITLE} mt-16`}>We offer fashion for everyone.</h1>
			<p className="w-1/2 text-center text-white mt-4 opacity-80">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reicien
				dis, voluptatem consectetur, incidunt accusamus blanditiis inciduntqui
				 necessitatibus eligendi facere modi cum debitis ratione natus ad!
			</p>
		</section>
	)
}