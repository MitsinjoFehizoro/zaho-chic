import { ShopCard } from "./shop-card";
import men from "../../assets/images/men.avif";
import women from "../../assets/images/women.jpg";
import kids from "../../assets/images/kids.webp";
export function Shop() {
	return (
		<section className="flex flex-col items-center justify-center py-32">
			<div className="gap-20 flex">
				<ShopCard image={kids} title="kids" />
				<ShopCard image={men} title="men" />
				<ShopCard image={women} title="women" />
			</div>
			<h1 className="mt-16 text-center text-white text-4xl font-extrabold">We offer fashion for everyone.</h1>
			<p className="w-1/2 text-center text-white mt-4 opacity-80">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reicien
				dis, voluptatem consectetur, incidunt accusamus blanditiis inciduntqui
				 necessitatibus eligendi facere modi cum debitis ratione natus ad!
			</p>
		</section>
	)
}