import { Cart } from "../../types/Cart";
import { CartItemComponent } from "./cart-item-component";

type Props = {
	cart: Cart
}
export function CartCard({ cart }: Props) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="text-white text-2xl pt-8 pb-6 mb-6 border-b border-white border-opacity-20">Shopping cart</h1>
			{
				cart.cartItems.map(cartItem => (
					<CartItemComponent key={cartItem.id} cartItem={cartItem} />
				))
			}
		</div>
	)
}