import { BigRoundNavLink } from "../global/big-round-nav-link";
import { Price } from "../global/price";

export function OrderSummary() {

	return (
		<div className="w-[30rem] h-40 py-8 px-8 mt-20 bg-tertiary rounded-xl">
			<p className="text-white text-opacity-80 mb-6">Order summary : </p>
			<div className="flex items-center justify-between">
				<Price value={7520} />
				<BigRoundNavLink
					link=""
					title="Validate"
					isWithIcon={true}
					className="bg-primary text-base"
				/>
			</div>

		</div>
	)
}