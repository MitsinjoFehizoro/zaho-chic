import Category from "../../types/Category";
import { BigRoundNavLink } from "../global/big-round-nav-link";
import { CategoryTitle } from "./category-title";
import { ProductItem } from "./product-item";
import { Quality } from "./quality";

type Props = {
	category: Category
}
export function CategoryComponent({ category }: Props) {

	return (
		<div>
			<CategoryTitle title={category.name} />
			<div className="flex items-center justify-between">
				<Quality />
				<BigRoundNavLink
					link=""
					title="Explore more"
					className="w-44 !text-base border-2 border-primary"
				/>
			</div>
			<div className="flex flex-wrap justify-between gap-y-8 py-12">
				{
					category.products.map(product=>(
						<ProductItem product={product}/>
					))
				}
			</div>
		</div>
	)
}