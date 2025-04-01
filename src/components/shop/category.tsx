import { BigRoundNavLink } from "../global/big-round-nav-link";
import { CategoryTitle } from "./category-title";
import { ProductItem } from "./product-item";
import { Quality } from "./quality";

export function Category() {

	return (
		<div>
			<CategoryTitle title="pantalon"/>
			<div className="flex items-center justify-between">
				<Quality />
				<BigRoundNavLink
					link=""
					title="Explore more"
					className="w-44 !text-base border-2 border-primary"
				/>
			</div>
			<div className="flex justify-between py-12">
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</div>
	)
}