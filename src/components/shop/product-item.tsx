
import Product from "../../types/Product";
import { BigRoundNavLink } from "../global/big-round-nav-link";
import { Price } from "../global/price";

type Props = {
	product: Product
}
export function ProductItem({ product }: Props) {
	return (
		<div className="w-80 flex flex-col items-center ">
			<img src={product.images.length > 0 ? product.images[0].path : "/public/products/tee-shirt1.png" } className="max-w-80 h-56 bd-red-500 z-20" />
			<div className="flex flex-col gap-y-6 bg-tertiary w-full px-6 py-10 -mt-28 pt-36">
				<h3 className="text-primary text-lg font-black capitalize truncate">{product.title}</h3>
				<p className=" text-white text-opacity-80 text-sm line-clamp-3 trancuate pl-1">
					{product.description}
				</p>
				<div className="flex items-center">
					<p className="flex items-center">
						<i className="fa fa-circle-info text-xs text-blue-400 block pt-0.5"></i>
						<span className="text-white px-2 block text-lg"> Size : </span>
					</p>
					<p className="text-white text-opacity-80 pt-1 font-extrabold text-sm uppercase truncate">
						{product.size}
					</p>
				</div>
				<div className="w-full flex flex-col gap-y-3">
					<Price
						value={product.price}
						isPerPiece={true}
					/>
					<div className="flex gap-2">
						<BigRoundNavLink
							link=""
							title="More"
							className="!text-white !text-base w-2/5 border-2 border-primary"
						/>
						<BigRoundNavLink
							link=""
							title="add to cart"
							isWithIcon={true}
							className="bg-primary w-4/5 !text-base"
						/>
					</div>

				</div>
			</div>
		</div>
	)
}