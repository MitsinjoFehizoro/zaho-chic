import { useEffect } from "react";
import { CartCard } from "../components/cart/cart-card";
import { OrderSummary } from "../components/cart/order-summary";
import { BlurStyle } from "../components/global/blur-style";
import { LoadingComponent } from "../components/global/loading-component";
import useFetch from "../hooks/useFetch";
import { getCartService } from "../services/cart-service";

export function CartPage() {
	const { stateFetch, fetchData } = useFetch(getCartService)

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<section className="min-h-[100vh] gap-8 px-24 flex justify-between">
			<BlurStyle />
			{
				stateFetch.loading && (
					<LoadingComponent />
				)
			}
			{
				stateFetch.data && (
					<>
						<CartCard cart={stateFetch.data.data} />
						<OrderSummary cart={stateFetch.data.data}  />
					</>
				)
			}

		</section>
	)
}