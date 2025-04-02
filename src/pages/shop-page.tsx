
import { Wish } from "../components/shop/wish";
import useFetch from "../hooks/useFetch";
import Category from "../types/Category";
import { getAllCategoriesService } from "../services/category-service";
import { CategoryComponent } from "../components/shop/category-component";
import { LoadingComponent } from "../components/global/loading-component";
import { useEffect } from "react";

export function ShopPage() {
	const { stateFetch, fetchData } = useFetch<Category[]>(getAllCategoriesService)
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<section className="px-40 min-h-[100vh]">
			{
				stateFetch.loading ? (
					<LoadingComponent />
				) : (
					<Wish />
				)
			}

			{
				stateFetch.data && stateFetch.data.length > 0 && (
					stateFetch.data.map(category => (
						<CategoryComponent key={category.id} category={category} />
					))
				)
			}
		</section>
	)
}