import Product from "./Product";

export interface CartItem {
	id: number,
	quantity: number,
	totalPrice: number,
	product: Product
}