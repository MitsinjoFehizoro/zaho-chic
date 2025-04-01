import { CartCard } from "../components/cart/cart-card";
import { OrderSummary } from "../components/cart/order-summary";

export function CartPage() {
	return (
		<section className="min-h-[100vh] gap-8 px-24 flex justify-between">
			<div className="fixed -z-10 w-[50rem] h-[30rem] top-0 -left-32 rounded-full blur-3xl bg-primary opacity-[.08]" />
			<CartCard />
			<OrderSummary />
		</section>
	)
}