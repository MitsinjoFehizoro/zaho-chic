import tee from '../../assets/images/teeshirt.png';
import { UpdateSize } from './update-size';
import { ButtonDelete } from './button-delete';
import { UpdateQuantity } from './update-quantity';
import { Price } from '../global/price';
export function CartItem() {

	return (
		<div className='mb-12'>
			<div className="flex">
				<div className="min-w-36 h-36 bg-tertiary rounded-xl flex items-center justify-center">
					<img src={tee} className="max-h-32 max-w-32" />
				</div>
				<div className="py-2 px-6">
					<h3 className="text-primary text-lg font-black capitalize truncate">Basic Tee Shirt</h3>
					<p className=" text-white text-opacity-80 text-sm line-clamp-2 trancuate my-2">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corporis quibusdam consequatur ratione voluptas at nemo exercitationem deleniti numquam voluptate iure autem, temporibus impedit laborum aut omnis corrupti asperiores qui.
					</p>
					<Price
						value={34}
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