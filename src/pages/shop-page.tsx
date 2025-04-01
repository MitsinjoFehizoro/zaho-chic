import { Category } from "../components/shop/category";
import { Wish } from "../components/shop/wish";

export function ShopPage() {
	return (
		<section className="px-40">
			<Wish />
			<Category />
			<Category />
			<Category />
		</section>
	)
}