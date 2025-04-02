import { UpdateSize } from './update-size';
import { ButtonDelete } from './button-delete';
import { UpdateQuantity } from './update-quantity';
import { Price } from '../global/price';
import { CartItem } from '../../types/CartItem';

type Props = {
	cartItem: CartItem
}
export function CartItemComponent({ cartItem }: Props) {

	return (
		<div className='mb-12'>
			<div className="flex">
				<div className="min-w-36 h-36 bg-tertiary rounded-xl flex items-center justify-center">
					<img src={cartItem.product.images[0].path} className="max-h-32 max-w-32" />
				</div>
				<div className="py-2 px-6">
					<h3 className="text-primary text-lg font-black capitalize truncate">{cartItem.product.title}</h3>
					<p className=" text-white text-opacity-80 text-sm line-clamp-2 trancuate my-2">
						{cartItem.product.description}
					</p>
					<Price
						value={cartItem.product.price}
						isPerPiece={true}
					/>
				</div>
				<div className="block">
					<ButtonDelete />
				</div>
			</div>
			<div className="flex items-center justify-between mt-4 py-4 px-8 bg-tertiary rounded-xl">
				<div className='flex gap-4'>
					<UpdateSize />
					<UpdateQuantity />
				</div>
				<Price value={34} />
			</div>
		</div>
	)
}