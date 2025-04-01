
import { Wish } from "../components/shop/wish";
import useFetch from "../hooks/useFetch";
import Category from "../types/Category";
import { fetchCategories } from "../services/category-service";
import { CategoryComponent } from "../components/shop/category-component";
import { LoadingComponent } from "../components/global/loading-component";

export function ShopPage() {
	const stateFetchCategories = useFetch<Category[]>(fetchCategories)

	return (
		<section className="px-40 min-h-[100vh]">
			{
				stateFetchCategories.loading ? (
					<LoadingComponent />
				) : (
					<Wish />
				)
			}

			{
				stateFetchCategories.data && stateFetchCategories.data.length > 0 && (
					stateFetchCategories.data.map(category => (
						<CategoryComponent category={category} />
					))
				)
			}
		</section>
	)
}