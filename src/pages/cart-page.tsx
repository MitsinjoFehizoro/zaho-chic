import { CartCard } from "../components/cart/cart-card";
import { OrderSummary } from "../components/cart/order-summary";
import { BlurStyle } from "../components/global/blur-style";

export function CartPage() {
	return (
		<section className="min-h-[100vh] gap-8 px-24 flex justify-between">
			<BlurStyle />
			<CartCard />
			<OrderSummary />
		</section>
	)
}