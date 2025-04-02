import { deleteCartItemApi, updateCartItemApi } from './../api/cart-item-api';
export const updateCartItemService = async (quantity: number, cartItemId: string) => {
	try {
		const apiData = await updateCartItemApi(quantity, cartItemId)
		return apiData
	} catch (e) {
		console.log("Update cartItem failed")
		throw new Error("Update cartItem failed")
	}
}

export const deleteCartItemService = async (cartItemId: string) => {
	try {
		const apiData = await deleteCartItemApi(cartItemId)
		return apiData
	} catch (e) {
		console.log("Delete cartItem failed")
		throw new Error("Delete cartItem failed")
	}
}
