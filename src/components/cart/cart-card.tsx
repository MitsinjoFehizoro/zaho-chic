import { CartItem } from "./cart-item";

export function CartCard() {
	return (
		<div className="w-full flex flex-col">
			<h1 className="text-white text-2xl pt-8 pb-6 mb-6 border-b border-white border-opacity-20">Shopping cart</h1>
			<CartItem />
			<CartItem />
		</div>
	)
}