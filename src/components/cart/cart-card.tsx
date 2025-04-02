import { Cart } from "../../types/Cart";
import { CartItemComponent } from "./cart-item-component";

type Props = {
	cart: Cart
	onUpdate: () => void
}
export function CartCard({ cart, onUpdate }: Props) {
	return (
		<div className="w-full flex flex-col">
			<h1 className="text-white text-2xl pt-8 pb-6 mb-6 border-b border-white border-opacity-20">Shopping cart</h1>
			{
				cart.cartItems.length > 0 ? (
					cart.cartItems.map(cartItem => (
						<CartItemComponent key={cartItem.id} cartItem={cartItem} onUpdate={onUpdate} />
					))
				) : (
					<p className="text-white text-center text-opacity-80">Your cart is still empty.</p>
				)
			}	
		</div>
	)
}