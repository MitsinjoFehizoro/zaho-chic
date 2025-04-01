import tee from "../../assets/images/teeshirt.png";
import { BigRoundNavLink } from "../global/big-round-nav-link";
import { Price } from "../global/price";
export function ProductItem() {
	return (
		<div className="w-80 flex flex-col items-center ">
			<img src={tee} className="max-w-80 h-56 bd-red-500 z-20" />
			<div className="flex flex-col gap-y-6 bg-tertiary w-full px-6 py-10 -mt-28 pt-36">
				<h3 className="text-primary text-lg font-black capitalize truncate">Basic tee shirt</h3>
				<p className=" text-white text-opacity-80 text-sm line-clamp-3 trancuate pl-1">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis corporis quibusdam consequatur ratione voluptas at nemo exercitationem deleniti numquam voluptate iure autem, temporibus impedit laborum aut omnis corrupti asperiores qui.
				</p>
				<div className="flex items-center">
					<p className="flex items-center">
						<i className="fa fa-circle-info text-xs text-blue-400 block pt-0.5"></i>
						<span className="text-white px-2 block text-lg"> Size : </span>
					</p>
					<p className="text-white text-opacity-80 pt-1 font-extrabold text-sm uppercase truncate">S - M - XL - XL - 39 - 40</p>
				</div>
				<div className="w-full flex flex-col gap-y-3">
					<Price
						value={34}
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