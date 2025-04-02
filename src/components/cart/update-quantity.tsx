import React, { useEffect, useState } from "react"
import { CartItem } from "../../types/CartItem"
import useFetch from "../../hooks/useFetch"
import { updateCartItemService } from "../../services/cart-item-service"

type Props = {
	cartItem: CartItem,
	onUpdate: () => void
}

export function UpdateQuantity({ cartItem, onUpdate }: Props) {
	const btnStyle = "w-10 h-10 bg-secondary  text-white text-opacity-80 text-center transition-colors hover:bg-primary"
	const [quantity, setQuantity] = useState(cartItem.quantity)
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuantity(parseInt(e.target.value))
	}
	let newQuantity = quantity
	const incrementQuantity = async () => {
		newQuantity = quantity + 1
		await fetchData()
		onUpdate()
	}
	const decrementQuantity = async () => {
		newQuantity = quantity > 1 ? quantity - 1 : newQuantity
		await fetchData()
		onUpdate()
	}

	const { stateFetch, fetchData } = useFetch(() => updateCartItemService(newQuantity, cartItem.id.toString()))

	return (
		<div className="h-10 flex justify-evenly items-center  text-white text-opacity-80 bg-tertiary rounded-lg overflow-hidden">
			<button onClick={decrementQuantity} className={btnStyle}>-</button>
			<input
				type="number"
				name="quantity"
				value={quantity}
				onChange={handleChange}
				className="h-10 w-16 outline-none text-center bg-transparent -mr-5"
			/>
			<button onClick={incrementQuantity} className={btnStyle}>+</button>
		</div>
	)
}