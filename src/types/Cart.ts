import { CartItem } from './CartItem';
export interface Cart {
	id: number,
	totalAmount: number,
	cartItems: CartItem[]
}